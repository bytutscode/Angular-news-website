import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavBarMenuComponent } from './nav-bar-menu/nav-bar-menu.component';
import { NavBarSearchComponent } from './nav-bar-search/nav-bar-search.component';
import { NavBarSocialsComponent } from './nav-bar-socials/nav-bar-socials.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  standalone:true,
  imports:[
    RouterModule,
    CommonModule,
    NavBarMenuComponent,
    NavBarSearchComponent,
    NavBarSocialsComponent
  ]
})
export class NavBarComponent implements OnInit {
  menuOpen: boolean = false;
  isLogged: boolean = false;
  

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    this.isLogged = !!localStorage.getItem('user');
  }

  logout() {
    localStorage.clear();
    this.closeMenu();
    this.ngOnInit()
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
