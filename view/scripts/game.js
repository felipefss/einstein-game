// import 'react-devtools';
import React from 'react';
import ReactDOM from 'react-dom';
const { remote } = require('electron');

const countryCode = remote.app.getLocale();
const { dialog } = remote;
const House = require('./house');
const Hints = require('./hints');
const locale = require('./locale')(countryCode);
const { Menu, MenuItem } = remote;
const solution = require('./solution');

//MENU
const template = {
	label: locale.menu.game,
	submenu: [
		{
			label: locale.menu.newGame,
			accelerator: 'Ctrl+N',
			click() {
				Game.newGame();
			}
		},
		{
			label: locale.menu.solveGame,
			click() {
				Game.solveGame();
			}
		},
		{ type: 'separator' },
		{
			label: locale.menu.exit,
			role: 'quit'
		}
	]
};

const menu = new Menu();
menu.append(new MenuItem(template));
menu.append(new MenuItem({ label: locale.menu.rules, click() { showRules() } }));
Menu.setApplicationMenu(menu);

const showRules = () => {
	const rules = locale.rules;

	dialog.showMessageBox(remote.getCurrentWindow(), {
		type: 'none',
		title: locale.menu.rules,
		message: rules
	}, (response) => { });
};

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		Game.newGame = Game.newGame.bind(this);
		Game.solveGame = Game.solveGame.bind(this);
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

	static solveGame() {
		this.setState(solution);
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
								<li><strong>{locale.house.color.field}</strong></li>
								<li><strong>{locale.house.nationality.field}</strong></li>
								<li><strong>{locale.house.drink.field}</strong></li>
								<li><strong>{locale.house.cigarrete.field}</strong></li>
								<li><strong>{locale.house.pet.field}</strong></li>
							</ul>
						</li>
						<li className="text-center">
							<span><strong>{locale.house.field} 1</strong></span>
							<House
								house={0}
								info={houses['house0']}
								text={locale.house}
								onSelectChange={this.handleChange} />
						</li>
						<li className="text-center">
							<span><strong>{locale.house.field} 2</strong></span>
							<House
								house={1}
								info={houses['house1']}
								text={locale.house}
								onSelectChange={this.handleChange} />
						</li>
						<li className="text-center">
							<span><strong>{locale.house.field} 3</strong></span>
							<House
								house={2}
								info={houses['house2']}
								text={locale.house}
								onSelectChange={this.handleChange} />
						</li>
						<li className="text-center">
							<span><strong>{locale.house.field} 4</strong></span>
							<House
								house={3}
								info={houses['house3']}
								text={locale.house}
								onSelectChange={this.handleChange} />
						</li>
						<li className="text-center">
							<span><strong>{locale.house.field} 5</strong></span>
							<House
								house={4}
								info={houses['house4']}
								text={locale.house}
								onSelectChange={this.handleChange} />
						</li>
					</ul>
				</div>

				<div id="hints">
					<h3><strong>{locale.hints.field}:</strong></h3>
					<Hints
						houses={houses}
						locale={countryCode}
						text={locale.hints} />
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