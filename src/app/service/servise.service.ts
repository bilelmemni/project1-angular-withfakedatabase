import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiseService {

  constructor(private http:HttpClient , private router:Router) { }
  private url='  http://localhost:3000'
  addproduct(data:any){
    return this.http.post(this.url+'/product',data)
  }
  addregistre(data:any){
    return this.http.post(this.url+'/registre',data)
  }
  addlogin(data:any){
   return this.http.post(this.url+'/login',data)
  }
  getallproduct(){
    return this.http.get(this.url+'/product')
  }
  getalllogin(){
    return this.http.get(this.url+'/registre')
  }

  deleteproduct(id:any){
    return this.http.delete(this.url+'/product/'+id)
  }
  getproductbyid(id:any){
    return this.http.get(this.url+'/product/'+id)
  }
 updateproduct(id:any,data:any){
  return this.http.put(this.url+'/product/'+id,data)
 }
 isLogedIn(){
  let token=localStorage.getItem('token')
  if (token) {
    return true
  } else {
    return false
  }
}
SignoutUser(){
  localStorage.removeItem("token");
  this.router.navigate(['/home'])
}
}
