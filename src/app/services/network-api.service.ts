import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Notebook} from "../notes/models/Notebook";
import {FeedbackViewModel} from "../feedback/feedback.component";
import {__param} from "tslib";
import {Note} from "../notes/models/Note";

@Injectable({
  providedIn: 'root'
})
export class NetworkApiService {

  private BASE_URL = "http://localhost:8080/api/";
  private ALL_NOTE_BOOK = `${this.BASE_URL}\\getallnotebooks`;
  private SEND_FEEDBACK = `${this.BASE_URL}\\feedback`;
  private ADD_NOTE_BOOK = `${this.BASE_URL}\\addnotebook`;
  private UPDATE_NOTE_BOOK = `${this.BASE_URL}\\updatenotebook`;
  private DELETE_NOTE_BOOK = `${this.BASE_URL}deletenotebook`;
  private ALL_NOTES_BYID = `${this.BASE_URL}\\getallnotesbyid`;
  private ALL_NOTES = `${this.BASE_URL}\\getallnotes`;
  private ADD_NEW_NOTE = `${this.BASE_URL}\\addnote`;
  private UPDATE_NOTE = `${this.BASE_URL}\\updatenote`;
  private DELETE_NOTE = `${this.BASE_URL}deletenote`;

  constructor(private http:HttpClient) {}

  getAllNotebooks() : Observable<Notebook[]> {
    return this.http.get<Notebook[]>(this.ALL_NOTE_BOOK)
  }

  postFeedback(feedback:FeedbackViewModel): Observable<any>{
    return this.http.post(this.SEND_FEEDBACK,feedback);
  }

  addNoteBook(notebook:Notebook): Observable<Notebook>{
    return this.http.post<Notebook>(this.ADD_NOTE_BOOK,notebook);
  }

  updateNotebook(notebook:Notebook): Observable<Notebook> {
    return this.http.put<Notebook>(this.UPDATE_NOTE_BOOK, notebook);
  }

  deleteNotebook(notebookId:number): Observable<any> {
    let url = this.DELETE_NOTE_BOOK + "?noteId=" +notebookId.toString();
    return this.http.delete(url);
  }

  getAllNotesByNotebookId(notebookId:number): Observable<Note[]>{
    return this.http.get<Note[]>(this.ALL_NOTES_BYID+ "?id=" +notebookId.toString());
  }

  getAllNotes():Observable<Note[]>{
    return this.http.get<Note[]>(this.ALL_NOTES);
  }

  addNewNote(note: Note): Observable<Note>{
    return this.http.post<Note>(this.ADD_NEW_NOTE,note);
  }

  updateNote(note:Note):Observable<any>{
    return this.http.put<any>(this.UPDATE_NOTE,note);
  }

  deleteNote(noteId: Note):Observable<boolean>{
    let url = this.DELETE_NOTE + "?noteId=" +noteId.notebookId.toString();
    return this.http.delete<boolean>(url);
  }
}
