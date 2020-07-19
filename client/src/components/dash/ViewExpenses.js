import React from 'react'
import {Redirect, Link} from 'react-router-dom'


class ViewExpenses extends React.Component {

    state = {
        token: localStorage.getItem('token'),
        vehicleId: this.props.location.state.selectedVehicleiD,
        newExpense: []
    }

    render() {
        if (!this.state.token) {
            return (
                <Redirect to="/" />
            )
        } else {
            console.log(this.state.vehicleId)
            return (
                <div style={{height: '100%'}}>
                    <div className="ui grid" style={{height: '80%'}}>
                        <div className="three wide column" style={{marginTop: '5%', paddingLeft: '5%'}}>
                            <Link to="/dashboard"><button style={{padding: '5px 10px', cursor: 'pointer'}}>Return</button></Link>
                        </div>
                        <div className="ten wide column centered" style={{marginTop: '5%'}}>
                        <h3>Expenses for {this.props.location.state.selectedVehicleName}</h3>
                            <table className="ui celled table" style={{border: '1px solid black'}}>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Value</th>
                                        <th>Date</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>No Name Specified</td>
                                        <td>Unknown</td>
                                        <td>None</td>
                                        <td>19/07/2020</td>
                                        <td><button className="ui red button" style={{padding: '5px 11px'}}>Delete</button></td>
                                    </tr>
                                    <tr className="positive">
                                        <td>Jimmy</td>
                                        <td>Approved</td>
                                        <td>None</td>
                                        <td>17/07/2020</td>
                                        <td><button className="ui red button" style={{padding: '5px 11px'}}>Delete</button></td>
                                    </tr>
                                    <tr>
                                        <td>Jamie</td>
                                        <td>Unknown</td>
                                        <td>Requires call</td>
                                        <td>12/06/2020</td>
                                        <td><button className="ui red button" style={{padding: '5px 11px'}}>Delete</button></td>
                                    </tr>
                                    <tr className="negative">
                                        <td>Jill</td>
                                        <td>Unknown</td>
                                        <td>None</td>
                                        <td>27/4/2020</td>
                                        <td><button className="ui red button" style={{padding: '5px 11px'}}>Delete</button></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" /></td>
                                        <td><textarea></textarea></td>
                                        <td><input type="number" /></td>
                                        <td><input type="date" /></td>
                                        <td><button className="ui green button" style={{padding: '5px 11px'}}>Submit</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="three wide column"></div>
                    </div>
                </div>
            )
        }
    }
}


export default ViewExpenses