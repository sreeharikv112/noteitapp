"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkApiService = void 0;
var core_1 = require("@angular/core");
var NetworkApiService = /** @class */ (function () {
    function NetworkApiService(http) {
        this.http = http;
        this.BASE_URL = "http://localhost:8080/api/";
        this.ALL_NOTE_BOOK = this.BASE_URL + "\\getallnotebooks";
        this.SEND_FEEDBACK = this.BASE_URL + "\\feedback";
    }
    NetworkApiService.prototype.getAllNotebooks = function () {
        return this.http.get(this.ALL_NOTE_BOOK);
    };
    NetworkApiService.prototype.postFeedback = function (feedback) {
        return this.http.post(this.SEND_FEEDBACK, feedback);
    };
    NetworkApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], NetworkApiService);
    return NetworkApiService;
}());
exports.NetworkApiService = NetworkApiService;
