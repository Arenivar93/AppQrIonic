import { Component } from '@angular/core';
import { DatalocalService } from 'src/app/services/datalocal.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( public dataLocal: DatalocalService) {}

  enviarCorreo() {
    console.log('Enviando correo ...');
    this.dataLocal.enviarCorrero();
  }

  abrirRegistro( registro ) {
    console.log('Registro', registro);
    this.dataLocal.abrirRegistro( registro );
  }

}
