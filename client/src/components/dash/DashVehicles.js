import React from 'react'
import {Redirect} from 'react-router-dom'

import DashAddVehicles from './DashAddVehicles'


class DashVehicles extends React.Component {

    state = {
        validLogin: localStorage.getItem('token')
    }

    render() {
        if (!this.state.validLogin) {
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
                                        <td data-label="Name">James</td>
                                        <td data-label="vehicle-reg">24</td>
                                        <td data-label="make">Engineer</td>
                                        <td data-label="model">insert</td>
                                        <td data-label="mileage">100</td>
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