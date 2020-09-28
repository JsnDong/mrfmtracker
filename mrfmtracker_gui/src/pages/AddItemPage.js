import React from 'react';

import {
    Link
} from 'react-router-dom';

class AddItemPage extends React.Component {
    constructor(props)  {
        super();
        this.state = {
            name: '',
            category: '',
            Amount: '',
            stats: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleStatsChange = this.handleStatsChange.bind(this);
    }

    handleNameChange(event)  {
        this.setState({
            name: event.target.value
        });
    }

    handleCategoryChange(event)  {
        this.setState({
            category: event.target.value
        });
    }

    handleAmountChange(event)   {
        this.setState({
            amount: event.target.value
        });
    }

    handleStatsChange(event)   {
        this.setState({
            text: event.target.value
        });
    }

    handleAddItem() {
        console.log('AddItem');
    }

    render () {
        return (
            <div>
                <Link to= '/'>Home</Link><br/>

                Add Item
                <form onSubmit={this.handleItemName}>
                    <input id='name'
                           type='text'
                           placeholder='Chaos Scroll'
                           value={this.state.name}
                           onChange={this.handleNameChange}/><br/>
                    <input id='category'
                           type='text'
                           placeholder='SCROLL'
                           value={this.state.category}
                           onChange={this.handleCategoryChange}/><br/>
                    <input id='amount'
                           type='text'
                           placeholder='1'
                           value={this.state.text}
                           onChange={this.handleAmountChange}/><br/>
                     <input id='stats'
                           type='text'
                           placeholder='60%'
                           value={this.state.text}
                           onChange={this.handleStatsChange}/><br/>

                </form>
                <Link to= '/Listings'> Look at your listing! </Link>
            </div>
        )
    }
        
}

export default AddItemPage;