import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {

  guardados: Registro[] = [];

  constructor( private storage: Storage ) {
    /*this.storage.get('registros')
        .then( registros => {
          this.guardados = registros || [];
        });*/
    this.cargarStorage();
  }

  async cargarStorage() {
    this.guardados = (await this.storage.get('registros')) || [];
  }

  guardarRegistro( format: string, text: string ) {
    const nuevoRegistro = new Registro( format, text );
    this.guardados.unshift( nuevoRegistro );

    console.log(this.guardados);
    this.storage.set('registros', this.guardados );
  }
}
