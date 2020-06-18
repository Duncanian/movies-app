import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activeLink: string = 'upcoming';

  constructor() { }

  ngOnInit(): void {
    const currentPath =  window.location.pathname;
    if (currentPath === 'upcoming') {
      this.activeLink = 'upcoming';
    } else if (currentPath === '/favourite') {
      this.activeLink = 'favourite';
    } else {
      this.activeLink = 'upcoming';
    }
  }

  onTabClick(link: string) {
    this.activeLink = link;
  }

}
