import React from 'react';
import ReactDOM from 'react-dom';

class House extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onSelectChange(this.props.casa, event.target);
    }

    render() {
        const info = this.props.info;
        return (
            <ul className={`list-unstyled casa ${info.cor}`}>
                <li>
                    <select name="cor" value={info.cor} onChange={this.handleChange}>
                        <option value="null"></option>
                        <option value="amarela">Amarela</option>
                        <option value="azul">Azul</option>
                        <option value="branca">Branca</option>
                        <option value="verde">Verde</option>
                        <option value="vermelha">Vermelha</option>
                    </select>
                </li>
                <li>
                    <select name="nacionalidade" value={info.nacionalidade} onChange={this.handleChange}>
                        <option value="null"></option>
                        <option value="alemao">Alemão</option>
                        <option value="dinamarques">Dinamarquês</option>
                        <option value="ingles">Inglês</option>
                        <option value="noruegues">Norueguês</option>
                        <option value="sueco">Sueco</option>
                    </select>
                </li>
                <li>
                    <select name="bebida" value={info.bebida} onChange={this.handleChange}>
                        <option value="null"></option>
                        <option value="agua">Água</option>
                        <option value="cafe">Café</option>
                        <option value="cerveja">Cerveja</option>
                        <option value="cha">Chá</option>
                        <option value="leite">Leite</option>
                    </select>
                </li>
                <li>
                    <select name="cigarro" value={info.cigarro} onChange={this.handleChange}>
                        <option value="null"></option>
                        <option value="blends">Blends</option>
                        <option value="bluemaster">Bluemaster</option>
                        <option value="dunhill">Dunhill</option>
                        <option value="pallmall">Pall Mall</option>
                        <option value="prince">Prince</option>
                    </select>
                </li>
                <li>
                    <select name="animal" value={info.animal} onChange={this.handleChange}>
                        <option value="null"></option>
                        <option value="cachorros">Cachorros</option>
                        <option value="cavalos">Cavalos</option>
                        <option value="gatos">Gatos</option>
                        <option value="passaros">Pássaros</option>
                        <option value="peixes">Peixes</option>
                    </select>
                </li>
            </ul>
        );
    }
}

module.exports = House;
