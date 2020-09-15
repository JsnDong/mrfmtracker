import React from 'react';

import {
    Link
} from 'react-router-dom';

class SignUpPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleConfirmPasswordChange(event) {
        this.setState({
            confirmPassword: event.target.value
        });
    }

    handleSignUp() {
        console.log('signup!')
    }

    render() {
        return (
            <div>
                <Link to='/'>Home</Link><br/>

                Sign Up
                <form onSubmit={this.handleSignup}>
                    <input type='text'
                           placeholder='email'
                           value={this.state.email}
                           onChange={this.handleEmailChange}/><br/>
                    <input type='text'
                           placeholder='username'
                           value={this.state.username}
                           onChange={this.handleUsernameChange}/><br/>
                    <input type='password'
                           placeholder='password'
                           value={this.state.password}
                           onChange={this.handlePasswordChange}/><br/>
                    <input type='password'
                           placeholder='confirm password'
                           value={this.state.confirmPassword}
                           onChange={this.handleConfirmPasswordChange}/><br/>
                    <input type='submit'/>
                </form>

                <Link to='/signin'>Already have an account? Sign In</Link>
            </div>
        );
    }
}

export default SignUpPage;