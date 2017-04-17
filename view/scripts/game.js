// import 'react-devtools';
import React from 'react';
import ReactDOM from 'react-dom';
const { remote } = require('electron');

const { dialog } = remote;
const House = require('./house');
const Hints = require('./hints');
const { Menu, MenuItem } = remote;

//MENU
const template = {
	label: 'Jogo',
	submenu: [
		{
			label: 'Novo Jogo',
			accelerator: 'Ctrl+N',
			click() {
				Game.newGame();
			}
		},
		{
			role: 'quit'
		}
	]
};

const menu = new Menu();
menu.append(new MenuItem(template));
menu.append(new MenuItem({ label: 'Regras', click() { showRules() } }));
Menu.setApplicationMenu(menu);

const showRules = () => {
	const rules = `1. Há 5 casas de diferentes cores
2. Em cada casa mora uma pessoa de uma diferente nacionalidade
3. Nenhum deles tem o mesmo animal, fuma o mesmo cigarro ou bebe a mesma bebida`;

	dialog.showMessageBox(remote.getCurrentWindow(), {
		type: 'none',
		title: 'Regras',
		message: rules
	}, (response) => { });
};

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		Game.newGame = Game.newGame.bind(this);
		this.state = {};

		for (let i = 0; i < 5; i++) {
			this.state[`house${i}`] = {
				color: 'null',
				nationality: 'null',
				drink: 'null',
				cigarrete: 'null',
				pet: 'null'
			};
		}
	}

	static newGame() {
		for (let i = 0; i < 5; i++) {
			const state = {};
			state[`house${i}`] = {
				color: 'null',
				nationality: 'null',
				drink: 'null',
				cigarrete: 'null',
				pet: 'null'
			};

			this.setState(state);
		}
	}

	handleChange(house, item) {
		const storedItem = JSON.parse(JSON.stringify(this.state[`house${house}`]));
		storedItem[item.name] = item.value;
		this.setState({
			[`house${house}`]: storedItem
		});
	}

	render() {
		const houses = this.state;
		return (
			<div>
				<div className="text-center main">
					<ul className="list-inline">
						<li>
							<span></span>
							<ul className="list-unstyled">
								<li><strong>Cor</strong></li>
								<li><strong>Nacionalidade</strong></li>
								<li><strong>Bebida</strong></li>
								<li><strong>Cigarro</strong></li>
								<li><strong>Animal</strong></li>
							</ul>
						</li>
						<li className="text-center">
							<span><strong>Casa 1</strong></span>
							<House
								house={0}
								info={houses['house0']}
								onSelectChange={this.handleChange} />
						</li>
						<li className="text-center">
							<span><strong>Casa 2</strong></span>
							<House
								house={1}
								info={houses['house1']}
								onSelectChange={this.handleChange} />
						</li>
						<li className="text-center">
							<span><strong>Casa 3</strong></span>
							<House
								house={2}
								info={houses['house2']}
								onSelectChange={this.handleChange} />
						</li>
						<li className="text-center">
							<span><strong>Casa 4</strong></span>
							<House
								house={3}
								info={houses['house3']}
								onSelectChange={this.handleChange} />
						</li>
						<li className="text-center">
							<span><strong>Casa 5</strong></span>
							<House
								house={4}
								info={houses['house4']}
								onSelectChange={this.handleChange} />
						</li>
					</ul>
				</div>

				<div id="hints">
					<h3><strong>Dicas:</strong></h3>
					<Hints houses={houses} />
				</div>
			</div>
		);
	}
}

showRules();

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);