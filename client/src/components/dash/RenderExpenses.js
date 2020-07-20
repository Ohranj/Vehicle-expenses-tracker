import React from 'react'


class RenderExpenses extends React.Component {

    render() {
        if (this.props.expense.length === 0) {
             return null   
        } else {
            return (
                this.props.expense.map((expense) => {
                    return (
                        <tr key={expense._id}>
                            <td>{expense.name}</td>
                            <td>{expense.description}</td>
                            <td>{expense.value}</td>
                            <td>{expense.date}</td>
                            <td>
                                <button
                                    className="ui red button tableBtn"
                                    onClick={() => this.props.deleteExpense(expense._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })
            )
        }
    }
}


export default RenderExpenses