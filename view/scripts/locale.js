const fs = require('fs');
const path = require('path');

/**
 * 
 * @param {String} country - Country code following Chromium's l10n_util
 */
const locales = (country) => {
	const files = fs.readdirSync('./view/scripts/locales');
	
	for (let file of files) {
		
		if (path.parse(file).name === country) {
			return country.includes('en') ? require('./locales/en-US') : require(`./locales/${file}`);
		}
	}
};

module.exports = locales;
