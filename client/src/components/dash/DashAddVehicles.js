import React from 'react'
import axios from 'axios'


class DashAddVehicles extends React.Component {

    state = {
        name: '',
        reg: '',
        make: '',
        model: '',
        mileage: '',
    }

    addVehicleSubmit = e => {
        const token = localStorage.getItem('token')
        axios({
            method: 'post',
            url: 'http://localhost:8080/dash',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: {
                name: this.state.name,
                reg: this.state.reg,
                make: this.state.make,
                model: this.state.model,
                mileage: this.state.mileage
            }
        }).then((data) => console.log(data))
    }

    render() {
        return (
            <div className="ui grid centered" style={{height: '15%'}}>
                <div className="two wide column"></div>
                <div className="twelve wide column addVehicleContainer">
                    <div style={{paddingBottom: '25px'}}>
                        <h3>Add a new vehicle</h3>
                    </div>
                    <div>
                        <form className="ui form" onSubmit={this.addVehicleSubmit}>
                            <div className="fields">
                                <div className="field">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        onChange={({target}) => this.setState({name: target.value})}
                                    />
                                </div>
                                <div className="field">
                                    <label>Vehicle Reg.</label>
                                    <input 
                                        type="text"
                                        placeholder="Middle Name"
                                        onChange={({target}) => this.setState({reg: target.value})}
                                    />
                                </div>
                                <div className="field">
                                    <label>Make</label>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        onChange={({target}) => this.setState({make: target.value})}
                                    />
                                </div>
                                <div className="field">
                                    <label>Model</label>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        onChange={({target}) => this.setState({model: target.value})}
                                    />
                                </div>
                                <div className="field">
                                    <label>Mileage</label>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        onChange={({target}) => this.setState({mileage: target.value})}
                                    />
                                </div>
                                <div className="field">
                                    <button className="ui button addVehicleFormSubmitBtn" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="two wide column"></div>
            </div>
        )
    }
}


export default DashAddVehicles