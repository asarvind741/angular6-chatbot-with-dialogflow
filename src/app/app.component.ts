import { Component } from '@angular/core';
import { Message } from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public message : Message;
  public messages : Message[];

  constructor(){
    this.message = new Message('', new Date());
    this.messages = [
      new Message('Welcome to chatbot universe', new Date())
    ];
  }
}
