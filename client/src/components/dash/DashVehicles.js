import React from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

import DashAddVehicles from './DashAddVehicles'


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
        }).then((res) => {
            const updateVehicles = [...this.state.myVehicles, res.data[0]]
            this.setState({
                myVehicles: updateVehicles
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
                                    <tr style={{cursor: 'pointer'}}>
                                        <td data-label="Name">Mark's van</td>
                                        <td data-label="vehicle-reg">KN34 7YY</td>
                                        <td data-label="make">Vauxhall</td>
                                        <td data-label="model">Vivaro</td>
                                        <td data-label="mileage">93,700</td>
                                        <td><button className="ui yellow button" style={{padding: '5px 11px'}}>Edit</button></td>
                                        <td><button className="ui red button" style={{padding: '5px 11px'}}>Delete</button></td>
                                    </tr>
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