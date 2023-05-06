import { Component } from '@angular/core';
import { ServiseService } from '../service/servise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(public servise:ServiseService, private router:Router){}
}
