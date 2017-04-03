"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
require("rxjs/Rx");
var SpecialityService = (function () {
    function SpecialityService(http) {
        this.http = http;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        this.specialityURL = "http://localhost:8080/api/speciality";
    }
    SpecialityService.prototype.create = function (speciality) {
        console.log(speciality);
        return this.http.post(this.specialityURL, JSON.stringify(speciality), { headers: this.headers }).toPromise().then(function (response) { return response.json().data; }).catch(this.handleError);
    };
    SpecialityService.prototype.update = function (speciality) {
        var url = this.specialityURL + '/' + speciality.id;
        return this.http.put(url, JSON.stringify(speciality), { headers: this.headers }).toPromise().then(function () { return speciality; }).catch(this.handleError);
    };
    SpecialityService.prototype.delete = function (id) {
        var url = this.specialityURL + '/' + id;
        return this.http.delete(url, { headers: this.headers }).toPromise().then(function () { return null; }).catch(this.handleError);
    };
    SpecialityService.prototype.getAll = function () {
        return this.http.get(this.specialityURL).toPromise().then(function (response) { return response.json().data; }).catch(this.handleError);
    };
    SpecialityService.prototype.getById = function (id) {
        var url = this.specialityURL + '/' + id;
        return this.http.get(url).toPromise().then(function (response) { return response.json().data; }).catch(this.handleError);
    };
    SpecialityService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    SpecialityService = __decorate([
        core_1.Injectable()
    ], SpecialityService);
    return SpecialityService;
}());
exports.SpecialityService = SpecialityService;
