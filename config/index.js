module.exports = {
		dev: {
				env: require('./dev.env.js'),
				port: 3000,
		},
		production: {
				env: require('./pro.env.js'),
				port: 8000
		}

};