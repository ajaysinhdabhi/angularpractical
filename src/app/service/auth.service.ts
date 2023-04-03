import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { BehaviorSubject, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
 isloggedany:any;
isadmin?:any
  constructor(private http:HttpClient) { }
 
  apiurl='http://localhost:3000/myjsondata'
  islog(props:any , props2:any){
    this.isloggedany=props;
    this.isadmin=props2
  }
  isloggedin(){
    if(this.isloggedany==true){
      return true;
    }
    else{
      return false;
    }
  }
  GetAll(){
    return this.http.get(this.apiurl)
  }
  Getbycode(code:any){
    return this.http.get(this.apiurl+'/'+code)
  }

  postEmployee(data : any){
    return this.http.post<any>("http://localhost:3000/employeedata",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getEmployee(){
    return this.http.get<any>("http://localhost:3000/employeedata?role=user")
    .pipe(map((res:any)=>{
      
      
      return res;
    }))
  }

  updateEmployee(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/employeedata"+"/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteEmployee(id:number){
    return this.http.delete<any>("http://localhost:3000/employeedata"+"/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
