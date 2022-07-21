//express code

import express from 'express'
import fileUpload from 'express-fileupload'
import postsRoutes from './routes/post.routes.js'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'

//start express
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

//middlewares
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

// routes
app.use(postsRoutes)

app.use(express.static(join(__dirname,'../client/build')))

app.get('*',(req,res) => {
    res.sendFile(join(__dirname,'../client/build/index.html'))
})

export default app