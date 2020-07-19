import React from 'react'
import {Link} from 'react-router-dom'


class DashRenderVehicles extends React.Component {

    state = {
        selectedVehicleName: '',
        selectedVehicleiD: ''
    }

    renderVehicles = () => {
        const vehicleData = this.props.vehicles.map(vehicle => {
            return (
                <tr style={{cursor: 'pointer'}} key={vehicle._id}>
                    <td data-label="Name">{vehicle.name}</td>
                    <td data-label="vehicle-reg">{vehicle.registration}</td>
                    <td data-label="make">{vehicle.make}</td>
                    <td data-label="model">{vehicle.model}</td>
                    <td data-label="mileage">{vehicle.mileage}</td>
                    <td><Link to={{
                        pathname: '/expenses',
                        search: `?id=${vehicle._id}$name=${vehicle.name}`,
                        state: {selectedVehicleName: vehicle.name, selectedVehicleiD: vehicle._id}
                    }}><button className="ui green button tableBtn">View</button></Link></td>
                    <td><button className="ui yellow button tableBtn">Edit</button></td>
                    <td><button className="ui red button tableBtn">Delete</button></td>
                </tr>
            )
        })
        return vehicleData
    }

    render() {
        return (
            this.renderVehicles()
        )
    }
}


export default DashRenderVehicles