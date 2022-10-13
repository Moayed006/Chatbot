import dotenv from 'dotenv'
import AssistantV2 from 'ibm-watson/assistant/v2.js'
import { IamAuthenticator } from 'ibm-watson/auth/index.js';
dotenv.config()

const assistant = new AssistantV2({
  version: process.env.VERSION, // Replace '{version}' 
  authenticator: new IamAuthenticator({
    apikey: process.env.APIKEY, // Replace '{apikey}' 
  }),
  serviceUrl: process.env.WATSON_URL, // Replace '{url}' 
});

export const init = (req, res) => res.send("Ready to use Watson!");

export const retrieveSession = (req, res) => {
  assistant.createSession({assistantId: process.env.ASSISTANT_ID})
  .then(response => {
       if(res.status > 300){
         throw response
       }
       res.status(response.status).json(response.result)
  }) // UPDATE
  .catch(err => res.status(err.status? err.status: 404).json(err))
}

export const message = (req, res) => {
   /*17*/ const { session_id, text } = req.body 
  
   const message = {
    assistantId: process.env.ASSISTANT_ID,
    /* 17: remove req.body. */sessionId: session_id, 
    input: {
      message_type: 'text',
      /* 17: remove req.body. */ text: text
      }
    }
  
    assistant.message(message)
             .then(response => res.json(response))
             .catch(err => res.json(err))
}

