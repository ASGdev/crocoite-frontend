import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService {

  backend_host = "35.180.252.61:3000";

  constructor(private http: HttpClient) { }

  setRemote = function(){
    // todo
  }

  getStatus = function(){
    return this.http.get("http://" + this.backend_host + "/status"); 
  }

  addTask = function(url){
    return this.http.post("http://" + this.backend_host + "/task", {"url" : url});
  }

  getTasks = function(){
    return this.http.get("http://" + this.backend_host + "/tasks");
  }

  getQueue = function(){
    return this.http.get("http://" + this.backend_host + "/queue");
  }

  setStatus = function(cmd){
    return this.http.post("http://" + this.backend_host + "/status", {"status" : cmd}); 
  } 

  getOuput = function(id){
    // TO DO
    return this.http.post("http://" + this.backend_host + "/log", {"id" : id}); 
  } 

  getDoneTasks = function(){
    return this.http.post("http://" + this.backend_host + "/tasks", {"status" : "done"}); 
  }
  
}
