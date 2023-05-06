import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { Page404Component } from './page404/page404.component';
import { UpdateComponent } from './update/update.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'' ,redirectTo:'/home',pathMatch:'full'},
  {path:'home' ,component:HomeComponent},
  {path:'addproduct' , canActivate: [AuthGuard],component:AddproductComponent},
  {path:'listproduct' , canActivate: [AuthGuard],
  component:ListproductComponent},
  {path:'login' ,component:LoginComponent},
  {path:'registre' ,component:RegistreComponent},
  {path:'update/:id' ,component:UpdateComponent},
  {path:'**' ,component:Page404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
