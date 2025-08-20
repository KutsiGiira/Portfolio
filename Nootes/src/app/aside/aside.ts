import { Component } from '@angular/core';
import { Notes } from "./notes/notes";
import { Archive } from "./archive/archive";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [Notes, Archive, MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, RouterOutlet,RouterLink, RouterModule],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class Aside {
tages:string[] = [];
    ngOnInit(){
      const storeAllNotes = localStorage.getItem("Notes");
      if(storeAllNotes){
      const AllNotes = JSON.parse(storeAllNotes);
      this.tages = AllNotes.flatMap((t:any) => t.tages || []);
      this.tages = Array.from(new Set(this.tages))
      }
  }
} 