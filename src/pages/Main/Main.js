import cls from './Main.module.scss';
import Card from "../../Components/Card/Card";
import { useEffect, useState } from 'react';
import AddCard from '../../Components/AddCard/AddCard';
import { fire } from '../../services/firebase'
import {changeCardIsRemembered, createNewCard, deleteCard, getCards} from '../../API/index'
import {useAuthState} from 'react-firebase-hooks/auth'
import Loading from '../../Components/Loading/Loading';
const App = () => {
    const [words, setWords] = useState(null)
    const [wordChangeState,setWordChangeState] = useState('')
    const [user] = useAuthState(fire.auth()); 
    const [disabledBtn, setDisabledBtn] = useState(false)

    useEffect(() => {
        getCards(`${user.uid}.json`)
        .then(res => res.json())
        .then(r => {
            if(r){
                const data = Object.entries(r).map(item => {
                    const id = item[0]
    
                    return {
                        ...item[1],
                        id
                    }
                })
                setWords(data)
            }else{
                setWords([])
            }
        })
    }, [user.uid, wordChangeState]) 
    const handleChangeWordState = (id, isRemembered) => {  
        changeCardIsRemembered(
            JSON.stringify({
                isRemembered:!isRemembered
            }),
            user.uid,
            id
        ).then(res => res.json())
        .then(r =>{
            setWordChangeState({
                id,
                r
            })
        })
    }
    const onNewCard = (en, ru, setEn, setRu) => {
        if(en !== '' && ru !== ''){
            setDisabledBtn(true)
            createNewCard(
                {
                    enLang: en,
                    ruLang:ru,
                    isRemembered:false
                },
                `${user.uid}.json`
            )
            .then(res => res.json())    
            .then(r => {
                setDisabledBtn(false)
                setEn('')
                setRu('')
                setWordChangeState(r)
            })
        }else{
            alert('не все поля заполнены')
        }
    }   
    const onDeleteCard = id => {
        const askDelete = window.confirm(`are u sure?`);
        if(askDelete){
            deleteCard(user.uid, id)
            .then(res => res.json())
            .then(() => {
                setWordChangeState(id)
            })
        }
    }
    const onEditCard = (id, ruLang, enLang) => {
        const askEnLang = window.prompt('english word', enLang)
        const askRuLang = window.prompt('русский вариант',ruLang)

        if(askRuLang&&askEnLang){
            changeCardIsRemembered(
                JSON.stringify({
                    enLang:askEnLang,
                    ruLang:askRuLang
                }),
                user.uid,
                id
                ).then(res => res.json())
                .then(r =>{
                    setWordChangeState({
                        id,
                        r,
                        ruLang,
                        enLang
                    })
                })
        }else{
            alert('pls write anything')
        }
    }
    const singOut = e =>{
        e.preventDefault();
        fire.auth().signOut()
    }
    return(
        <div className={cls.root}>
            <div className={cls.conti}>
                <button className={cls.signOutBtn} onClick={singOut}>Sing Out</button>
            </div>
                <AddCard handleNewCard={onNewCard} disabledBtn={disabledBtn} className={cls.AddCard}/>    
            <div className={cls.cards}>
                {
                    words?.length === 0 ? (
                        <><p>there is no cards please add them</p>
                         <p>нету карточек! добавь их</p>
                        </>
                    ):
                    words ? (
                        words.map(({ ruLang,enLang, id , isRemembered}) => (
                            <Card
                            onDelete={() => {
                                onDeleteCard(id)
                            }}
                            onEdit={()=>{
                                onEditCard(id, ruLang, enLang)
                            }}
                            onClick={()=> {
                                handleChangeWordState(id, isRemembered);
                            }} ru={ruLang}
                            en={enLang} 
                            isRemembered={isRemembered}
                            key={id}
                            />
                        )) 
                    ): <Loading />
                }
            </div>
        </div>
    )
}
export default App;