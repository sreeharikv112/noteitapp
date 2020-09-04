import { Component, OnInit } from '@angular/core';
import {Notebook} from "./models/Notebook";
import {NetworkApiService} from "../services/network-api.service";
import {Note} from "./models/note";


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notebooks: Notebook[] = [];
  allNotes: Note[] = [];
  selectedNoteBook : Notebook;
  searchText:string;

  constructor(private apiService:NetworkApiService) {

  }

  ngOnInit(): void {
    this.getAllNotebooks();
    this.getAllNotes();
  }

  public getAllNotebooks(){
    this.apiService.getAllNotebooks().subscribe(
      res => {
            this.notebooks = res;
      },
      error => {
        alert("An error occurred while getting all note book!")
      }
    );
  }

  public getAllNotes(){
    this.selectedNoteBook = null
    this.apiService.getAllNotes().subscribe(
      res => {
        this.allNotes = res;
      },
      error =>{
        alert("An error occurred while getting all notes!")
      }
    );
  }

  createNoteBook() {
    let newNoteBook : Notebook = {
      name: 'New notebook',
      nbOfNotes: 0,
      noteId : 1
    }
    this.apiService.addNoteBook(newNoteBook).subscribe(
      response => {
        //Update the list in UI
        this.notebooks.push(response);
        //Get all notes in the new list
        this.onNoteBookSelected(response);
      },
      err => {
        alert("An error occurred while adding new notebook");
      }
    )
  }

  onNoteBookChanged(updatedNotebook: Notebook) {
    this.apiService.updateNotebook(updatedNotebook).subscribe(
      res => {

      },
      err => {
        alert("An error occurred while updating new notebook");
      }
    )
  }

  onNoteUpdated(note: Note){
    this.apiService.updateNote(note).subscribe(
      res =>{},
      err => {
        alert("An error occurred while updating new note");
      }
    );
  }

  onNoteBookDeleteClicked(notebook: Notebook) {
    if(confirm("Are you sure you want to delete notebook?")){
      this.apiService.deleteNotebook(notebook.noteId).subscribe(
        res => {
          let index = this.notebooks.indexOf(notebook);
          if(index > -1){
            this.notebooks.splice(index, 1);
          }
        },
        err => {
          alert("An error occurred while adding new notebook");
        }
      )
    }
  }

  deleteNote(note: Note) {
    if(confirm("Do you want to delete this note?")){
      this.apiService.deleteNote(note).subscribe(
        res => {
          let index = this.allNotes.indexOf(note);
          this.allNotes.splice(index,1)
        },
        err => {
          alert("An error occurred while adding new Note");
        }
      );
    }
  }

  createNote() {
    let newNote: Note = {
      noteTitle : "Note title",noteDetails : "Note details",
      notebookId : this.selectedNoteBook.noteId,noteId : -1,
      latemodifieddate : ""
    }
    this.apiService.addNewNote(newNote).subscribe(
      updatedNote=> {
          this.allNotes.push(updatedNote);
      },
      err =>{
        alert("An error occurred while adding new Note");
      }
    );

  }

  onNoteBookSelected(notebook: Notebook) {
    this.selectedNoteBook = notebook
    this.apiService.getAllNotesByNotebookId(notebook.noteId).subscribe(
      res => {
        this.allNotes = res;
      },
      err => {
        alert("An error occurred while getting notes for selected notebook");
      }
    );
  }
}
