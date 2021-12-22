import cls from './Login.module.scss';
import {fire, provider} from '../../services/firebase';
const Login = () =>{
        
    const singIn = e => {
        e.preventDefault()
        fire.auth().signInWithPopup(provider)
        .then(res=>{
            console.log(res);
        })
        .catch(err => {
            console.error(err);
        })
    }

    return (
        <div className={cls.root}>
            <div className={cls.card}>
                <h1>Authorization</h1>
                <button onClick={singIn}>
                    <img className={cls.logo} src='https://cdn-icons.flaticon.com/png/512/2504/premium/2504739.png?token=exp=1640170757~hmac=813505fd3ca655f624605fdd0a371c44' alt='Google icon' />
                </button>
            </div>
        </div>
    )
}
export default Login;