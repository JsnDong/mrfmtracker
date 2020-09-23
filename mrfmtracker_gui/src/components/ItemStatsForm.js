import React from 'react';

class ItemStatsForm extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        const {isNewItem} = this.props;

        return (
            <div>
                {isNewItem ?
                    <div>
                        <label htmlFor='reqLv'>Req Lv: </label>
                        <input id='reqLv' type='number' min='0' max='200'/><br/>
                        <label htmlFor='reqStr'>Req Str: </label>
                        <input id='reqStr' type='number' min='0'/><br/>
                        <label htmlFor='reqDex'>Req Dex: </label>
                        <input id='reqDex' type='number' min='0'/><br/>
                        <label htmlFor='reqInt'>Req Int: </label>
                        <input id='reqInt' type='number' min='0'/><br/>
                        <label htmlFor='reqLuk'>Req Luk: </label>
                        <input id='reqLuk' type='number' min='0'/><br/>
                        <label htmlFor='reqFame'>Req Fame: </label>
                        <input id='reqFame' type='number' min='0'/><br/>
                    </div>
                : null   
                }
                <label htmlFor='str'>Str: </label>
                <input id='str' type='number' min='0'/><br/>
                <label htmlFor='dex'>Dex: </label>
                <input id='dex' type='number' min='0'/><br/>
                <label htmlFor='int'>Int: </label>
                <input id='int' type='number' min='0'/><br/>
                <label htmlFor='luk'>Luk: </label>
                <input id='luk' type='number' min='0'/><br/>
            </div>
        )
    }
}

export default ItemStatsForm;