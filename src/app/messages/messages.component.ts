import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  model:MessageViewModel = {
    recipient:"",
    title:"",
    message:"",
    sender:""
  }
  private url = environment.baseUrl + "messages";

  public messages: MessageViewModel[] = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllMessages();
    this.refresh();
  }
  
  sendMessage() {
    this.model.sender = localStorage.getItem("recipient")!;
    this.http.post(this.url, this.model).subscribe(
      res => {
        console.log(this.model);
        alert("Message was sent");
      },
      err => {
        console.log(this.model.message)
        alert("Something went wrong");
      }
    )
  }

  getAllMessages(): void{
    this.http.get<Array<MessageViewModel>>(this.url + "/" + localStorage.getItem("recipient")).subscribe(
      res => {
        for (let i = 0; i < this.messages.length; i++) {
          this.messages[i].message.replace("\n", "<br/>")
        }
        this.messages = res;
      }
    )
  }

  async refresh(): Promise<void> {
    await new Promise(f => setTimeout(f, 20000));
    window.location.href = environment.baseFrontendUrl + "messages";
  }
}

export interface MessageViewModel {
  recipient:string,
  title:string,
  message:string,
  sender:string
}
