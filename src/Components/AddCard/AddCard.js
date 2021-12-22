import { useState } from 'react'
import cls from './AddCard.module.scss'
const AddCard = ({ handleNewCard, disabledBtn }) => {
    const [enInput, setEnInput] = useState('')
    const [ruInput, setRuInput] = useState('')

    return (
        <div className={cls.root}>
            <input  
            type='text' className={cls.Eng} placeholder='english translation'
            onChange={(e) => {
                setEnInput(e.target.value)
            }}
            value={enInput}
            />
            <input
            type='text' className={cls.Rus } placeholder='русский перевод'
            onChange={(e)=>{
                setRuInput(e.target.value)
            }}
            value={ruInput}
            />
            <button
                disabled={disabledBtn}
                className={cls.addBtn}
                onClick={e => {
                e.preventDefault()
                handleNewCard(enInput,ruInput,setEnInput,setRuInput)
                }}
            >Добавить/Add</button>
        </div>
    )
}
export default AddCard