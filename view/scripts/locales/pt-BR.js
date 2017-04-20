const locale = {
	menu: {
		game: 'Jogo',
		newGame: 'Novo Jogo',
		solveGame: 'Solucionar Enigma',
		exit: 'Sair',
		rules: 'Regras'
	},
	rules: `1. Há 5 casas de diferentes cores
2. Em cada casa mora uma pessoa de uma diferente nacionalidade
3. Nenhum deles tem o mesmo animal, fuma o mesmo cigarro ou bebe a mesma bebida`,
	house: {
		field: 'Casa',
		color: {
			field: 'Cor',
			yellow: 'Amarela',
			blue: 'Azul',
			white: 'Branca',
			green: 'Verde',
			red: 'Vermelha'
		},
		nationality: {
			field: 'Nacionalidade',
			german: 'Alemão',
			danish: 'Dinamarquês',
			english: 'Inglês',
			norwegian: 'Norueguês',
			swedish: 'Sueco'
		},
		drink: {
			field: 'Bebida',
			water: 'Água',
			coffee: 'Café',
			beer: 'Cerveja',
			tea: 'Chá',
			milk: 'Leite'
		},
		cigarrete: {
			field: 'Cigarro',
			blends: 'Blends',
			bluemaster: 'Bluemaster',
			dunhill: 'Dunhill',
			pallmall: 'Pall Mall',
			prince: 'Prince'
		},
		pet: {
			field: 'Animal',
			dog: 'Cachorros',
			horse: 'Cavalos',
			cat: 'Gatos',
			bird: 'Pássaros',
			fish: 'Peixes'
		}
	},
	hints: {
		field: 'Dicas',
		gameOverTitle: 'Fim de Jogo',
		gameOverMessage: 'Parabéns! Você decifrou tudo!\nPara começar de novo, selecione no menu ou pressione CTRL + N',
	}
	// The actual hints are in a separate file called 'hintsList.js'
};

module.exports = locale;