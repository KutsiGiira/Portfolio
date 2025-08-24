import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
interface Project {
  Image: string;
  Title: string;
  Language: string;
  Link: string
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  Langs:string[] = ["HTML/CSS", "Java", "Javascript", "PHP", "Spring Boot","Node.js", "React", "Angluar", "Tailwind"];
  Social:string[] = ["Github", "Gmail", "LinkedIn"];
  Name:string = "Haytam Boualkhours";
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
  ]
  protected readonly title = signal('Portfolio');

}
