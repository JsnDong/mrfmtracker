import React from 'react';

import {
    Link
} from 'react-router-dom';

import ItemStatsForm from '../components/ItemStatsForm.js';

class AddSightingPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isLoading: true,
            itemNames: []
        }


    this.handleAddSighting = this.handleAddSighting.bind(this);
    }

    handleAddSighting(event) {

    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });
        fetch('http://localhost:9000/items')
        .then(response => response.json())
        .then(items =>
            this.setState({
                isLoading: false,
                itemNames: items.map(item => item.name)
            })
        );
    }

    render() {
        if (this.state.isLoading) {
            return null;
        }

        return(
            <div>
                <Link to='/'>Home</Link><br/>

                Add a Sighting
                <form onSubmit={this.handleAddSighting}>
                    <label htmlFor='item'>Item: </label>
                    <select name='item' id='item'>
                        {this.state.itemNames.map(itemName => 
                            <option value={itemName} key={itemName}>{itemName}</option>)}
                    </select><br/>

                    <ItemStatsForm isNewItem={true}/>
                </form>
            </div>
        );
    }
}

export default AddSightingPage;