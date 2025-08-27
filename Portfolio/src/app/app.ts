import { Component, signal } from '@angular/core';

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
      "Link": "https://mail.google.com/mail/?view=cm&fs=1&to=haytamboualkhours@gmail.com"
    },
    {"Platform": "LinkedIn",
      "Link": "https://www.linkedin.com/in/haytam-boualkhours/"
    },
  ];
  Name:string = "Haytam Boualkhours";
  ShowProjects: boolean = false;
  Projects:Project[] = [
    {
      "Image": "assets/nootes.jpg",
      "Title": "Note-taking web app",
      "Language": "Angular - Tailwind",
      "Link": "https://github.com/KutsiGiira/Portfolio/tree/main/Nootes"
    },
        {
      "Image": "assets/UserWebCar.JPG",
      "Title": "Car Rental web app",
      "Language": "Spring Boot - React - MySQL",
      "Link": "https://github.com/KutsiGiira/Portfolio/tree/main/Car%20Rent"
    },
        {
      "Image": "assets/restaurant.JPG",
      "Title": "Restaurant Landing Page",
      "Language": "React",
      "Link": "https://github.com/KutsiGiira/Portfolio/tree/main/landing-mvp"
    },
    //     {
    //   "Image": "assets/nootes.jpg",
    //   "Title": "Titlte",
    //   "Language": "Java Javascript PHP",
    //   "Link": "sshshhshs"
    // },
    //     {
    //   "Image": "assets/nootes.jpg",
    //   "Title": "Titlte1",
    //   "Language": "Java1",
    //   "Link": "sshshhshs"
    // },
    //     {
    //   "Image": "assets/nootes.jpg",
    //   "Title": "Titlte1",
    //   "Language": "Java1",
    //   "Link": "sshshhshs"
    // },
  ]
  protected readonly title = signal('Portfolio');
  get ShowAll(){
    return this.ShowProjects ? this.Projects : this.Projects.slice(0, 3)
  }
    form = { name: '', email: '', subject: '',};
  Clicked(){
    this.ShowProjects = !this.ShowProjects
  }
  openEmail() {
  window.location.href = "mailto:haytamboualkhours@gmail.com";
}
}
