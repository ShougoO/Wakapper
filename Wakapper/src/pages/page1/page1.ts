import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  map: GoogleMap;
  mapElement: HTMLElement;
  lat: number;
  lng: number;

  text: string;
  showText: string;
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
    this.text = navParams.get("text");
    this.lat = navParams.get("lat");
    this.lng = navParams.get("lng");
    alert(this.lat);
    alert(this.lng);
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

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap() {
    this.mapElement = document.getElementById('map_canvas');
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.lat,
          lng: this.lng
        },
        zoom: 18,
        tilt: 30
      }
    };
    this.map = this.googleMaps.create(this.mapElement, mapOptions);
    alert('created');

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      alert('Map is ready!');

      // Now you can use all methods safely.
      this.map.addMarker({
        title: 'Ionic',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 43.0741904,
          lng: -89.3809802
        }
      }).then(marker => {
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          alert('clicked');
        });
      });
    });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page1, {
      item: item
    });
  }
}
