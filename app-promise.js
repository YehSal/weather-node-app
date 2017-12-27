const yargs = require('yargs');
const axios = require('axios');

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


var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL).then((response) => {
	if (response.data.status === 'ZERO_RESULTS') {
		throw new Error('Unable to find that address.');
	}
	var address = response.data.results[0].formatted_address;
	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.lng;
	var weatherURL = `https://api.darksky.net/forecast/de9aa54ed15b100f9291b4d4abb1f422/${lat},${lng}`;

	console.log(address);
	return axios.get(weatherURL);
}).then((response) => {
	var temp = response.data.currently.temperature;
	var apparentTemp = response.data.currently.apparentTemperature;
	console.log(`It's currently ${temp}. It feels like ${apparentTemp}`);
}).catch((e) => {
	if (e.code === 'ENOTEFOUND') {
		console.log('Unable to connect to server');
	} else {
		console.log(e.message);
	}
});



