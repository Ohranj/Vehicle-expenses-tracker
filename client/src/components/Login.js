import React from 'react'
import {Link, Redirect} from 'react-router-dom'


class Login extends React.Component {

    state = {
        email: '',
        password: '',
        userLoggedIn: false
    }

    submitLogin = e => {
        e.preventDefault()
        console.log(this.state.email, this.state.password)
    }

    render() {
        if (this.state.userLoggedIn) {
            return (
                <Redirect to="/register" />
            )
        } else {
            return (
                <div className="ui three column grid" style={{minHeight: '100%'}}>
                    <div className="column outerContainer pageBlurb">
                        <p>Quickly and easily track expenses for a fleet of vehicles</p>
                        <p>Once logged in, add your vehicles to the page and update expenses as and when needed</p>
                    </div>
                    <div className="column formOuterContainer">
                        <form className="ui form formStyling" onSubmit={this.submitLogin}>
                            <div className="field labelStyling">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email..." 
                                    onChange={({target}) => this.setState({email: target.value})} 
                                />
                            </div>
                            <div className="field labelStyling">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password..." 
                                    onChange={({target}) => this.setState({password: target.value})} 
                                />
                            </div>
                            <button className="ui button formSubmitBtn" type="submit">Submit</button>
                        </form>
                        <div style={{textAlign: 'center'}}>
                            <Link to="/register" className="button ui linkTo">Need an account? Register</Link>
                        </div>
                    </div>
                    <div className="column"></div>
                </div>
            )
        }
    }
}


export default Login