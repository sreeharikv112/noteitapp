import { Pipe, PipeTransform } from '@angular/core';
import {Note} from "../notes/models/note";

@Pipe({
  name: 'noteTextFilterPipe'
})
export class NoteTextFilterPipePipe implements PipeTransform {

  transform(notes: Note[], text:string): Note[] {
    if(text == null || text ===""){
      return notes;
    }
    return notes.filter( n => n.noteTitle.toLowerCase().includes(text.toLowerCase()) || n.noteDetails.toLowerCase().includes(text.toLowerCase()));
  }
}
