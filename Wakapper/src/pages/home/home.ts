import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page1 } from '../page1/page1';
import { Page2 } from '../page2/page2';
import { Page3 } from '../page3/page3';
import { Page4 } from '../page4/page4';

import { MyApp } from '../../app/app.component.ts';

import { DataService } from '../../app/data.service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    page: any;

    constructor(public navCtrl: NavController, private dataService: DataService) {
    }

    onLink(url: string) {
        window.open(url);
    }

    goToPage1() {
        MyApp.text = "Page1";
        this.dataService.sendSampleText("Page01");
    }

    goToPage2() {
        MyApp.text = "Page2";
        this.dataService.sendSampleText("Page02");
    }

    goToPage3() {
        MyApp.text = "Page3";
        this.dataService.sendSampleText("Page03");
    }

    goToPage4() {
        MyApp.text = "Page4";
        this.dataService.sendSampleText("Page04");
    }
}
