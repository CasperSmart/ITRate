import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../models/menu-item";
import {AuthService} from "../auth/auth.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public menuLinks: MenuItem [] = [];
  constructor(public authService: AuthService) {
    const activeClass = 'active';
    
    if(authService.isLoggedIn()){
      this.menuLinks.push(
        new MenuItem('', 'Головна', activeClass, true),
        new MenuItem('rate', 'Оцінити', activeClass, false),
        new MenuItem('auth/user-panel', 'Моя Сторінка', activeClass, false),
        new MenuItem('admin/adminpanel', 'Адмін', activeClass, false),
      );
    }
    else{
      this.menuLinks.push(
        new MenuItem('', 'Головна', activeClass, true),
        new MenuItem('auth', 'Увійти', activeClass, false),
        new MenuItem('auth/register', 'Зареєструватись', activeClass, false)
      );
    }
  }

  ngOnInit() {
    
  }

}
