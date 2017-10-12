import { Component, Input, ViewChild} from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { Page4 } from '../pages/page4/page4';


@Component({
    selector: 'sample-component',
    templateUrl: 'app.html'
})

export class MyApp {
  static text: string;
  showText: string;
  
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = HomePage;
  
  page1: Array<{ title: string, component: any, name: string }>;
  page2: Array<{ title: string, component: any, name: string }>;
  page3: Array<{ title: string, component: any, name: string }>;
  page4: Array<{ title: string, component: any, name: string }>;

  constructor(public platform: Platform) {
    this.initializeApp();
    
    
    // used for an example of ngFor and navigation
    this.page1 = [
        { title: 'Home Page' , component: HomePage, name: 'HomePage' },
        { title: 'Page Two', component: Page2, name: 'Page2' },
        { title: 'Page Three', component: Page3, name: 'Page3' },
        { title: 'Page Four', component: Page4, name: 'Page4' }
    ];

    this.page2 = [
        { title: 'Home Page', component: HomePage, name: 'HomePage' },
        { title: 'Page One', component: Page1, name: 'Page1' },
        { title: 'Page Three', component: Page3, name: 'Page3' },
        { title: 'Page Four', component: Page4, name: 'Page4' }
    ];

    this.page3 = [
        { title: 'Home Page', component: HomePage, name: 'HomePage' },
        { title: 'Page One', component: Page1, name: 'Page1' },
        { title: 'Page Two', component: Page2, name: 'Page2' },
        { title: 'Page Four', component: Page4, name: 'Page4' }
    ];

    this.page4 = [
        { title: 'Home Page', component: HomePage, name: 'HomePage' },
        { title: 'Page One', component: Page1, name: 'Page1' },
        { title: 'Page Two', component: Page2, name: 'Page2' },
        { title: 'Page Three', component: Page3, name: 'Page3' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    MyApp.text = page.name;
    //デバッグ用
    //alert(MyApp.text);

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, { text: page.title });
  }

  loadShowText() {
      this.showText = MyApp.text;
  }
}
