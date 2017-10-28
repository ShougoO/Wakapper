import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html'
})

export class Page4 {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  //表示する文字列
  title: string[];
  note: string[];

  //交通手段
  traffic: string[];
  //駅
  train: string[];
  //バス停
  bus: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('title');
    if (this.selectedItem == undefined) {
      this.selectedItem = '運行表'
    }

    this.traffic = ['渡船','電車','バス'];
    this.train = ['若松駅', '奥洞海駅', '藤ノ木駅', '二島駅'];
    this.bus = ['バス停1', 'バス停2', 'バス停3', 'バス停4'];

    

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    
    this.title = this.traffic;
    if (this.selectedItem == this.traffic[0]) {
      //時刻表ファイルを読み込む
      //テスト用のやつ
      this.title = [`上り`, ` 8:30`, ` 9:45`, ` 10:30`, ` 11:30`, `下り`, ` 8:30`, ` 9:45`, ` 10:30`, ` 11:30`];
    }
    if (this.selectedItem == this.traffic[1]) {
      this.title = this.train;
    }
    if (this.selectedItem == this.traffic[2]) {
      this.title = this.bus;
    }

    for (let i = 0; i < this.train.length; i++) {
      if (this.selectedItem == this.train[i]) {
        //時刻表ファイルを読み込む
        //テスト用のやつ
        this.title = [`上り`, ` 8:30`, ` 9:45`, ` 10:30`, ` 11:30`, `下り`, ` 8:30`, ` 9:45`, ` 10:30`, ` 11:30`];
      }
    }

    for (let i = 0; i < this.bus.length; i++) {
      if (this.selectedItem == this.bus[i]) {
        //時刻表ファイルを読み込む
        //テスト用のやつ
        this.title = [`上り`, ` 8:30`, ` 9:45`, ` 10:30`, ` 11:30`, `下り`, ` 8:30`, ` 9:45`, ` 10:30`, ` 11:30`];
      }
    }


    this.items = [];
    for (let i = 0; i < this.title.length; i++) {
      this.items.push({
        title: this.title[i],
        note: '',
        icon: '',
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page4, {title: item});
  }
}
