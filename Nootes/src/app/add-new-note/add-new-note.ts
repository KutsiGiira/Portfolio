import { Component, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-new',
  imports: [FormsModule],
  templateUrl: './add-new-note.html',
  styleUrl: './add-new-note.css'
})
export class AddNewNote {
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<{title: string; tages: string; date: string; content: string}>();
  title= ''; tages= ''; date = ''; content = '';
  onClose(){
    this.close.emit()
  }

  onSubmit(){
    const data= {
      title: this.title,
      tages: this.tages,
      date: this.date,
      content: this.content
    };
    this.add.emit(data);
        console.log("Emitted note:", data);
  }
}