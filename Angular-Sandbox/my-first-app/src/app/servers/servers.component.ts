import { Component, OnInit} from '@angular/core';
import { __setFunctionName } from 'tslib';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No Server Made';
  serverName = "Testserver";
  serverCreated = false;
  servers = ['Testserver', 'TestServer2'];

    constructor() {
      setTimeout(() => {
        this.allowNewServer = true;
      }, 1250 )
    }
    ngOnInit() {
    }

    onCreateServer(){
      this.serverCreated = true; 
      this.servers.push(this.serverName);
      this.serverCreationStatus = 
      'Server was created The name of the server is ' + this.serverName;
    }

    onUpdateServerName(event: Event){
      this.serverName = (<HTMLInputElement>event.target).value;
    }
}


