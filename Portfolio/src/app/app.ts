import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
interface Project {
  Image: string;
  Title: string;
  Language: string;
  Link: string
}
interface socials{
  Platform: string;
  Link: string;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  Langs:string[] = ["HTML/CSS", "Java", "Javascript", "PHP", "Spring Boot","Node.js", "React", "Angluar", "Tailwind"];
  Social:socials[] = [
    {"Platform": "Github",
      "Link": "https://github.com/KutsiGiira"
    },
    { "Platform": "Gmail",
      "Link": "mailto:haytamboualkhours@gmail.com"
    },
    {"Platform": "LinkedIn",
      "Link": "https://www.linkedin.com/in/haytam-boualkhours/"
    },
  ];
  Name:string = "Haytam Boualkhours";
  ShowProjects: boolean = false;
  Projects:Project[] = [
    {
      "Image": "Shi 7aja",
      "Title": "Titlte",
      "Language": "Java",
      "Link": "sshshhshs"
    },
        {
      "Image": "Shi 7aja1",
      "Title": "Titlte1",
      "Language": "Java1",
      "Link": "sshshhshs"
    },
        {
      "Image": "Shi 7aja1",
      "Title": "Titlte1",
      "Language": "Java1",
      "Link": "sshshhshs"
    },
        {
      "Image": "Shi 7aja",
      "Title": "Titlte",
      "Language": "Java Javascript PHP",
      "Link": "sshshhshs"
    },
        {
      "Image": "Shi 7aja1",
      "Title": "Titlte1",
      "Language": "Java1",
      "Link": "sshshhshs"
    },
        {
      "Image": "Shi 7aja1",
      "Title": "Titlte1",
      "Language": "Java1",
      "Link": "sshshhshs"
    },
  ]
  protected readonly title = signal('Portfolio');
  get ShowAll(){
    return this.ShowProjects ? this.Projects : this.Projects.slice(0, 3)
  }
  Clicked(){
    this.ShowProjects = !this.ShowProjects
  }
}
