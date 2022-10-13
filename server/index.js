import express from 'express'
import bodyParser from 'body-parser' 
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose  from 'mongoose'
import watsonRoutes from './api/routes/watsonRoutes.js'
import mongoRoutes from './api/routes/mongoRouter.js'
import userRoutes from './api/routes/userRouter.js'
dotenv.config()

const app = express()
const port = process.env.PORT || 8001
var corsOptions = {
    origin: '*',
    methods: '*'
}

app.use(bodyParser.json())
app.use(cors(corsOptions))

const connectionURL  = process.env.MONGO_URI
mongoose.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => 
        app.listen(port , () => {
            console.log(`The server is running on port ${port}`)
    })
)

.catch((err) => {
    console.error("Error in connected to MongoDB, err")
})


app.use("/", watsonRoutes);
app.use('/mongo', mongoRoutes)
app.use('/user',userRoutes)



