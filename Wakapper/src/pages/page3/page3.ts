import { Component, ViewChild } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  @ViewChild('content') calendarElement;

  text: string;
  showText: string;
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text = navParams.get("text");
    this.showText = this.text;

      // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  ionViewDidLoad() {
    // 現在日を取得し、当月1日の曜日と末日を求めます。
    var now: Date = new Date();
    var prePad: number = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
    var lastDay: number = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

    // カレンダーを出力します。
    var el = this.calendarElement.nativeElement;
    var TABLE = "<TABLE border=\"0\" cellspacing=\"0\" cellpadding=\"0\" align=\"left\">" + "<TR><TD bgcolor=\"#0000ff\" width= \"1\" colspan= \"7\" > </TD></TR>";
    var TR = "<TR>";
    var TD1 = "<TD bgcolor=\"#0000ff\" width=\"1\" height=\"1\"></TD><TD>";
    var TD2 = "<TD bgcolor=\"#0000ff\" width=\"1\" height=\"1\"></TD></TR><TR><TD bgcolor=\"#0000ff\" width=\"1\" colspan=\"7\" > </TD> </TR>";
    var TABLEEND = "</TABLE>";
    var msg = "";
    //var el = document.getElementById('content');
    //el.innerHTML += "<TABLE border=\"0\" cellspacing=\"0\" cellpadding=\"0\" align=\"left\">";
    //el.innerHTML += "<TR><TD bgcolor=\"#0000ff\" width= \"1\" colspan= \"7\" > </TD></TR>";
    msg += TABLE;
    
    for (var curDay: number = -prePad + 1; curDay <= lastDay; curDay++) {
      if ((prePad + curDay) % 7 == 1) {
        msg += TR;
      }
      // 半角スペース1つ出力します。curDayが負の時はさらに2つ出力します。
      msg += TD1 + "&nbsp;" + (curDay < 1 ? "&nbsp;&nbsp;" :
        // curDayが正の時です。1桁なら半角スペースを1つ出力します。そして日付を出力します。
        (curDay < 10 ? "&nbsp;" : "") + curDay.toString() + "</TD>" +
        // 土曜日を出力したら、改行タグを入れます。
        //(((prePad + curDay) % 7 == 0) ? "<br/>" : ""));
        (((prePad + curDay) % 7 == 0) ? TD2 : ""));
      alert('aaa');
    }
    msg += TD2 + TABLEEND;
    alert('bbb');
    el.innerHTML += msg;
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page3, {
      item: item
    });
  }
}
