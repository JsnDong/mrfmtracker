import React from 'react';

import {
    Link
} from 'react-router-dom';

class SignInPage extends React.Component {
    constructor(props) {
        super();
        this.state({
            name: '',
            password: ''
        })

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    } 

    handleSignIn() {
        console.log('signin!')
    }

    render() {
        return (
            <div>
                <Link to='/'>Home</Link><br/>

                Sign In
                <form onSubmit={this.handleSignIn}>
                    <input type='text'
                           placeholder='email or username'
                           value={this.state.name}
                           onChange={this.handleNameChange}/><br/>
                    <input type='password'
                           placeholder='password'
                           value={this.state.password}
                           onChange={this.handlePasswordChange}/><br/>
                    <input type='submit'/>
                </form>

                <Link to='/signup'>Don't have an account? Sign Up</Link>
            </div>
        );
    }
}

export default SignInPage;