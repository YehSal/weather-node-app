const request = require('request');
const yargs = require('yargs');

// const geocode = require('./geocode/geocode.js');

// const argv = yargs
// 	.options({
// 		a: {
// 			describe: 'Address to fetch weather',
// 			demand: true,
// 			alias: 'address',
// 			string: true
// 		}
// 	})
// 	.help()
// 	.alias('help', 'h')
// 	.argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
// 	if (errorMessage) {
// 		console.log(errorMessage);
// 	} else {
// 		console.log(JSON.stringify(results, undefined, 2));
// 	}
// });

// de9aa54ed15b100f9291b4d4abb1f422

request({
	url: 'https://api.darksky.net/forecast/de9aa54ed15b100f9291b4d4abb1f422/41.3065186,-72.9310714',
	json: true
}, (error, response, body) => {
	if (!error && response.statusCode === 200) {
		console.log(body.currently.temperature);	
	} else {
		console.log('Unable to fetch weather');
	}
});