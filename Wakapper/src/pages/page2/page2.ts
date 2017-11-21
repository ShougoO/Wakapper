import { Component, ViewChild } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  @ViewChild('form') formElement;
  text: string;
  showText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text = navParams.get("text");
    this.showText = this.text;
  }

  postURL(url) {
    this.formElement.method = "POST";
    this.formElement.action = url;
    this.formElement.submit();
  }
}
