import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'


class Register extends React.Component {

    state = {
        email: '',
        password: '',
        firstname: '',
        surname: '',
        allowFormSubmit: false,
        displayPasswordTip: false,
        userLoggedIn: false,
        successRegister: false
    }

    submitRegister = e => {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://localhost:8080/register',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                email: this.state.email,
                password: this.state.password,
                firstname: this.state.firstname,
                surname: this.state.surname
            }
        })
        .then(() => {this.onFormSubmitSuccess()})
        .catch((err) => console.log(err))
    }

    isValidForm = () => {
        const regExp = /[0-9]/
        const validEmail = this.state.email.includes('@')
        const validPassword = this.state.password.length >= 5 && regExp.test(this.state.password)
        validEmail && validPassword ? this.setState({allowFormSubmit: true}) : this.setState({allowFormSubmit: false})
    }
    
    renderPasswordTip = () => {
        this.setState({displayPasswordTip: !this.state.displayPasswordTip})
    }

    onFormSubmitSuccess = () => {
        this.setState({successRegister: true})
        setTimeout(() => {
            this.props.history.push({
                pathname: '/'
            })
        }, 3000)
    }

    render() {
        if (this.state.userLoggedIn) {
            return (
                <Redirect to="/dashboard" />
            )
        } else {
            return (
                <div className="ui three column grid" style={{minHeight: '100%'}}>
                    <div className="column outerContainer pageBlurb">
                        <p>Quickly and easily track expenses for a fleet of vehicles</p>
                        <p>Once logged in, add your vehicles to the page and update expenses as and when needed</p>
                    </div>
                    <div className="column formOuterContainer">
                        <form className="ui form formStyling" onSubmit={this.submitRegister}>
                        <div className="field labelStyling">
                                <label>Email</label>
                                <input
                                    type="text"
                                    name="first-name"
                                    placeholder="Email..." 
                                    onChange={({target}) => this.setState({email: target.value}, this.isValidForm)} 
                                />
                            </div>
                            <div className="field labelStyling">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="last-name"
                                    placeholder="Password..." 
                                    onChange={({target}) => this.setState({password: target.value}, this.isValidForm)} 
                                    onFocus={this.renderPasswordTip}
                                    onBlur={this.renderPasswordTip}
                                />
                            </div>
                            <div className="field labelStyling">
                                <label>Name</label>
                                <div className="two fields">
                                    <div className="field">
                                        <input
                                            type="text"
                                            name="firstname"
                                            placeholder="Firstname..."
                                            onChange={({target}) => this.setState({firstname: target.value})}
                                        />
                                    </div>
                                    <div className="field">
                                        <input
                                            type="text"
                                            name="surname"
                                            placeholder="Surname..."
                                            onChange={({target}) => this.setState({surname: target.value})}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className="ui button formSubmitBtn" disabled={!this.state.allowFormSubmit} type="submit">Submit</button>
                        </form>
                        <div style={{textAlign: 'center'}}>
                            <Link to="/" className="button ui linkTo">Already registered? Login</Link>
                        </div>
                        <div>
                            {this.state.successRegister
                                ? 
                                <div className="loadingIcon">
                                    <i className="fa fa-circle-o-notch fa-spin"></i>
                                    Redirecting to login screen...
                                </div>
                                :
                                null}
                        </div>
                    </div>
                    <div className="column tips">
                        {this.state.displayPasswordTip 
                            ?
                            <div>
                                <p>Password:</p>
                                    <ul>
                                        <li>Must contain a number</li>
                                        <li>Be at least 5 characters long</li>
                                    </ul>
                            </div> 
                            : 
                            null}
                    </div>
                </div>
            )
        }
    }
}


export default Register