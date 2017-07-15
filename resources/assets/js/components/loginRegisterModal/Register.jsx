import React from 'react'
import {connect} from 'react-redux'

import {haveValue, equalHasValue} from 'js/functions/validation'

import {
    setLoginRegisterEmail,
    setActiveComponent,
    getRegister
} from 'js/actions/user'

class Register extends React.Component {
    clickLogin() {
        this.props.setActiveComponent('login');
    }

    changeEmail(event) {
        this.props.setLoginRegisterEmail(event.target.value)
    }

    submit() {
        const form = {
            email: this.props.email,
            password: document.getElementById('app-logreg-pass').value,
            password_confirmation: document.getElementById('app-logreg-passc').value
        };

        this.props.getRegister(form);
    }

    render() {
        return (
            <div>
                <div>New to Adventure Lookup?</div>
                <label htmlFor="app-logreg-email" className="sr-only">Email address</label>
                <input id="app-logreg-email" type="text" className="form-control" placeholder="Email address"
                       onChange={this.changeEmail.bind(this)}
                       value={this.props.email}/>

                <label htmlFor="app-logreg-pass" className="sr-only">Password</label>
                <input id="app-logreg-pass" type="password" className="form-control" placeholder="Password"/>

                <label htmlFor="app-logreg-passc" className="sr-only">Confirm Password</label>
                <input id="app-logreg-passc" type="password" className="form-control" placeholder="Confirm Password"/>

                <button className="submit" type="submit" onClick={this.submit.bind(this)}>Sign Up</button>

                <hr />

                <div className="switchComponent">
                    <div>Have an account?</div>
                    <button onClick={this.clickLogin.bind(this)}>Log in</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        email: state.user.loginRegisterModal.email
    }
}

export default connect(mapStateToProps, {
    setLoginRegisterEmail,
    setActiveComponent,
    getRegister
})(Register);