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
        return (
            <ul className={`list-unstyled house ${info.color}`}>
                <li>
                    <select name="color" value={info.color} onChange={this.handleChange}>
                        <option value="null"></option>
                        <option value="yellow">Amarela</option>
                        <option value="blue">Azul</option>
                        <option value="white">Branca</option>
                        <option value="green">Verde</option>
                        <option value="red">Vermelha</option>
                    </select>
                </li>
                <li>
                    <select name="nationality" value={info.nationality} onChange={this.handleChange}>
                        <option value="null"></option>
                        <option value="german">Alemão</option>
                        <option value="danish">Dinamarquês</option>
                        <option value="english">Inglês</option>
                        <option value="norwegian">Norueguês</option>
                        <option value="swedish">Sueco</option>
                    </select>
                </li>
                <li>
                    <select name="drink" value={info.drink} onChange={this.handleChange}>
                        <option value="null"></option>
                        <option value="water">Água</option>
                        <option value="coffee">Café</option>
                        <option value="beer">Cerveja</option>
                        <option value="tea">Chá</option>
                        <option value="milk">Leite</option>
                    </select>
                </li>
                <li>
                    <select name="cigarrete" value={info.cigarrete} onChange={this.handleChange}>
                        <option value="null"></option>
                        <option value="blends">Blends</option>
                        <option value="bluemaster">Bluemaster</option>
                        <option value="dunhill">Dunhill</option>
                        <option value="pallmall">Pall Mall</option>
                        <option value="prince">Prince</option>
                    </select>
                </li>
                <li>
                    <select name="pet" value={info.pet} onChange={this.handleChange}>
                        <option value="null"></option>
                        <option value="dog">Cachorros</option>
                        <option value="horse">Cavalos</option>
                        <option value="cat">Gatos</option>
                        <option value="bird">Pássaros</option>
                        <option value="fish">Peixes</option>
                    </select>
                </li>
            </ul>
        );
    }
}

module.exports = House;
