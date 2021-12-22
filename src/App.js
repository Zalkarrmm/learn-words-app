import Routes from './Components/Routes/Routes'
import cls from './App.module.scss'
import {useAuthState} from 'react-firebase-hooks/auth'
import {fire} from './services/firebase'
import Loading from './Components/Loading/Loading'
const App = () => {
    const [user,loading] = useAuthState(fire.auth());
    console.log(user);
      if(loading){
        return  (
            <div className={cls.loaderCont}> 
                <Loading />
            </div>
        )
    }return(    
            <div className={cls.root}>   
                <Routes user={user} />
            </div>
    )
}
export default App
