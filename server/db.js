//db code

import mongoose from 'mongoose'
import {MONGODB_URI} from './config.js'


export async function connectDB() {
    try {
        const mydb = await mongoose.connect(MONGODB_URI)
        console.log('Server Running and conected to', mydb.connection.name)
}   catch (error) {
    console.log(error)
    }
}
