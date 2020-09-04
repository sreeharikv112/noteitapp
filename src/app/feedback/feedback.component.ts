import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {NetworkApiService} from "../services/network-api.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  model: FeedbackViewModel = {
    name: '',
    email: '',
    feedback: ''
  };

  constructor(private apiService:NetworkApiService) {


  }

  ngOnInit(): void {
  }

  sendFeedback(form: NgForm):void{
    this.apiService.postFeedback(this.model).subscribe(
      res => {
        form.reset();
        alert("Thanks for your Feedback")
      },
      err => {
        alert("An error occurred while sending feedback");
      }
    )
  }
}

export interface FeedbackViewModel{
  name:String,
  email:String,
  feedback:String
}
