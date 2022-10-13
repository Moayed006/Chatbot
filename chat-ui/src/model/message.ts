// ====== AFTER LUNCH ========
//STEP 20 Run command
// > $ ng g interface Message
import * as moment from 'moment'
//STEP 21
//Open message.ts file start editing
export interface Message {
  //STEP 33 FROM STEP 32 change message to text
  text: string,
  sender: string | null,
  options: any,
  time: string
  // MessageSender created below

  // STEP 34 Open message.component.html
}

//STEP 22 Create Enumerate
// export enum MessageSender{
//   user = "Hakam", // name of user
//   bot = "Rida"
// }

export const BOT_NAME = "Watson"
//STEP 23 Open chat.service.ts
