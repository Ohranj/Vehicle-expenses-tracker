import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'


class ViewExpenses extends React.Component {

    state = {
        token: localStorage.getItem('token'),
        newExpense: [],
        inputName: '',
        inputDesc: '',
        inputValue: '',
        inputDate: ''
    }

    submitExpense = () => {
        axios({
            method: 'post',
            url: `http://localhost:8080/expenses/${this.props.location.state.selectedVehicleiD}`,
            headers: {
                'Authorization': `Bearer ${this.state.token}`
            },
            data: {
                expenseName: this.state.inputName,
                expenseDesc: this.state.inputDesc,
                expenseValue: this.state.inputValue,
                expenseDate: this.state.inputDate
            }
        }).then(({data}) => console.log(data.expenses))
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
                    <div className="ui grid" style={{height: '80%'}}>
                        <div className="three wide column expenseLeftCol">
                            <Link to="/dashboard"><button className="tableBtn" style={{cursor: 'pointer'}}>Return</button></Link>
                        </div>
                        <div className="ten wide column centered" style={{marginTop: '5%'}}>
                        <h3>Expenses for {this.props.location.state.selectedVehicleName}</h3>
                            <table className="ui celled table expenseTable compact">
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
                                    <tr className="positive">
                                        <td>Jimmy</td>
                                        <td>Approved</td>
                                        <td>None</td>
                                        <td>17/07/2020</td>
                                        <td><button className="ui red button tableBtn">Delete</button></td>
                                    </tr>
                                    <tr className="negative">
                                        <td>Jill</td>
                                        <td>Unknown</td>
                                        <td>None</td>
                                        <td>27/4/2020</td>
                                        <td><button className="ui red button tableBtn">Delete</button></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" onChange={({target}) => this.setState({inputName: target.value})} /></td>
                                        <td><textarea onChange={({target}) => this.setState({inputDesc: target.value})}></textarea></td>
                                        <td><input type="number" onChange={({target}) => this.setState({inputValue: target.value})} /></td>
                                        <td><input type="date" onChange={({target}) => this.setState({inputDate: target.value})} /></td>
                                        <td><button className="ui green button tableBtn" onClick={this.submitExpense}>Submit</button></td>
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