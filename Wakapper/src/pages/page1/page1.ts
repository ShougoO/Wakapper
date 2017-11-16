import { Component, ViewChild } from '@angular/core';
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

declare var google;

@Component({
    selector: 'page-page1',
    templateUrl: 'page1.html'
})
export class Page1 {
    @ViewChild("map") mapChild;
    map: GoogleMap;
    mapElement: HTMLElement;

    lat: number;
    lng: number;

    text: string;
    showText: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
        this.text = navParams.get("text");
        this.lat = navParams.get("lat");
        this.lng = navParams.get("lng");
        this.showText = this.text;
    }

    ionViewDidLoad() {
        this.loadMap();
    }

    loadMap() {
        this.map = new google.maps.Map(this.mapChild.nativeElement, {
            zoom: 12,
            center: { lat: 33.9, lng: 130.8 }
        });
        
        // Wait the MAP_READY before using any methods.
        var marker = new google.maps.Marker({
            position: {
                lat: 33.902264,
                lng: 130.814437
            },
            map: this.map,
            title: 'Ionic'
        });

        /*
        this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
           alert('Map is ready!');
     
           // Now you can use all methods safely.
           this.map.addMarker({
             title: 'Ionic',
             icon: 'blue',
             animation: 'DROP',
             position: {
                 lat: 33.902264,
                 lng: 130.814437
             }
           }).then(marker => {
             marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
               alert('clicked');
             });
           });
         });
        */
     }
 }

/*import {GoogleMapsMarker, GoogleMapsMarkerOptions} from 'ionic-native';
 
export class MapComponent {
    private marker: GoogleMapsMarker;   //保持するための変数を宣言
 
    constructor() {
        GoogleMap.isAvailable().then(() => {
            this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
                let myPosition = new GoogleMapsLatLng('34.6687443', '135.4876302');
                this.map.setCenter(myPosition);
                this.map.setZoom(15);
 
                //マーカーを設置します。
                this.map.addMarker({
                    position: myPosition    //GoogleMapsLatLng 型で緯度経度を指定します。
                }).then((marker)=>{
                    this.marker = marker;   //this.marker に保持
                });
            });
        });
    }
}
*/
