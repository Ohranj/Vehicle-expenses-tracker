import React from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

import DashAddVehicles from './DashAddVehicles'
import DashRenderVehicles from './DashRenderVehicles'


class DashVehicles extends React.Component {

    state = {
        token: localStorage.getItem('token'),
        myVehicles: []
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:8080/dash',
            headers: {
                'Authorization' : `Bearer ${this.state.token}`
            }
        })
        .then(({data}) => {
            const updateVehicles = [...this.state.myVehicles, data]
            this.setState({
                myVehicles: updateVehicles[0]
            })
        })
        .catch((err) => console.log(err))
    }

    render() {
        if (!this.state.token) {
            return (
                <Redirect to="/" />
            )
        } else {
            return (
                <div style={{height: '100%'}}>
                    <div className="ui grid centered" style={{height: '70%'}}>
                        <div className="two wide column"></div>
                        <div className="twelve wide column" style={{paddingTop: '25px'}}>
                            <table className="ui celled table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Vehicle Reg.</th>
                                        <th>Make</th>
                                        <th>Model</th>
                                        <th>Mileage</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="vehicleTable">
                                    <DashRenderVehicles vehicles={this.state.myVehicles} />
                                </tbody>
                            </table>
                        </div>
                        <div className="two wide column"></div>
                    </div>  
                    <DashAddVehicles />
                </div>
            )
        }
    }
}


export default DashVehicles