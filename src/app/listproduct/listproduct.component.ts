import { Component } from '@angular/core';
import { ServiseService } from '../service/servise.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent {
constructor(private servise:ServiseService){}
list:any;
ngOnInit():void{
  this.servise.getallproduct().subscribe(
    res=>{
      this.list=res
    },
    err=>{
      console.log(err)
    }
  )
}
delete(id:any){
  this.servise.deleteproduct(id).subscribe(
    res=>{
      console.log(res)
      this.ngOnInit()
    },err=>{
      console.log(err)
    }
  )
}
}
