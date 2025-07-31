import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    // Get base projects
    const baseProjects = this.projectService.getProjects();

    // Enhance each with demo + tech stack
    this.projects = baseProjects.map(project => ({
      ...project,
      techStack: project.techStack || ['Angular', 'Tailwind CSS'], // default tech
      githubUrl: project.githubUrl || 'https://github.com/BenadicBiju7/skillsync',
      demoUrl: project.demoUrl || 'https://benadicbiju7.github.io/skillsync/'
    }));
  }
}
