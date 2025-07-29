import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  hasDownloaded:boolean=true;

  constructor(){
    const download=localStorage.getItem('resumeDownload');
    this.hasDownloaded=download=='true';
  }

  downloadResume(){
    const link=document.createElement('a');
    link.href='assets/Rage-in-Peace.pdf'
    link.download='Rage-in-Peace.pdf';
    link.click();

    localStorage.setItem('fileDowloaded','true');
    this.hasDownloaded=true;
  }
}
