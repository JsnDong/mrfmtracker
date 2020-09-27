import React from 'react';

import {
    Link
} from 'react-router-dom';

import EquipStatsForm from '../components/EquipStatsForm.js';

import * as DateHTML from '../tools/DateHTML.js';

class AddSightingPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isLoading: true,
            itemNames: [],
            itemName: 'Select an Item',
            stats: null,
            sightingDate: DateHTML.getToday()
        }

        this.handleItemChange = this.handleItemChange.bind(this);
        this.handleSightingDateChange = this.handleSightingDateChange.bind(this);
        this.handleAddSighting = this.handleAddSighting.bind(this);
    }

    handleItemChange(event) {
        event.preventDefault();

        this.setState({
            isLoading: true
        });

        const itemName = event.target.value;
        const itemNameURL = itemName.replaceAll('%', '%25');
        fetch(`http://localhost:9000/item/${itemNameURL}`)
        .then(response => response.json())
        .then(rows => {
            this.setState({
                isLoading: false,
                itemName: itemName,
                stats: rows[0].stats
            })}
        );
    }

    handleSightingDateChange(event) {
        event.preventDefault();

        const sightingDate = event.target.value;
        this.setState({
            sightingDate: sightingDate
        });

    }

    handleAddSighting(event) {
        return null;
    }

    componentDidMount() {
        fetch('http://localhost:9000/items')
        .then(response => response.json())
        .then(items =>
            this.setState({
                isLoading: false,
                itemNames: items.map(item => item.name),
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
                    <select id='item' value={this.state.itemName} onChange={this.handleItemChange}>
                        <option disabled>Select an Item</option>
                        {this.state.itemNames.map(itemName => 
                            <option value={itemName} key={itemName}>{itemName}</option>)}
                    </select><br/>

                    {this.state.stats?
                        <div>
                            <EquipStatsForm isNewItem={false}/>
                        </div>
                        : null
                    }

                    <label htmlFor='sightingDate'>Date: </label>
                    <input id='sightingDate'
                        type='date'
                        defaultValue={this.state.sightingDate}
                        max={DateHTML.getToday()}
                        onChange={this.handleSightingDateChange}/><br/>

                    <label htmlFor='price'>Price: </label>
                    <input id='price'
                           type='number'
                           min='0'/><br/>

                    <label htmlFor='quantity'>Quantity: </label>
                    <input id='quantity'
                           type='number'
                           min='0'/><br/>

                    <label htmlFor='seller'>Seller: </label>
                    <input id='seller'
                           type='text'/><br/>
                    
                    <br/>
                    <input type='submit' value={'Record'}/>
                </form>
            </div>
        );
    }
}

export default AddSightingPage;