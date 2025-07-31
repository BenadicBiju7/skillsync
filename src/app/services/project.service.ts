import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getProjects() {
    return [
      {
        title: 'SkillSync Portfolio',
        description: 'An interactive and responsive developer portfolio built with Angular and Tailwind CSS.',
        techStack: ['Angular', 'Tailwind CSS', '.NET Core'],
        githubUrl: 'https://github.com/BenadicBiju7/skillsync',
        demoUrl: 'https://benadicbiju7.github.io/skillsync/',
      },
      {
        title: 'Alert System',
        description: 'Local community alert system built using Angular and ASP.NET Core.',
        techStack: ['Angular', '.NET Core', 'SQL Server'],
        githubUrl: 'https://github.com/BenadicBiju7/local-alert-system',
        demoUrl: '#',
      },
    ];
  }
}
