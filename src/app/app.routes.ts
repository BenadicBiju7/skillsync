import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';

export const routes: Routes = [
    {path:'about',component:AboutComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'skills',component:SkillsComponent},
    {path:'contact',component:ContactComponent},
    {path:'',component:HomeComponent},
    {path:'testimonials',component:TestimonialsComponent}
];
