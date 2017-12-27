var somePromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve('It worked!');
		reject('I cant');
	}, 2500);
});

somePromise.then((message) => {
	console.log('Success: ', message);
}, (errorMessage) => {
	console.log(errorMessage);
})