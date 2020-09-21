import React from 'react';

import {
    Link
} from 'react-router-dom';

import * as Validation from '../tools/Validation.js';

class SignUpPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            errors: {
                email: null,
                username: null,
                password: null,
                confirmPassword: null,
            }
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleEmailChange(event) {
        event.preventDefault();

        const email = event.target.value;

        let errors = this.state.errors;
        errors.email = Validation.emailIsValid(email);
        
        this.setState({
            email: email,
            errors : errors
        });
    }

    handleUsernameChange(event) {
        event.preventDefault();

        const username = event.target.value;

        let errors = this.state.errors;
        errors.username = Validation.usernameIsValid(username)

        this.setState({
            username: username,
            errors : errors
        });
    }

    handlePasswordChange(event) {
        event.preventDefault();

        const password = event.target.value;

        let errors = this.state.errors;
        errors.password = Validation.passwordIsValid(password);

        this.setState({
            password: event.target.value,
            errors: errors
        });
    }

    handleConfirmPasswordChange(event) {
        event.preventDefault();

        const confirmPassword = event.target.value;

        let errors = this.state.errors;
        if (!(this.state.password === confirmPassword)) {
            errors.confirmPassword = 'The confirmation does not match'
        }

        this.setState({
            confirmPassword: confirmPassword,
            errors: errors
        });
    }

    handleSignUp(e) {
        console.log('here');
        fetch('http://localhost:9000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(json => console.log(json));
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Link to='/'>Home</Link><br/>

                Sign Up
                <p>All fields are required</p>
                <form onSubmit={this.handleSignUp} autoComplete='off'>
                    <label for='email'>Email: </label><br/>
                    <input id='email'
                           type='email'
                           placeholder='email'
                           value={this.state.email}
                           autoComplete='off'
                           required
                           onChange={this.handleEmailChange}/><br/>
                    <span>{this.state.errors.email}</span><br/>
                    <label for='username'>Username: </label><br/>
                    <input id='username'
                           type='text'
                           placeholder='username'
                           value={this.state.username}
                           autoComplete='off'
                           required
                           onChange={this.handleUsernameChange}/><br/>
                    <span>{this.state.errors.username}</span><br/>
                    <label for='password'>Password: </label><br/>
                    <input id='password'
                           type='password'
                           placeholder='password'
                           value={this.state.password}
                           autoComplete='new-password'
                           required
                           onChange={this.handlePasswordChange}/>
                    <input aria-label='confirmPassword'
                           type='password'
                           placeholder='confirm password'
                           value={this.state.confirmPassword}
                           autoComplete='new-password'
                           required
                           onChange={this.handleConfirmPasswordChange}/><br/>
                    <input type='submit'/>
                </form>

                <Link to='/signin'>Already have an account? Sign In</Link>
            </div>
        );
    }
}

export default SignUpPage;