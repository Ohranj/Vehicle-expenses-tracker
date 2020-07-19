import React from 'react'


class DashRenderVehicles extends React.Component {

    renderVehicles = () => {
        const vehicleData = this.props.vehicles.map(vehicle => {
            return (
                <tr style={{cursor: 'pointer'}} key={vehicle._id} onClick={() => console.log(vehicle._id)}>
                    <td data-label="Name">{vehicle.name}</td>
                    <td data-label="vehicle-reg">{vehicle.registration}</td>
                    <td data-label="make">{vehicle.make}</td>
                    <td data-label="model">{vehicle.model}</td>
                    <td data-label="mileage">{vehicle.mileage}</td>
                    <td><button className="ui yellow button" style={{padding: '5px 11px'}}>Edit</button></td>
                    <td><button className="ui red button" style={{padding: '5px 11px'}}>Delete</button></td>
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