const request = require('request');

var fetchWeather = (latitude, longtitude, callback) => {
	request({
		url: `https://api.darksky.net/forecast/de9aa54ed15b100f9291b4d4abb1f422/${latitude},${longtitude}`,
		json: true
	}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});	
		} else {
			callback('Unable to fetch weather');
		}
	});
};

module.exports = {
	fetchWeather
}
