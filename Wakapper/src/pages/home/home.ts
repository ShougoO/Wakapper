import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page1 } from '../page1/page1';
import { Page2 } from '../page2/page2';
import { Page3 } from '../page3/page3';
import { Page4 } from '../page4/page4';

import { MyApp } from '../../app/app.component.ts';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {
    }

    onLink(url: string) {
        window.open(url);
    }

    goToPage1() {
        MyApp.text = "Page1";
        this.navCtrl.setRoot(Page1, { text: "Page1" });
    }

    goToPage2() {
        MyApp.text = "Page2";
        this.navCtrl.setRoot(Page2, { text: "Page2" });
    }

    goToPage3() {
        MyApp.text = "Page3";
        this.navCtrl.setRoot(Page3, { text: "Page3" });
    }

    goToPage4() {
        MyApp.text = "Page4";
        this.navCtrl.setRoot(Page4, { text: "Page4" });
    }
}
