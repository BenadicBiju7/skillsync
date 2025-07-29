import { Component } from '@angular/core';
import { SkillService } from '../../services/skill.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills:any[]=[];
  constructor(private skillService:SkillService){}
  ngOnInit():void{
    this.skills=this.skillService.getSkills();
  }
}
