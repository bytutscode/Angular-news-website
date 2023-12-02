import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  menuOpen: boolean = false;
  isLogged: boolean = false;

  constructor(private router: Router) {
    this.isLogged = !!localStorage.getItem('user');
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
