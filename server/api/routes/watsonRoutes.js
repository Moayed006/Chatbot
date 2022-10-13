import {Router} from 'express'
//STEP 1 create a new folder in the root directory /api/routes
// STEP 2 create a new file called watsonRoutes.js in the /api/routes/watsonRoute.js
import {retrieveSession, message, init} from '../controllers/watsonController.js'


const watsonRoutes = Router()
watsonRoutes.get("/createSession", retrieveSession)
watsonRoutes.post("/ask", message)
watsonRoutes.get("/", init)

export default watsonRoutes
// STEP 3 copy the /createSession route in index
// and copy the /ask route in index