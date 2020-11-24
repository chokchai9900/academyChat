import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  messages =[
    {
      user: 'bloodrainz',
      createAt: 1554090956000,
      msg: 'Hey what up mate ?'
    },
    {
      user: 'zulu13warpBOT',
      createAt: 1554090956000,
      msg: 'Working on the ionic mission , you ?'
    },
    {
      user: 'bloodrainz',
      createAt: 1554090956000,
      msg: 'doing some new tutourial stuff'
    }
  ];

  botMessages =[
    {
      user: 'zulu13warpBOT',
      createAt: 1554090956000,
      command:"1",
      msg: 'Command id is 1'
    },
    {
      user: 'zulu13warpBOT',
      createAt: 1554090956000,
      command:"2",
      msg: 'Command id is 2'
    },
    {
      user: 'zulu13warpBOT',
      createAt: 1554090956000,
      command:"3",
      msg: 'Command id is 3'
    },
  ]

  currentUser = "bloodrainz"
  newMsg ='';
  @ViewChild(IonContent) content: IonContent

  constructor() {}

  sendMessage(){
    this.messages.push({
      user: 'bloodrainz',
      createAt: new Date().getTime(),
      msg: this.newMsg
    });
    var checkmessage = this.botMessages.find(it => it.command == this.newMsg);
    console.log(checkmessage);
    if (this.newMsg !== null || this.newMsg !== undefined) {
      this.messages.push({
        user : checkmessage.user,
        msg : checkmessage.msg,
        createAt: new Date().getTime()
      });
    }else{
      this.messages.push({
        user : "zulu13warpBOT",
        msg : "command is not defind",
        createAt: new Date().getTime()
      });
    }

    this.newMsg = '';
    setTimeout(() =>{
      this.content.scrollToBottom(200);
    })
  }
}
