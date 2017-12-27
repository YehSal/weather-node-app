const request = require('request');
const yargs = require('yargs');

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

const address = argv.address;
const encodedAddress = encodeURIComponent(address);

request({
	url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
	json: true
}, (error, response, body) => {
	if (error) {
		console.log('Unable to connect to Google servers.');
	} else if (body.status === 'ZERO_RESULTS') {
		console.log('Invalid address');
	} else if (body.status === 'OK') {
		console.log(`Address: ${body.results[0].formatted_address}`);
		console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
		console.log(`Longitude: ${body.results[0].geometry.location.lng}`);	
	}
});