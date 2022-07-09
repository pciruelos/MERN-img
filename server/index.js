// main file for starting up the server

import {connectDB} from './db.js'
import {PORT} from './config.js'
import app from './app.js'

connectDB()
app.listen(PORT)
console.log('server runngin in port', PORT)