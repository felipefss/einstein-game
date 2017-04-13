import React from 'react';
import ReactDOM from 'react-dom';

const list = require('./hintsList');

class Hints extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.updateThings = this.updateThings.bind(this);
	}

	updateThings() {
		const hintList = list.map((hint, index) =>
			<li key={index}>
				<label>
					<input type="checkbox" checked={list[index].check} onClick={this.handleClick} />{hint.hint}
				</label>
			</li>
		);

		this.hintList1 = hintList.slice(0, 8);
		this.hintList2 = hintList.slice(8, hintList.length);
	}

	checkResult(houses) {
		list[0].check = houses['house0'].nationality === 'norwegian';
		for (let house in houses) {
			if (houses.hasOwnProperty(house)) {
				if (houses[house].nationality === 'english' && houses[house].color === 'red') {
					list[1].check = true;
					break;
				}
				list[1].check = false;
			}
		}

		this.updateThings();
	};
	handleClick(event) {
		event.preventDefault();
	}

	render() {
		this.checkResult(this.props.houses);
		return (
			<ul className="list-inline">
				<li>
					<ul className="list-unstyled">
						{this.hintList1}
					</ul>
				</li>
				<li>
					<ul className="list-unstyled">
						{this.hintList2}
					</ul>
				</li>
			</ul>
		);
	}
}

module.exports = Hints;
