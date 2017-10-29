import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public zoom = 15;
  public opacity = 1.0;
  public width = 5;

  public actualCoords = {
    latitude: null,
    longitude: null
  };

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

    geolocation.getCurrentPosition().then((resp) => {
      this.actualCoords.latitude = resp.coords.latitude;
      this.actualCoords.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }
}
