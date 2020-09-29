import React from 'react';

import {
    Link
} from 'react-router-dom';

class ListingPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            listingID: '',
            item: '',
            stats: '',
            price: '',
            quantity '',
            errors: {
                listingID: null,
                item: null,
                stats: null,
                price: null,
                quantity: null,
            }
        }

        this.handlelistingIDChange = this.handlelistingIDChange.bind(this);
        this.handleItemChange = this.handleItemChange.bind(this);
        this.handleStatsChange = this.handleStatsChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleListing = this.handleListing.bind(this);
    }

    handleListingIDChange(event) {

    }

    handleItemChange(event) {

    }

    handleStatsChange(event) {
 
    }

    handlePriceChange(event) {

    }

    handleQuantityChange(event) {

    }

    handleListing(e) {
        console.log('here');
        fetch('http://localhost:9000/listing', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                listingID: this.state.listingID,
                item: this.state.item,
                stats: this.state.stats,
                price: this.state.price,
                quantity: this.state.quantityl
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

                Sign In
                <form onSubmit={this.handleListing}>
                    <input type='number'
                           placeholder='Listing ID'
                           value={this.state.listingID}
                           onChange={this.handlelistingIDChange}/><br/>
                    <input type='text'
                           placeholder='Item Name'
                           value={this.state.item}
                           onChange={this.handleItemChange}/><br/>
                    <input type='text'
                           placeholder='Stats'
                           value={this.state.stats}
                           onChange={this.handleStatsChange}/><br/>
                    <input type='number'
                           placeholder='Price'
                           value={this.state.price}
                           onChange={this.handlePriceChange}/><br/>
                    <input type='number'
                           placeholder='Quantity'
                           value={this.state.quantity}
                           onChange={this.handleQuantityChange}/><br/>
                    <input type='submit'/>
                </form>
            </div>
        );
    }
}

export default ListingPage;