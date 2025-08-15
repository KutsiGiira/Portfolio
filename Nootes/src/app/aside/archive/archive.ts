import { Component } from '@angular/core';

@Component({
  selector: 'app-archive',
  imports: [],
  templateUrl: './archive.html',
  styleUrl: './archive.css'
})
export class Archive {
  ArchivedNotes: any[] = [];
  ngOnInit(){
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    const ArchiveNotes = localStorage.getItem("archivedNotes");
    console.log(ArchiveNotes);
    if(ArchiveNotes){
      this.ArchivedNotes = JSON.parse(ArchiveNotes);
    }
  }
  }
}
