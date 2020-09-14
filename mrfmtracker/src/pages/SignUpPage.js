import React from 'react';

import {
    Link
} from 'react-router-dom';

class SignUpPage extends React.Component {
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>

                Sign Up

                <Link to='/signin'>Already have an account? Sign In</Link>
            </div>
        );
    }
}

export default SignUpPage;