import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../models/note";

@Component({
  selector: 'app-customnoteui',
  templateUrl: './customnoteui.component.html',
  styleUrls: ['./customnoteui.component.scss']
})


export class CustomnoteuiComponent implements OnInit {

  @Input() note: Note;
  @Output() noteUpdated : EventEmitter<Note> = new EventEmitter<Note>();
  @Output() noteDeleted : EventEmitter<Note> = new EventEmitter<Note>();

  constructor() { }

  ngOnInit(): void {
  }

  onNoteUpdated(){
    this.noteUpdated.emit(this.note);
  }

  deleteNote(){
    this.noteDeleted.emit(this.note);
  }
}
