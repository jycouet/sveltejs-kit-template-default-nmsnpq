const kitqlConfig = require('@kitql/all-in/cjs.cjs');

/** @type {import('@kitql/all-in').KitQLProjects} */
const config = {
	projects: {
		default: kitqlConfig()
	}
};

module.exports = config;
