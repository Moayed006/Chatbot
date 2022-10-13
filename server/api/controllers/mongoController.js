import {Log} from '../models/log.js'

export const getLogs = async(req,res) => {
   await Log.find({}, (err,logs) => {
        if(err){
            res.status(500).send("Wallah I can't get logs")
        }
        if(logs.length == 0){
            return res.status(204)
        }
        res.status(200).send(logs)
    })
    res.status(200).json(logs)
}

export const addLog = async(req,res) => {
    const log = new Log(req.body)
    try{
        await log.save()
        res.status(200).send(log)
    }
    catch(err){
        res.status(500).send("Can't create log in database something happeend, enjoy :)")
    }
}