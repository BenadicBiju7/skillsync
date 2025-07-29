import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})

export class SkillService{
    getSkills(){
        return [
            { name: 'Angular', level: 80 },
            { name: 'C# .NET', level: 75 },
            { name: 'SQL Server', level: 70 },
            { name: 'JavaScript', level: 85 },
            { name: 'HTML/CSS', level: 90 },
        ]
    }
}