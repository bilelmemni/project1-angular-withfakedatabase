import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiseService } from '../service/servise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  constructor(private servise:ServiseService,private router:Router){}
  validation=false
  formgroup:FormGroup=new FormGroup({
   image:new FormControl('',[Validators.required]),
   name:new FormControl('',[Validators.required]),
   prix:new FormControl('',[Validators.required,]),
   discription:new FormControl('',[Validators.required]),
  })
 add(){
  this.validation=true;
  if (this.formgroup.invalid) {
    return
  }
  console.log(this.formgroup.value)
  this.servise.addproduct(this.formgroup.value).subscribe(
    res=>{
      console.log(res)
      this.router.navigate(['/listproduct'])
    },err=>{
      console.log(err)
    }
  )
 }
}
