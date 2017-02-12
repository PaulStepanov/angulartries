"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SimpleService = (function () {
    function SimpleService() {
        this._field = "value";
    }
    Object.defineProperty(SimpleService.prototype, "field", {
        get: function () {
            return this._field;
        },
        set: function (value) {
            this._field = value;
            console.log(value);
        },
        enumerable: true,
        configurable: true
    });
    SimpleService = __decorate([
        core_1.Injectable()
    ], SimpleService);
    return SimpleService;
}());
exports.SimpleService = SimpleService;
