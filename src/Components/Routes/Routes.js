import { Route , Switch, Redirect } from "react-router-dom"
import Main from '../../pages/Main/Main'
import Login from '../../pages/Login/Login'
const Routes =({user}) => {
    return (   
        user ? (
            <Switch>
                <Route exact path='/' component={Main} />
                <Redirect to='/' />
            </Switch>
        ):(
            <Switch>
                <Route exact path='/login' component={Login} />
                <Redirect to='/login' />
            </Switch>
        )
    )
}
export default Routes;
