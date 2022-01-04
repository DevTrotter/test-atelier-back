import express from "express"
import routes from './routes/playersRoutes/playersRoutes.js'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const corsHandler = cors({origin: true})

const PORT = process.env.PORT || 3000

//--------API--------

const app = express()
app.use(cors({ origin: true }))

app.use(routes)


//--------API TRIGER DIRECTORY--------
app.listen(PORT, () => {
    console.log(`the server has start on port : ${PORT}`)
})