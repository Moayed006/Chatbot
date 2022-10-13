import {User} from "../models/user.js"

export const all = (req, res) => { 
    User.find({}, (err, users) => {
        if(err){
            res.status(500).send("Wallah I can't get users")
        }
        if(users.length == 0){
            return res.status(204)
        }
        res.status(200).send(users)
    })
}
export const create = async (req, res) => {

    const user = new User(req.body)
    try{
        await user.save()
        res.status(200).send(user)
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}
export const remove = (req, res) => { 
    const networkId = req.params.networkId

    User.findOneAndRemove({networkId}, (err,user) => {
        if(err){
            res.status(500).send("Can't remove the user")
        }
        res.status(200).send(user)
    })
}



export const getUser = (req, res) => {
    const networkId = req.params.networkId
    console.log(networkId)
    if(networkId == ""){
        res.status(400).send("Bad request pass in user's netowrk")
    }
    User.findOne({networkId}, (err,user) => { 
        if(err){
            res.status(500).send("No user found")
        }
        else if(!user) return res.status(204).send()
        res.status(200).json(user)
    })

}

export const update = (req, res) => {
    const networkId = req.params.networkId

    User.updateOne({networkId}, req.body , (err, result) =>{
        if(err){
            res.status(500).send("Can't update the user")
        }
        else if(result.matchedCount != 1) return res.status(404).send("User Not Found")
            res.send(result.result)
    })

}

export const login = (req, res) => {
    //check if networkId exists
    const {email, password} = req.body
  
    // AFTER Break update
    
    User.findOne({email} , (err, user) =>{ // {networkId: networkId} => {networkId}
      if(err) return res.status(500).send("No user found")
      else if(!user) return res.status(204).send()

      res.send(JSON.stringify(user))
  
    })
  }
