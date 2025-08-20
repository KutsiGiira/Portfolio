import { Component, Input} from '@angular/core';
import { AddNewNote } from "../../add-new-note/add-new-note";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  imports: [AddNewNote, FormsModule],
  templateUrl: './notes.html',
  styleUrl: './notes.css'
})
export class Notes {
selectedNote: any = null;
AddTask = false;
archivedNotes: any[] = [];
Notes: any[] = [];
search!: string;
filteredNotes: any[] = []

  ngOnInit(){
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const StoredNotes = localStorage.getItem("Notes");
      this.archivedNotes = JSON.parse(localStorage.getItem('archivedNotes') || '[]');
      if(StoredNotes){
      this.Notes = JSON.parse(StoredNotes);
      this.filteredNotes = [...this.Notes]
        
      }
    }
  }
  filterNotes(){
    const trim = this.search.toLowerCase().trim();
    if(!trim){
      this.filteredNotes = [...this.Notes];
      return;
    }
    console.log(this.Notes)
    this.filteredNotes = this.Notes.filter(note =>
      note.title.toLowerCase().includes(trim) ||
      note.content.toLowerCase().includes(trim) ||
      note.tages.toLowerCase().includes(trim)
    );
} 
  selectNote(note: any) {
    this.selectedNote = note;
  }

  addNewTaskForm(){
    this.AddTask = true;
  }

  closeAddTaskForm() {
    this.AddTask = false;
  }

  AddNewNote(addNote: {title: string, tages: string, date: string, content: string}){
    this.Notes.push({
      id: new Date().getTime().toString(),
      title: addNote.title,
      tages: addNote.tages,
      date: addNote.date,
      content: addNote.content
    })
    localStorage.setItem("Notes", JSON.stringify(this.Notes));
  }

    deleteNote(noteId: string) {
      this.Notes = this.Notes.filter(note => note.id !== noteId);
      localStorage.setItem("Notes", JSON.stringify(this.Notes));
      if (this.selectedNote?.id === noteId) {
      this.selectedNote = null;
    }
}

    archiveNote(noteId: string) {
      if (!this.selectedNote || this.selectedNote.id !== noteId) return;
      if(this.archivedNotes.some(a => a.id === this.selectedNote.id)){
    }
      else{
      this.archivedNotes.push(this.selectedNote);
      localStorage.setItem('archivedNotes', JSON.stringify(this.archivedNotes));
    }
  }
  Clear(){
    localStorage.clear();
  }
}

//b9aw lik ha tags displayihum tahuma w styling w ha nta saliti
//la biti trj3ha resp mzyan 3la wdit tel(bdel design kamlo)