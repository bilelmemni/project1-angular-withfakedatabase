import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiseService } from '../service/servise.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router , private servise:ServiseService){}
  users:any;
  ngOnInit():void{
    this.servise.getalllogin().subscribe(
     res=>{
      this.users=res
     } ,err=>{console.log(err)}
    )
  }
  validation=false
  formgroup:FormGroup=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(5)]),
  })

log(){
  this.validation=true
if (this.formgroup.invalid) {
  return
}
  this.servise.addlogin(this.formgroup.value).subscribe(
    res=>{
      this.token=res;
      localStorage.setItem('token',JSON.stringify(this.token))
      this.router.navigate(['/addproduct'])
    },err=>{console.log(err)}
  )
}
token:any
add(){
this.validation=true
if (this.formgroup.invalid) {
  return
}
let user=this.users.find((element: {password: any; email: any; })=>element.email==this.formgroup.value.email 
&& element.password==this.formgroup.value.password)
//console.log(this.formgroup.value.email)
console.log(user)
if (user!=undefined) {
  this.servise.addlogin(this.formgroup.value).subscribe(
    res=>{
      console.log(res)
      this.token=res;
      localStorage.setItem('token',JSON.stringify(this.token))
      this.router.navigate(['/addproduct'])
    },err=>{
      console.log(err)
    }
  )
} else{alert('passwored ou email false')}

}

}
