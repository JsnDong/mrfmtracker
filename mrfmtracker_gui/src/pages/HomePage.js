import React from 'react';

import {
    Link
} from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Link to={'/signin'}>Sign In</Link><br/>
                <Link to={'/add_sighting'}>Add a Sighting</Link><br/>
            </div>
        );
    }
}

export default HomePage;