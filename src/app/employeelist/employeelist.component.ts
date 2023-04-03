import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { EmployeeModel } from './employeelist.model';


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent  implements OnInit{
  [x: string]: any;

  employeeModelObj:EmployeeModel=new EmployeeModel();
  employeeData !:any;
  showAdd!:boolean;
  showUpdate!:boolean;

  constructor(private service:AuthService,private router:Router,private http:HttpClient){

  }
  ngOnInit(): void {
    this.getAllEmployee();
  }

  loginForm=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.maxLength(15)]),
    email:new FormControl('',[Validators.required,Validators.email,Validators.maxLength(30)]),
    phone:new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    role:new FormControl('',[Validators.required])
  })

  get username(){
    return this.loginForm.get('username')
  }
  get email(){
    return this.loginForm.get('email')
  }
  get phone(){
    return this.loginForm.get('phone')
  }
  get role(){
    return this.loginForm.get('role')
  }

  clickAddEmployee(){
    this.loginForm.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  postEmployeeDetails(){
     this.employeeModelObj.username=this.loginForm.value.username;
     this.employeeModelObj.email=this.loginForm.value.email;
     this.employeeModelObj.phone=this.loginForm.value.phone;
     this.employeeModelObj.role=this.loginForm.value.role;

     this.service.postEmployee(this.employeeModelObj)
     .subscribe((res: any)=>{
      console.log(res);
      alert('Employee added successfully');
      let ref=document.getElementById('cancel')
      ref?.click();
      this.loginForm.reset();
      this.getAllEmployee();
     },
       (err: any)=>{
      alert('something went wrong')
     
     })
  }

  getAllEmployee(){
    this.service.getEmployee()
    .subscribe(res=>{
       this.employeeData=res;
    })
  }

  deleteEmployee(row:any){
    console.log(row);
    
    this.service.deleteEmployee(row.id).subscribe(res=>{
      console.log(res);
      
      alert('the data is deleted')
    this.getAllEmployee();
    })
  }

  onEdit(row:any){
    this.showAdd=false;
    this.showUpdate=true;
    this.employeeModelObj.id=row.id;
    this.loginForm.controls['username'].setValue(row.username);
    this.loginForm.controls['email'].setValue(row.email);
    this.loginForm.controls['phone'].setValue(row.phone);
    this.loginForm.controls['role'].setValue(row.role)
  }

  updateEmployeeDetails(){
    this.employeeModelObj.username=this.loginForm.value.username;
     this.employeeModelObj.email=this.loginForm.value.email;
     this.employeeModelObj.phone=this.loginForm.value.phone;
     this.employeeModelObj.role=this.loginForm.value.role;

     this.service.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
     .subscribe(res=>{
        alert('Data updated successfully');
        let ref=document.getElementById('cancel')
        ref?.click();
        this.loginForm.reset();
        this.getAllEmployee(); 
     })
  }


    
}
