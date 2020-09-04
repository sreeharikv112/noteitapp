"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackComponent = void 0;
var core_1 = require("@angular/core");
var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(http) {
        this.http = http;
        this.model = {
            name: '',
            email: '',
            feedback: ''
        };
    }
    FeedbackComponent.prototype.ngOnInit = function () {
    };
    FeedbackComponent.prototype.sendFeedback = function (form) {
        var url = "http://localhost:8080/api/feedback";
        this.http.post(url, this.model).subscribe(function (res) {
            form.reset();
            alert("Thanks for your Feedback");
        }, function (err) {
            alert("An error occured while sending feedback");
        });
    };
    FeedbackComponent = __decorate([
        core_1.Component({
            selector: 'app-feedback',
            templateUrl: './feedback.component.html',
            styleUrls: ['./feedback.component.scss']
        })
    ], FeedbackComponent);
    return FeedbackComponent;
}());
exports.FeedbackComponent = FeedbackComponent;
