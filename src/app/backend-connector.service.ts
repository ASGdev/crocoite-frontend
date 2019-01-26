import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService {

  ip_remote = "35.180.252.61";

  constructor(private http: HttpClient) { }

  getStatus = function(){
    return this.http.get("http://35.180.252.61:3000/status"); 
  }

  addTask = function(url){
    return this.http.post("http://35.180.252.61:3000/task", {"url" : url});
  }

  getTasks = function(){
    return this.http.get("http://35.180.252.61:3000/tasks");
  }

  getQueue = function(){
    return this.http.get("http://35.180.252.61:3000/queue");
  }

  setStatus = function(cmd){
    return this.http.post("http://35.180.252.61:3000/status", {"status" : cmd}); 
  } 

  getOuput = function(id){
    // TO DO
    return this.http.post("http://35.180.252.61:3000/status", {"id" : id}); 
  } 
  
}
