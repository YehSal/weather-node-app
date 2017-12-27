const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const argv = yargs
	.options({
		a: {
			describe: 'Address to fetch weather',
			demand: true,
			alias: 'address',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(JSON.stringify(results, undefined, 2));
	}
});