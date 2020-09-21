import React from 'react';

import {
    Link
} from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Link to={'/signin'}>Sign In</Link>
            </div>
        );
    }
}

export default HomePage;