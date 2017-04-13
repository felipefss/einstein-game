import React from 'react';
import ReactDOM from 'react-dom';

const House = require('./house');

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {};

		for (let i = 0; i < 5; i++) {
			this.state[`casa${i}`] = {
				cor: 'null',
				nacionalidade: 'null',
				bebida: 'null',
				cigarro: 'null',
				animal: 'null'
			};
		}
	}

	handleChange(casa, item) {
		const storedItem = JSON.parse(JSON.stringify(this.state[`casa${casa}`]));
		storedItem[item.name] = item.value;
		this.setState({
			[`casa${casa}`]: storedItem
		});
	}

	render() {
		const casas = this.state;
		return (
			<div className="text-center">
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
							casa={0}
							info={casas['casa0']}
							onSelectChange={this.handleChange} />
					</li>
					<li className="text-center">
						<span><strong>Casa 2</strong></span>
						<House
							casa={1}
							info={casas['casa1']}
							onSelectChange={this.handleChange} />
					</li>
					<li className="text-center">
						<span><strong>Casa 3</strong></span>
						<House
							casa={2}
							info={casas['casa2']}
							onSelectChange={this.handleChange} />
					</li>
					<li className="text-center">
						<span><strong>Casa 4</strong></span>
						<House
							casa={3}
							info={casas['casa3']}
							onSelectChange={this.handleChange} />
					</li>
					<li className="text-center">
						<span><strong>Casa 5</strong></span>
						<House
							casa={4}
							info={casas['casa4']}
							onSelectChange={this.handleChange} />
					</li>
				</ul>
			</div>
		);
	}
}

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);