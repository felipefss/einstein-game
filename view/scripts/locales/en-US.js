const locale = {
	menu: {
		game: 'Game',
		newGame: 'New Game',
		solveGame: 'Solve Puzzle',
		exit: 'Exit',
		rules: 'Rules'
	},
	rules: `1. There are 5 houses of different colors
2. In each house lives a person of a different nationality
3. None of them has the same pet, smokes the same cigarrete or drinks the same drink`,
	house: {
		field: 'House',
		color: {
			field: 'Color',
			yellow: 'Yellow',
			blue: 'Blue',
			white: 'White',
			green: 'Green',
			red: 'Red'
		},
		nationality: {
			field: 'Nationality',
			german: 'German',
			danish: 'Danish',
			english: 'English',
			norwegian: 'Norwegian',
			swedish: 'Swedish'
		},
		drink: {
			field: 'Drink',
			water: 'Water',
			coffee: 'Coffee',
			beer: 'Beer',
			tea: 'Tea',
			milk: 'Milk'
		},
		cigarrete: {
			field: 'Cigarrete',
			blends: 'Blends',
			bluemaster: 'Bluemaster',
			dunhill: 'Dunhill',
			pallmall: 'Pall Mall',
			prince: 'Prince'
		},
		pet: {
			field: 'Pet',
			dog: 'Dogs',
			horse: 'Horses',
			cat: 'Cats',
			bird: 'Birds',
			fish: 'Fishes'
		}
	},
	hints: {
		field: 'Hints',
		gameOverTitle: 'Game Over',
		gameOverMessage: 'Congratulations! You have solved everything!\nTo start over, go to the Game menu or press \
		CTRL + N',
	}
	// The actual hints are in a separate file called 'hintsList.js'
};

module.exports = locale;