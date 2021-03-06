var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
/**
 * Generated class for the AboutComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var AboutComponent = (function () {
    function AboutComponent(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    //
    AboutComponent.prototype.about = function (myEvent) {
        var popover = this.popoverCtrl.create('PopoverPage');
        popover.present({
            ev: myEvent
        });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Component({
        selector: 'about',
        templateUrl: 'about.html'
    }),
    __metadata("design:paramtypes", [PopoverController])
], AboutComponent);
export { AboutComponent };
//# sourceMappingURL=about.js.map