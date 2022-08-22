const client = require('./lib/client')
const { DATABASE, علي الوقدي } = require('./config')
const start = async () => {
	try {console.log(`levanter ${علي الواقدي}`)
		await DATABASE.sync()
		console.log('DB syncing')
		await client.connect()
	} catch (error) {
		console.error(error)
	}
}
start()