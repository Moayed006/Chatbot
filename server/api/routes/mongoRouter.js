import {Router} from 'express'
import {getLogs, addLog} from '../controllers/mongoController.js'

const mongoRoutes = Router()

mongoRoutes.get('/',getLogs)
mongoRoutes.post('/', addLog)


export default mongoRoutes