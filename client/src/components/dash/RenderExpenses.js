import React from 'react'


class RenderExpenses extends React.Component {


    render() {
        if (this.props.expense.length === 0) {
             return null   
        } else {
            return (
                this.props.expense.map((expense) => {
                    const year = expense.date.substring(0, 4)
                    const month = expense.date.substring(5, 7)
                    const day = expense.date.substring(8, 10)
                    const expenseDate = `${day}/${month}/${year}`
                    return (
                        <tr key={expense._id}>
                            <td>{expense.name}</td>
                            <td>{expense.description}</td>
                            <td>{expense.value}</td>
                            <td>{expenseDate}</td>
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