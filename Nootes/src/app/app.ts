import { Component, signal } from '@angular/core';
import { Aside } from "./aside/aside";
import { MatSidenavContent } from "@angular/material/sidenav";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";
@Component({
  selector: 'app-root',
    imports: [MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, RouterLink, RouterModule, Aside],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Nootes');
}
