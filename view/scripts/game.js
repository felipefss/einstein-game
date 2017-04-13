import React from 'react';
import ReactDOM from 'react-dom';

const House = require('./house');

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
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
		);
	}
}

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);