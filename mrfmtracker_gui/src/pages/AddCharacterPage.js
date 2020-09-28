import React from 'react';

import {
    Link
} from 'react-router-dom';

class AddCharacterPage extends React.Component {
    constructor(props)  {
        super();
        this.state = {
            name: '',
            level: '',
            job: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLevelChange = this.handleLevelChange.bind(this);
        this.handleJobChange = this.handleJobChange.bind(this);
    }

    handleNameChange(event)  {
        this.setState({
            name: event.target.value
        });
    }

    handleLevelChange(event)  {
        this.setState({
            level: event.target.value
        });
    }

    handleJobChange(event)   {
        this.setState({
            job: event.target.value
        });
    }

    handleAddCharacter() {
        console.log('AddCharacter');
    }

    render () {
        return (
            <div>
                <Link to= '/'>Home</Link><br/>

                Add Character
                <form onSubmit={this.handleCharacterName}>
                    <input id='name'
                           type='text'
                           placeholder='IGN'
                           value={this.state.name}
                           onChange={this.handleNameChange}/><br/>
                    <input id='level'
                           type='text'
                           placeholder='200'
                           value={this.handleLevelChange}
                           onChange={this.handleLevelChange}/><br/>
                    <input id='job'
                           type='text'
                           placeholder='BEGINNER'
                           value={this.handleJobChange}/><br/>

                </form>
                <Link to= '/AddItem'> Add your item here: </Link>
            </div>
        )
    }
        
}

export default AddCharacterPage;