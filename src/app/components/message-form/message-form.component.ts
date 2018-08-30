import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';
import { DialogflowService } from '../../services/dialogflow.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  query: string;

  @Input('message')
  private message : Message;

  @Input('messages')
  private messages : Message[];

  constructor(private dialogFlowService: DialogflowService) { }

  ngOnInit() {
  }

  public sendMessage(): void {

    const timstamp = new Date();
    this.message.timstamp = timstamp;
    this.message.content = this.query;
    this.messages.push(this.message);

    this.dialogFlowService.getResponse(this.query)
    .subscribe((response: HttpResponse<any>) => {
      this.messages.push( new Message(response.result.fulfillment.speech, response.timestamp))
      this.query = '';
    })
  

  }


}
