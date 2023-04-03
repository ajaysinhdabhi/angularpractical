import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isvisible?:boolean;
  textshow?:boolean;

  constructor(private router:Router,private service:AuthService){

  }

  showButton(){
    if(this.service.isloggedin()){
      this.isvisible=false;
      return true;
    }else{
      this.isvisible=true;
      return false;
    }
  }
  popup(){
    alert('To read the full blog you must have login1')
  }


  
//last read more button
  showotherblog(){
    if(this.service.isloggedin()){
      this.textshow=true;    
      return true;
    }else{
     
      this.textshow=false; 
      alert('To read the more blog you must have login2');
      
      this.router.navigate(['/login']);
     
      return false;
    }
  }

 


}
