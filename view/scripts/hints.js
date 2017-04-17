import React from 'react';

const { remote } = require('electron');
const { dialog } = remote;
const list = require('./hintsList');

const houseQuery = (houses, ...queries) => {
	let condition = [];
	for (let house in houses) {
		if (houses.hasOwnProperty(house)) {
			for (let query of queries) {
				condition.push(houses[house][query.query] == query.value);
			}
			if (condition.every(value => value)) {
				return true;
			} else {
				condition = [];
			}
		}
	}
	return false;
};

const Hints = (props) => {
	let hintList1;
	let hintList2;

	const checkEnd = () => {
		const isGameFinish = list.every((item) => item.check);

		if (isGameFinish) {
			dialog.showMessageBox(remote.getCurrentWindow(), {
				title: 'Fim de jogo',
				message: 'Parabéns! Você decifrou tudo!\nPara começar de novo, selecione no menu ou pressione CTRL + N'
			});
		}
	};

	const updateThings = () => {
		const hintList = list.map((hint, index) =>
			<li key={index}>
				<label>
					<input type="checkbox" checked={list[index].check} onClick={(e) => e.preventDefault()} />{hint.hint}
				</label>
			</li>
		);

		hintList1 = hintList.slice(0, 8);
		hintList2 = hintList.slice(8, hintList.length);
	};

	const checkResult = (houses) => {
		list[0].check = houses['house0'].nationality === 'norwegian';
		list[1].check = houseQuery(
			houses,
			{ query: 'nationality', value: 'english' }, { query: 'color', value: 'red' }
		);
		list[2].check = houseQuery(
			houses,
			{ query: 'nationality', value: 'swedish' }, { query: 'pet', value: 'dog' }
		);
		list[3].check = houseQuery(
			houses,
			{ query: 'nationality', value: 'danish' }, { query: 'drink', value: 'tea' }
		);
		list[4].check =
			(houses['house0'].color === 'green' && houses['house1'].color === 'white') ||
			(houses['house1'].color === 'green' && houses['house2'].color === 'white') ||
			(houses['house2'].color === 'green' && houses['house3'].color === 'white') ||
			(houses['house3'].color === 'green' && houses['house4'].color === 'white');
		list[5].check = houseQuery(
			houses,
			{ query: 'color', value: 'green' }, { query: 'drink', value: 'coffee' }
		);
		list[6].check = houseQuery(
			houses,
			{ query: 'cigarrete', value: 'pallmall' }, { query: 'pet', value: 'bird' }
		);
		list[7].check = houseQuery(
			houses,
			{ query: 'color', value: 'yellow' }, { query: 'cigarrete', value: 'dunhill' }
		);
		list[8].check = houses['house2'].drink === 'milk';
		list[9].check =
			//Blends on the left
			(houses['house0'].cigarrete === 'blends' && houses['house1'].pet === 'cat') ||
			(houses['house1'].cigarrete === 'blends' && houses['house2'].pet === 'cat') ||
			(houses['house2'].cigarrete === 'blends' && houses['house3'].pet === 'cat') ||
			(houses['house3'].cigarrete === 'blends' && houses['house4'].pet === 'cat') ||
			//Blends on the right
			(houses['house4'].cigarrete === 'blends' && houses['house3'].pet === 'cat') ||
			(houses['house3'].cigarrete === 'blends' && houses['house2'].pet === 'cat') ||
			(houses['house2'].cigarrete === 'blends' && houses['house1'].pet === 'cat') ||
			(houses['house1'].cigarrete === 'blends' && houses['house0'].pet === 'cat');
		list[10].check =
			//Dunhill on the left
			(houses['house0'].cigarrete === 'dunhill' && houses['house1'].pet === 'horse') ||
			(houses['house1'].cigarrete === 'dunhill' && houses['house2'].pet === 'horse') ||
			(houses['house2'].cigarrete === 'dunhill' && houses['house3'].pet === 'horse') ||
			(houses['house3'].cigarrete === 'dunhill' && houses['house4'].pet === 'horse') ||
			//Dunhill on the right
			(houses['house4'].cigarrete === 'dunhill' && houses['house3'].pet === 'horse') ||
			(houses['house3'].cigarrete === 'dunhill' && houses['house2'].pet === 'horse') ||
			(houses['house2'].cigarrete === 'dunhill' && houses['house1'].pet === 'horse') ||
			(houses['house1'].cigarrete === 'dunhill' && houses['house0'].pet === 'horse');
		list[11].check = houseQuery(
			houses,
			{ query: 'cigarrete', value: 'bluemaster' }, { query: 'drink', value: 'beer' }
		);
		list[12].check = houseQuery(
			houses,
			{ query: 'nationality', value: 'german' }, { query: 'cigarrete', value: 'prince' }
		);
		list[13].check =
			//Norwegian on the left
			(houses['house0'].nationality === 'norwegian' && houses['house1'].color === 'blue') ||
			(houses['house1'].nationality === 'norwegian' && houses['house2'].color === 'blue') ||
			(houses['house2'].nationality === 'norwegian' && houses['house3'].color === 'blue') ||
			(houses['house3'].nationality === 'norwegian' && houses['house4'].color === 'blue') ||
			//Norwegian on the right
			(houses['house4'].nationality === 'norwegian' && houses['house3'].color === 'blue') ||
			(houses['house3'].nationality === 'norwegian' && houses['house2'].color === 'blue') ||
			(houses['house2'].nationality === 'norwegian' && houses['house1'].color === 'blue') ||
			(houses['house1'].nationality === 'norwegian' && houses['house0'].color === 'blue');
		list[14].check =
			//Blends on the left
			(houses['house0'].cigarrete === 'blends' && houses['house1'].drink === 'water') ||
			(houses['house1'].cigarrete === 'blends' && houses['house2'].drink === 'water') ||
			(houses['house2'].cigarrete === 'blends' && houses['house3'].drink === 'water') ||
			(houses['house3'].cigarrete === 'blends' && houses['house4'].drink === 'water') ||
			//Blends on the right
			(houses['house4'].cigarrete === 'blends' && houses['house3'].drink === 'water') ||
			(houses['house3'].cigarrete === 'blends' && houses['house2'].drink === 'water') ||
			(houses['house2'].cigarrete === 'blends' && houses['house1'].drink === 'water') ||
			(houses['house1'].cigarrete === 'blends' && houses['house0'].drink === 'water');

		updateThings();
		checkEnd();
	};

	checkResult(props.houses);
	return (
		<ul className="list-inline">
			<li>
				<ul className="list-unstyled">
					{hintList1}
				</ul>
			</li>
			<li>
				<ul className="list-unstyled">
					{hintList2}
				</ul>
			</li>
		</ul>
	);
};

module.exports = Hints;
