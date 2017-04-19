const list = {
	'pt-BR': [
		{
			hint: 'O Norueguês vive na primeira casa',
			check: false
		},
		{
			hint: 'O Inglês vive na casa Vermelha',
			check: false
		},
		{
			hint: 'O Sueco tem Cachorros como animais de estimação',
			check: false
		},
		{
			hint: 'O Dinamarquês bebe Chá',
			check: false
		},
		{
			hint: 'A casa Verde fica do lado esquerdo da casa Branca',
			check: false
		},
		{
			hint: 'O homem que vive na casa Verde bebe Café',
			check: false
		},
		{
			hint: 'O homem que fuma Pall Mall cria Pássaros',
			check: false
		},
		{
			hint: 'O homem que vive na casa Amarela fuma Dunhill',
			check: false
		},
		{
			hint: 'O homem que vive na casa do meio bebe Leite',
			check: false
		},
		{
			hint: 'O homem que fuma Blends vive ao lado do que tem Gatos',
			check: false
		},
		{
			hint: 'O homem que cria Cavalos vive ao lado do que fuma Dunhill',
			check: false
		},
		{
			hint: 'O homem que fuma BlueMaster bebe Cerveja',
			check: false
		},
		{
			hint: 'O Alemão fuma Prince',
			check: false
		},
		{
			hint: 'O Norueguês vive ao lado da casa Azul',
			check: false
		},
		{
			hint: 'O homem que fuma Blends é vizinho do que bebe Água',
			check: false
		}
	],
	'en': [
		{
			hint: 'The Norwegian lives in the first house',
			check: false
		},
		{
			hint: 'The English lives in the red house',
			check: false
		},
		{
			hint: 'The Swedish keeps dogs as pets',
			check: false
		},
		{
			hint: 'The Danish drinks tea',
			check: false
		},
		{
			hint: 'The green house is on the left of the white house',
			check: false
		},
		{
			hint: 'The green house\'s owner drinks coffee',
			check: false
		},
		{
			hint: 'The man who smokes Pall Mall keeps birds',
			check: false
		},
		{
			hint: 'The owner of the yellow house smokes Dunhill',
			check: false
		},
		{
			hint: 'The man living in the center house drinks milk',
			check: false
		},
		{
			hint: 'The man who smokes Blends lives next to the cats keeper',
			check: false
		},
		{
			hint: 'The man who keeps horses lives next to the Dunhill smoker',
			check: false
		},
		{
			hint: 'The man who smokes BlueMaster drinks beer',
			check: false
		},
		{
			hint: 'The German smokes Prince',
			check: false
		},
		{
			hint: 'The Norwegian lives next to the blue house',
			check: false
		},
		{
			hint: 'The man who smokes Blends has a neighbor who drinks water',
			check: false
		}
	]
};

module.exports = (locale) => locale.includes('en') ? list.en : list[locale];
