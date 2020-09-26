import React from 'react';

import {
    Link
} from 'react-router-dom';

import EquipStatsForm from '../components/EquipStatsForm.js';

class AddSightingPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isLoading: true,
            itemNames: [],
            item: null,
            sightingDate: ''
        }

    this.handleAddSighting = this.handleAddSighting.bind(this);
    }

    handleAddSighting(event) {
        return null;
    }

    componentDidMount() {
        let [month, date, year] = new Date().toLocaleDateString().split('/');

        if (parseInt(month) < 10) {
            month = '0' + month;
        }
        if (parseInt(date) < 10) {
            date = '0' + date;
        }

        fetch('http://localhost:9000/items')
        .then(response => response.json())
        .then(items =>
            this.setState({
                isLoading: false,
                itemNames: items.map(item => item.name),
                sightingDate: [year, month, date].join('-')
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
                        <option value={null} selected disabled>Select a Item</option>
                        {this.state.itemNames.map(itemName => 
                            <option value={itemName} key={itemName}>{itemName}</option>)}
                    </select><br/>

                    <EquipStatsForm isNewItem={false}/>

                    <label htmlFor='sightingDate'>Date: </label>
                    <input id='sightingDate'
                           type='date'
                           defaultValue={this.state.sightingDate}
                           max={this.state.sightingDate}/><br/>

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
                           type='text'/>
                </form>
            </div>
        );
    }
}

export default AddSightingPage;