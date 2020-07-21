import React from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

import DashAddVehicles from './DashAddVehicles'
import DashRenderVehicles from './DashRenderVehicles'
import EditVehicleModel from './EditVehicleModel'


class DashVehicles extends React.Component {

    state = {
        token: localStorage.getItem('token'),
        myVehicles: [],
        displayEdit: false,
        vehicleIdToEdit: '',
        vehicleToEdit: '',
        vechileMilage: '',
        vehicleReg: ''
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

    displayEditForm = (id, vehicleName, vehicleReg, vehicleMileage) => {
        this.setState({
            displayEdit: !this.state.displayEdit,
            vehicleIdToEdit: id,
            vehicleToEdit: vehicleName,
            vehicleReg,
            vehicleMileage
        })
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
                            <table className="ui celled table striped compact selectable">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Vehicle Reg.</th>
                                        <th>Make</th>
                                        <th>Model</th>
                                        <th>Mileage</th>
                                        <th>Expenses</th>
                                        <th colSpan="2"></th>
                                    </tr>
                                </thead>
                                <tbody className="vehicleTable">
                                    <DashRenderVehicles editVehicle={this.displayEditForm} vehicles={this.state.myVehicles} />
                                </tbody>
                            </table>
                            {this.state.displayEdit ? <EditVehicleModel token={this.state.token} vehicleName={this.state.vehicleToEdit} vehicleId={this.state.vehicleIdToEdit} reg={this.state.vehicleReg} mileage={this.state.vehicleMileage} /> : null}
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