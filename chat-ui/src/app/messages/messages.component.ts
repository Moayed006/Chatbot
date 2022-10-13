import { BOT_NAME } from '../../model/message';
import { ChatService } from '../../services/chat.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // STEP 13 define the Chatservice
  constructor(private chatService: ChatService) { }
  bot = BOT_NAME

  // STEP 14 define the messages list variable
  messages = this.chatService.messages

  //STEP 15 Open message.component.html

  ngOnInit(): void {
    console.log()
  }

  handleOption(text:any){
    let creationTime = Date()
    let time = moment().startOf('seconds').from(creationTime)
    //STEP 17 add messages to the array
    
    //STEP 30
    const message ={
      // STEP 32 Change message to text
      text: text,
      sender: this.chatService.user,
      options: [],
      time: time
      
    }

    this.chatService.addMessage(message)
    this.chatService.askWatson(text)
  }

}
