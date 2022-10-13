import {Router} from 'express'
import {all, create, getUser, update, remove,login} from '../controllers/userController.js'

const userRoutes = Router()

userRoutes.get("/all", all)
userRoutes.get("/:networkId", getUser) 
userRoutes.patch("/:networkId",update)
userRoutes.post("/",create)
userRoutes.delete("/:networkId", remove)
userRoutes.post("/login",  login)


export default userRoutes