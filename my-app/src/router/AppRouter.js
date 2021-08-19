import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../App'
import Login from '../component/login/Login'
import Wrapper from '../component/wrapper/Wrapper'
import SignUp from '../component/signUp/SignUp'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Wrapper>
                <Switch>
                    <Route path='/' component={App} exact={true} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={SignUp} />
                </Switch>
            </Wrapper>
        </BrowserRouter>
    )
}

