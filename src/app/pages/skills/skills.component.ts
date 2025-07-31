import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = [
  { name: 'Angular', icon: 'angular', level: 'Advanced', proficiency: 90, color: 'red-500' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', level: 'Intermediate', proficiency: 75, color: 'blue-400' },
  { name: '.NET Core', icon: 'dotnet', level: 'Advanced', proficiency: 85, color: 'purple-500' },
  { name: 'SQL Server', icon: 'sql', level: 'Intermediate', proficiency: 70, color: 'green-500' },
  { name: 'HTML/CSS', icon: 'html5', level: 'Advanced', proficiency: 95, color: 'pink-500' },
  { name: 'JavaScript', icon: 'javascript', level: 'Intermediate', proficiency: 80, color: 'yellow-500' },
];

  constructor() {}

  ngOnInit(): void {}
}
