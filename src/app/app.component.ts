import { Component } from '@angular/core';
import { BackendConnectorService } from './backend-connector.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crocoite-frontend';

  serverStatus: String = "Undefined";
  lastResp: String = "";

  newTask = "";

  tasksList = [];

  taskQueue = [];

  doneTasksList = [];

  lastOutput = {};

  constructor(private backend: BackendConnectorService){
  
  }

  ngOnInit() {
     this.backend.getStatus()
      .subscribe((status) => this.serverStatus = status.status);
  }

  addTask(){
    this.backend.addTask(encodeURI(this.newTask))
    .subscribe((resp) => this.lastResp = resp.status);
  }

  getTasks(){
    this.backend.getTasks()
    .subscribe((resp) => this.tasksList = resp);
  }

  toogleStatus(cmd){
    this.backend.setStatus(cmd)
    .subscribe((resp) => this.serverStatus = resp);
  }

  showOutput(id){
    console.log("showing output of task with id " + id);
    this.backend.getOuput(id)
    .subscribe((resp) => this.lastOutput = resp);
  }

  getDoneTasks(){
    this.backend.getDoneTasks()
    .subscribe((resp) => this.doneTasksList = resp);
  }
}
