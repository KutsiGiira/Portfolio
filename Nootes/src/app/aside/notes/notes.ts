import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  imports: [],
  templateUrl: './notes.html',
  styleUrl: './notes.css'
})
export class Notes {
selectedNote: any = null;
  Notes= [
    {
      id:'note 1',
      title: 'React Perfomance Optimatization',
      tages: 'Dev, React',
      date: '28 Oct 2025',
      content: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
    },
    {
      id:'note 2',
      title: 'japan trip',
      tages: 'Travel, Personal',
      date: '29 Oct 2025',
      content: 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj'
    },
    {
      id:'note 3',
      title: 'Fitness Goals 2025',
      tages: 'Fitnes, Health',
      date: '25 Oct 2025',
      content: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFF'
    },
    {
      id:'note 4',
      title: 'Reading List',
      tages: 'Dev, Personal]',
      date: '5 Oct 2025',
      content: 'RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR'
    }
  ]
  get AllNotes(){
    return this.Notes
  }
selectNote(note: any) {
  this.selectedNote = note;
}
}