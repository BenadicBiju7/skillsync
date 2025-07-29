import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class ProjectService{
    getProjects(){
        return[
            {
        title: 'Developer Portfolio',
        description: 'A personal portfolio built with Angular and .NET Core backend.'
      },
      {
        title: 'Community Alert System',
        description: 'Real-time alert system using Angular and SignalR.'
      }
        ]
    }
}