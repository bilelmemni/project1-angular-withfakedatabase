import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiseService } from '../service/servise.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  constructor(private router:Router , private servise:ServiseService){}
  validation=false
  formgroup:FormGroup=new FormGroup({
    firstname:new FormControl("",[Validators.required]),
    lastname:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(5)]),
  })
add(){
this.validation=true
if (this.formgroup.invalid) {
  return
}
console.log(this.formgroup.value)
this.servise.addregistre(this.formgroup.value).subscribe(
  res=>{
    console.log(res)
    this.router.navigate(['/home'])
  },err=>{
    console.log(err)
  }
)
}
}
