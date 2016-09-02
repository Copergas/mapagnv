import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {MapaPage} from './pages/mapa/mapa';


@Component({
  templateUrl: 'build/pages/menu/menu.html'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = MapaPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
// import { Component } from '@angular/core';
// import { ionicBootstrap, Platform } from 'ionic-angular';
// import { StatusBar } from 'ionic-native';
// import { MapaPage } from './pages/mapa/mapa';
//
// @Component({
//   templateUrl: 'build/pages/menu/menu.html'
// })
// export class MyApp {
//   private rootPage: any ;
//
//   constructor(public platform: Platform) {
//     this.rootPage = MapaPage;
//     platform.ready().then(() => {
//       // Okay, so the platform is ready and our plugins are available.
//       // Here you can do any higher level native things you might need.
//       StatusBar.styleDefault();
//     });
//   }
// }
//
// ionicBootstrap(MyApp);
