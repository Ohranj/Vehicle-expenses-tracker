import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import DashVehicles from './dash/DashVehicles'
import ViewExpenses from './dash/ViewExpenses'


const App = () => {
    return (
        <div style={{height: '100%'}}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}  />
                <Route path="/register" component={Register} />
                <Route path="/dashboard" component={DashVehicles} />
                <Route path="/expenses" component={ViewExpenses} />
            </Switch>
        </BrowserRouter>
        </div>
    )
}

export default App