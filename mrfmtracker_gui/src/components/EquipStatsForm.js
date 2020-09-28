import React from 'react';

class ItemStatsForm extends React.Component {
    constructor(props) {
        super()
        this.state = {
            isLoading: true,
            categories: []
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });
        fetch('http://localhost:9000/categories/EQP')
        .then(response => response.json())
        .then(categories => {
            this.setState({
                isLoading: false,
                categories: categories.map(categoryObj => categoryObj.category)
            })}
        );
    }

    render() {
        const {isNewItem} = this.props;

        const attackSpeeds = ['Faster', 'Fast', 'Normal', 'Slow'];

        if (this.state.isLoading) {
            return null;
        }

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

                        <input id='beginner' type='radio' name='class' value='beginner'/>
                        <label htmlFor='beginner'>Beginner</label>
                        <input id='warrior' type='radio' name='class' value='warrior'/>
                        <label htmlFor='warrior'>Warrior</label>
                        <input id='magician' type='radio' name='class' value='magician'/>
                        <label htmlFor='magician'>Magician</label>
                        <input id='bowman' type='radio' name='class' value='bowman'/>
                        <label htmlFor='bowman'>Bowman</label>
                        <input id='thief' type='radio' name='class' value='thief'/>
                        <label htmlFor='thief'>Thief</label>
                        <input id='pirate' type='radio' name='class' value='pirate'/>
                        <label htmlFor='pirate'>Pirate</label>
                        <br/>

                        <label htmlFor='category'>Category: </label>
                        <select name='category' id='category'>
                            {this.state.categories.map(category => 
                                <option value={category} key={category}>{category.toUpperCase()}</option>)}
                        </select><br/>

                        <label htmlFor='attackSpeed'>Attack Speed: </label>
                        <select name='attackSpeed' id='attackSpeed'>
                            {attackSpeeds.map(attackSpeed => 
                                <option value={attackSpeed} key={attackSpeed}>{attackSpeed.toUpperCase()}</option>)}
                        </select><br/>
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

                <label htmlFor='HP'>HP: </label>
                <input id='HP' type='number' min='0'/><br/>
                <label htmlFor='MP'>MP: </label>
                <input id='MP' type='number' min='0'/><br/>

                <label htmlFor='weaponAttack'>Weapon Attack: </label>
                <input id='weaponAttack' type='number' min='0'/><br/>
                <label htmlFor='magicAttack'>Magic Attack: </label>
                <input id='magicAttack' type='number' min='0'/><br/>
                
                <label htmlFor='weaponDef'>Weapon Def: </label>
                <input id='weaponDef' type='number' min='0'/><br/>
                <label htmlFor='magicDef'>Magic Def: </label>
                <input id='magicDef' type='number' min='0'/><br/>

                <label htmlFor='accuracy'>Accuracy: </label>
                <input id='accuracy' type='number' min='0'/><br/>
                <label htmlFor='avoidability'>Avoidability: </label>
                <input id='avoidability' type='number' min='0'/><br/>

                <label htmlFor='speed'>Speed: </label>
                <input id='speed' type='number' min='0'/><br/>
                <label htmlFor='jump'>Jump: </label>
                <input id='jump' type='number' min='0'/><br/>

                <label htmlFor='knockbackRate'>Knockback Rate: </label>
                <input id='knockbackRate' type='number' min='0' max='100'/><br/>

                <label htmlFor='upgradesAvailable'>Upgrades Available: </label>
                <input id='upgradesAvailable' type='number' min='0'/><br/>
            </div>
        )
    }
}

export default ItemStatsForm;