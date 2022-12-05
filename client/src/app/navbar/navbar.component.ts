import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private theme: ThemeService) { }

  ngOnInit(): void {
  }

  public switchTheme(): void {
    console.log("Switching theme");
    if (this.theme.current === 'light') {
        this.theme.current = 'dark';
    } else {
        this.theme.current = 'light';
    }
  }

}
