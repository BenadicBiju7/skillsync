import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isDark=false;

  constructor(){
    const theme=localStorage.getItem('theme');
    this.isDark=theme=='dark';
    this.updateTheme();
  }

  toggleTheme(){
    this.isDark=!this.isDark;
    localStorage.setItem('theme',this.isDark?'dark':'light');
    this.updateTheme();
  }

  updateTheme(){
    const classList=document.body.classList;
    if(this.isDark){
      classList.add('dark-theme');
    }
    else{
      classList.remove('dark-theme');
    }
  }
}
