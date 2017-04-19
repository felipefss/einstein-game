import React from 'react';
import ReactDOM from 'react-dom';

class House extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onSelectChange(this.props.house, event.target);
    }

    render() {
        const info = this.props.info;
        const text = this.props.text;
        return (
            <ul className={`list-unstyled house ${info.color}`}>
                <li>
                    <select name="color" value={info.color} onChange={this.handleChange}>
                        <option value="null"></option>
                        <option value="yellow">{text.color.yellow}</option>
                        <option value="blue">{text.color.blue}</option>
                        <option value="white">{text.color.white}</option>
                        <option value="green">{text.color.green}</option>
                        <option value="red">{text.color.red}</option>
                    </select>
                </li>
                <li>
                    <select name="nationality" value={info.nationality} onChange={this.handleChange}>
                        <option value="null"></option>
                        <option value="german">{text.nationality.german}</option>
                        <option value="danish">{text.nationality.danish}</option>
                        <option value="english">{text.nationality.english}</option>
                        <option value="norwegian">{text.nationality.norwegian}</option>
                        <option value="swedish">{text.nationality.swedish}</option>
                    </select>
                </li>
                <li>
                    <select name="drink" value={info.drink} onChange={this.handleChange}>
                        <option value="null"></option>
                        <option value="water">{text.drink.water}</option>
                        <option value="coffee">{text.drink.coffee}</option>
                        <option value="beer">{text.drink.beer}</option>
                        <option value="tea">{text.drink.tea}</option>
                        <option value="milk">{text.drink.milk}</option>
                    </select>
                </li>
                <li>
                    <select name="cigarrete" value={info.cigarrete} onChange={this.handleChange}>
                        <option value="null"></option>
                        <option value="blends">{text.cigarrete.blends}</option>
                        <option value="bluemaster">{text.cigarrete.bluemaster}</option>
                        <option value="dunhill">{text.cigarrete.dunhill}</option>
                        <option value="pallmall">{text.cigarrete.pallmall}</option>
                        <option value="prince">{text.cigarrete.prince}</option>
                    </select>
                </li>
                <li>
                    <select name="pet" value={info.pet} onChange={this.handleChange}>
                        <option value="null"></option>
                        <option value="dog">{text.pet.dog}</option>
                        <option value="horse">{text.pet.horse}</option>
                        <option value="cat">{text.pet.cat}</option>
                        <option value="bird">{text.pet.bird}</option>
                        <option value="fish">{text.pet.fish}</option>
                    </select>
                </li>
            </ul>
        );
    }
}

module.exports = House;
