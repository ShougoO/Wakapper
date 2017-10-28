import { Component, ViewChild } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  @ViewChild('month') monthElement;
  @ViewChild('content') calendarElement;

  text: string;
  showText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text = navParams.get("text");
    this.showText = this.text;
  }
  ionViewDidLoad() {
    // 現在日を取得し、当月1日の曜日と末日を求めます。
    var now: Date = new Date();
    var prePad: number = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
    var lastDay: number = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

    // カレンダーの月を表示
    var mo = this.monthElement.nativeElement;
    mo.innerHTML += now.getMonth() + "月";

    // TABLE用のstyle
    var sty = "style=\"width: 80%; margin: 5%;\"";

    // カレンダーを出力します。
    var el = this.calendarElement.nativeElement;
    var TABLE = "<TABLE border=\"1\"" + sty + ">";
    var TR = "<TR>";
    var TD1 = "<TD>";
    var TD2 = "</TR>";
    var TABLEEND = "</TABLE>";
    var msg = "";
    //var el = document.getElementById('content');
    //el.innerHTML += "<TABLE border=\"0\" cellspacing=\"0\" cellpadding=\"0\" align=\"left\">";
    //el.innerHTML += "<TR><TD bgcolor=\"#0000ff\" width= \"1\" colspan= \"7\" > </TD></TR>";
    msg += TABLE;

    msg += TR + TD1 + "&nbsp;" + "日</TD>" + TD1 + "&nbsp;" + "月</TD>" + TD1 + "&nbsp;" + "火</TD>"
      + TD1 + "&nbsp;" + "水</TD>" + TD1 + "&nbsp;" + "木</TD>"
      + TD1 + "&nbsp;" + "金</TD>" + TD1 + "&nbsp;" + "土</TD>" + TD2;
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
    }
    msg += TD2 + TABLEEND;
    el.innerHTML += msg;
  }
}
