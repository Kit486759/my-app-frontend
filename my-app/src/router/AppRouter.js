import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../App'
import Login from '../component/login/Login'
import Wrapper from '../component/wrapper/Wrapper'
import SignUp from '../component/signUp/SignUp'
import Profile from '../component/profile/Profile'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Wrapper>
                <Switch>
                    <Route path='/' component={App} exact={true} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/profile' component={Profile}/>
                </Switch>
            </Wrapper>
        </BrowserRouter>
    )
}

