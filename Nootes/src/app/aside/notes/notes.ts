import { Component, Input } from '@angular/core';
import { AddNewNote } from "../../add-new-note/add-new-note";
import { loadEnvFile } from 'process';

@Component({
  selector: 'app-notes',
  imports: [AddNewNote],
  templateUrl: './notes.html',
  styleUrl: './notes.css'
})
export class Notes {
selectedNote: any = null;
AddTask = false;
  // Notes= [
  //   {
  //     id:'note 1',
  //     title: 'React Perfomance Optimatization',
  //     tages: 'Dev, React',
  //     date: '28 Oct 2025',
  //     content: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
  //   },
  //   {
  //     id:'note 2',
  //     title: 'japan trip',
  //     tages: 'Travel, Personal',
  //     date: '29 Oct 2025',
  //     content: 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj'
  //   },
  //   {
  //     id:'note 3',
  //     title: 'Fitness Goals 2025',
  //     tages: 'Fitnes, Health',
  //     date: '25 Oct 2025',
  //     content: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFF'
  //   },
  //   {
  //     id:'note 4',
  //     title: 'Reading List',
  //     tages: 'Dev, Personal]',
  //     date: '5 Oct 2025',
  //     content: 'RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR'
  //   }
  // ]

  Notes: any[] = [];
  ngOnInit(){
    const StoredNotes = localStorage.getItem("Notes");
    console.log(StoredNotes)
    if(StoredNotes){
      this.Notes = JSON.parse(StoredNotes);
    }
  }
selectNote(note: any) {
  this.selectedNote = note;
  console.log("d");
  console.log(note)
  }
addNewTaskForm(){
  this.AddTask = true;
  console.log("clicked", this.AddTask)
  }
  closeAddTaskForm() {
    this.AddTask = false;
    console.log("s")
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
  // Remove the note from the array
  this.Notes = this.Notes.filter(note => note.id !== noteId);

  // Save the updated array to localStorage
  localStorage.setItem("Notes", JSON.stringify(this.Notes));

  // Clear selected note if it was deleted
  if (this.selectedNote?.id === noteId) {
    this.selectedNote = null;
    console.log("Selected note cleared");
  }

  console.log("After deletion:", this.Notes);
}

}