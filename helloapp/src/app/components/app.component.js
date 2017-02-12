"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var simple_service_1 = require("../servicies/simple.service");
var AppComponent = (function () {
    function AppComponent(simpleService) {
        this.simpleService = simpleService;
        this.title = "hello, Pasha";
        this.items = [{ name: "item1" }, { name: "item2" }];
        this.input = "";
    }
    AppComponent.prototype.click = function (value) {
        this.simpleService.field = value;
    };
    AppComponent.prototype.printOut = function (value) {
        console.log(value);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: '../app.component.html',
            styleUrls: ['../app.component.css'],
            providers: [simple_service_1.SimpleService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
