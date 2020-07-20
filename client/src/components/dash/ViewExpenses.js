import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'

import RenderExpenses from './RenderExpenses'


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
        }).then(({data}) => this.setState(
            {
                newExpense: [...this.state.newExpense, data],
                inputName: '',
                inputDesc: '',
                inputValue: '',
                inputDate: ''
            }
        ))
        .catch((err) => console.log(err))
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: `http://localhost:8080/expenses/${this.props.location.state.selectedVehicleiD}`,
            headers: {
                'Authorization': `Bearer ${this.state.token}`
            }
        }).then(({data}) => {
            data.map((expense) => {
                return this.setState({
                    newExpense: [...this.state.newExpense, expense]
                })
            })
        }).catch((err) => {
            console.log(err)
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
                    <div className="ui grid" style={{height: '80%'}}>
                        <div className="three wide column expenseLeftCol">
                            <Link to="/dashboard"><button className="tableBtn" style={{cursor: 'pointer'}}>Return</button></Link>
                        </div>
                        <div className="ten wide column centered" style={{marginTop: '5%'}}>
                        <h3>Expenses for {this.props.location.state.selectedVehicleName}</h3>
                            <table className="ui celled table expenseTable compact striped">
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
                                    <RenderExpenses expense={this.state.newExpense} />
                                    <tr>
                                        <td>
                                            <input
                                                type="text"
                                                value={this.state.inputName}
                                                onChange={({target}) => this.setState({inputName: target.value})} 
                                            />
                                        </td>
                                        <td>
                                            <textarea 
                                                value={this.state.inputDesc} 
                                                onChange={({target}) => this.setState({inputDesc: target.value})}>
                                            </textarea>
                                        </td>
                                        <td>
                                            <input 
                                                value={this.state.inputValue} 
                                                type="number" 
                                                onChange={({target}) => this.setState({inputValue: target.value})} 
                                            />
                                        </td>
                                        <td>
                                            <input 
                                                value={this.state.inputDate} 
                                                type="date" 
                                                onChange={({target}) => this.setState({inputDate: target.value})} 
                                            />
                                        </td>
                                        <td>
                                            <button 
                                                className="ui green button tableBtn" 
                                                onClick={this.submitExpense}>
                                                Submit
                                            </button>
                                        </td>
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