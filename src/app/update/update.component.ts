import { Component } from '@angular/core';
import { ServiseService } from '../service/servise.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(private servise:ServiseService,private router:Router,private act:ActivatedRoute){}
  validation=false
  formgroup:FormGroup=new FormGroup({
   image:new FormControl('',[Validators.required]),
   name:new FormControl('',[Validators.required]),
   prix:new FormControl('',[Validators.required,]),
   discription:new FormControl('',[Validators.required]),
  })
  id:any;
  ngOnInit():void{
  this.id=this.act.snapshot.paramMap.get('id');
  this.servise.getproductbyid(this.id).subscribe(
    res=>{
      console.log(res)
      this.formgroup.patchValue(res)
    },err=>{
      console.log(err)
    }
  )
  }
 update(){
  this.validation=true;
  if (this.formgroup.invalid) {
    return
  }
  console.log(this.formgroup.value)
  this.servise.updateproduct(this.id,this.formgroup.value).subscribe(
    res=>{
      console.log(res)
      this.router.navigate(['/listproduct'])
    },err=>{
      console.log(err)
    }
  )
 }
}
