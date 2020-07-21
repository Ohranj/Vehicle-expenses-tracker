import React from 'react'
import axios from 'axios'


class EditVehicleModel extends React.Component {

    state = {
        editName: false,
        editReg: false,
        editMileage: false,
        newName: '',
        newReg: '',
        newMileage: ''
    }

    submitEdit = e => {
        e.preventDefault()
        axios({
            method: 'patch',
            url: `http://localhost:8080/dash/${this.props.vehicleId}`,
            headers: {
                'Authorization': `Bearer ${this.props.token}`
            },
            data: {
                name: this.state.editName ? this.state.newName : this.props.vehicleName,
                registration: this.state.editReg ? this.state.newReg : this.props.reg,
                mileage: this.state.editMileage ? this.state.newMileage : this.props.mileage
            }
        }).then(() => {
            window.location.reload()
        }).catch((err) => {
            console.log(err)
        })
    }



    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: '5%', borderTop: '1px solid black', padding: '5px'}}>
                <h3>Edit {this.props.vehicleName}</h3>
                <form style={{display: 'flex', justifyContent: 'center'}} onSubmit={this.submitEdit}>
                        <div className="ui form">
                            <div className="fields">
                                <div className="field">
                                    <label>Name</label>
                                    <input type="checkbox" checked={this.state.editName} onChange={() => {this.setState({editName: !this.state.editName})}} />
                                    <input
                                        type="text"
                                        disabled={!this.state.editName}
                                        placeholder="Enter new name..."
                                        onChange={({target}) => this.setState({newName: target.value})} 
                                    />
                                </div>
                                <div className="field">
                                    <label>Vehicle Reg.</label>
                                    <input type="checkbox" checked={this.state.editReg} onChange={() => {this.setState({editReg: !this.state.editReg})}} />
                                    <input
                                        type="text"
                                        disabled={!this.state.editReg}
                                        placeholder="Enter new reg..."
                                        onChange={({target}) => this.setState({newReg: target.value})} 
                                    />
                                </div>
                                <div className="field">
                                    <label>Mileage</label>
                                    <input type="checkbox" checked={this.state.editMileage} onChange={() => {this.setState({editMileage: !this.state.editMileage})}} />
                                    <input
                                        type="number"
                                        disabled={!this.state.editMileage}
                                        placeholder="Enter new mileage..."
                                        onChange={({target}) => this.setState({newMileage: target.value})} 
                                    />
                                </div>
                                <div className="field">
                                    <button type="submit" className="ui button yellow tableBtn" style={{marginTop: '30px'}}>Submit</button>
                                </div>
                            </div>
                        </div>
                </form>
           </div>
        )
    }
}


export default EditVehicleModel