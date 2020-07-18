import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'


class Login extends React.Component {

    state = {
        email: '',
        password: '',
        userLoggedIn: false,
        userFound: true,
        displayLoader: false
    }

    submitLogin = e => {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://localhost:8080/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                email: this.state.email,
                password: this.state.password
            }
        }).then(({data}) => this.successLogin(data))
        .catch(() => this.failedLogin())
    }

    successLogin = ({token}) => {
        localStorage.setItem('token', token)
        this.setState({
            displayLoader: true, 
            userFound: true
        })
        setTimeout(() => {
            this.setState({
                userLoggedIn: true
            })
        }, 3000)
    }

    failedLogin = () => {
        this.setState({userFound: false})
    }

    render() {
        if (this.state.userLoggedIn) {
            return (
                <Redirect to="/register" />
            )
        } else {
            return (
                <div className="ui three column grid" style={{minHeight: '100%'}}>
                    <div className="column pageBlurb">
                        <p>Quickly and easily track expenses for a fleet of vehicles.</p>
                        <p>Once logged in, input your vehicles to the page and update individual expenses as and when needed.</p>
                    </div>
                    <div className="column formOuterContainer">
                        <form className="ui form formStyling" onSubmit={this.submitLogin}>
                            <div className="field labelStyling">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
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
                        <div>
                            {this.state.displayLoader
                                ? 
                                <div className="loadingIcon">
                                    <i className="fa fa-circle-o-notch fa-spin"></i>
                                    Accessing your dashboard...
                                </div>
                                :
                                null}
                        </div>
                    </div>
                    <div className="column">
                        {!this.state.userFound
                            ?
                            <div className="noUserError">
                                No user found. Check your email or password
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
            )
        }
    }
}


export default Login