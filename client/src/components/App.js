import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './Login'
import Register from './Register'


const App = () => {
    return (
        <div style={{height: '100%'}}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}  />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
        </div>
    )
}

export default App