import { Component } from '@angular/core';
import { Notes } from "./notes/notes";
import { Archive } from "./archive/archive";
@Component({
  selector: 'app-aside',
  imports: [Notes, Archive],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class Aside {
     logoPic = 'assets/f.png';
     //9ad tswira d logo w navigation
}
