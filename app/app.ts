import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {MapaPage} from './pages/mapa/mapa';
import {PostosPage} from './pages/postos/postos';


@Component({
  templateUrl: 'build/pages/menu/menu.html'
})
export class MyApp {

  private rootPage: any; //A pagina que será exibida na tela
  private mapa: any; // Pagina do Mapa
  private postos: any; // Pagina que lista os Postos

  constructor(private platform: Platform) {
    this.mapa = MapaPage;
    this.postos = PostosPage;

    this.rootPage = this.mapa;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  irPara(pagina){
    this.rootPage = pagina;
  }


}

ionicBootstrap(MyApp);
