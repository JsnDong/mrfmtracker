import React from 'react';

import {
    Link
} from 'react-router-dom';

class SignInPage extends React.Component {
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>

                Sign In

                <Link to='/signup'>Don't have an account? Sign Up</Link>
            </div>
        );
    }
}

export default SignInPage;