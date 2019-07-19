import { Component } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DatalocalService } from '../../services/datalocal.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  swiperOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor( private barcodeScanner: BarcodeScanner,
               private dataLocal: DatalocalService ) {}

  ionViewDidEnter() {
    // console.log('ionViewDidEnter');
  }
  ionViewDidLeave() {
    // console.log('ionViewDidLeave');
  }
  ionViewWillEnter() {
    this.scan();
    // console.log('ionViewWillEnter');
  }
  ionViewWillLeave() {
    // console.log('ionViewWillLeave');
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);

      if ( !barcodeData.cancelled ) {
        this.dataLocal.guardarRegistro( barcodeData.format, barcodeData.text );
      }
     }).catch(err => {
         console.log('Error', err);
         this.dataLocal.guardarRegistro( 'QRCode', 'https://fernando-herrera.com' );
     });
  }
}
