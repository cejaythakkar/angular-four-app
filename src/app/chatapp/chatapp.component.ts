import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-chatapp',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.css']
})
export class ChatappComponent implements OnInit {

  constructor() { }
  public typMsg = '';
  private sock : any;
  private name : string;
  @ViewChild('msgarea') msgArea : ElementRef;
  ngOnInit() {
    this.name = prompt(`what is your name?`);
    this.sock = new WebSocket('ws://localhost:5001');
    this.sock.onopen = ( event ) => {
      console.log('websocket connection made successfully');
      this.sock.send(JSON.stringify({
          type:'name',
          data : this.name
      }));
    };

    this.sock.onmessage = ( event ):void => {
      let jsonData = JSON.parse(event.data);
      this.msgArea.nativeElement.innerHTML += `${jsonData.name} --> ${jsonData.data} <br/>`;
    };
  }

  public sendMessage():void{
    this.sock.send(JSON.stringify({
      type:'message',
      data : this.typMsg
    }));
    this.msgArea.nativeElement.innerHTML += `you --> ${this.typMsg}<br/>`;
  }

}
