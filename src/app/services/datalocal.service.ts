import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { File as ionFile } from '@ionic-native/file/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {

  guardados: Registro[] = [];

  constructor( private storage: Storage,
               private nacCtrl: NavController,
               private inAppBrowser: InAppBrowser,
               private file: ionFile,
               private emailComposer: EmailComposer) {
    /*this.storage.get('registros')
        .then( registros => {
          this.guardados = registros || [];
        });*/
    this.cargarStorage();
  }

  async cargarStorage() {
    this.guardados = (await this.storage.get('registros')) || [];
  }

  async guardarRegistro( format: string, text: string ) {

    await this.cargarStorage();

    const nuevoRegistro = new Registro( format, text );
    this.guardados.unshift( nuevoRegistro );

    console.log(this.guardados);
    this.storage.set('registros', this.guardados );

    this.nacCtrl.navigateForward('/tabs/tabs2');
    this.abrirRegistro( nuevoRegistro );
  }

  abrirRegistro( registro: Registro ) {
    this.nacCtrl.navigateForward('/tabs/tab2');

    switch ( registro.type ) {
      case 'http':
        this.inAppBrowser.create( registro.text, '_system' );
      break;

      case 'geo':
        console.log("entra");
        this.nacCtrl.navigateForward(`/tabs/tab2/mapa/${ registro.text }`);
      break;
    }

  }
  enviarCorrero() {

    const arrTemp = [];
    const titulos = 'Tipo, Formato, Creado en, Texto\n';

    arrTemp.push( titulos );

    this.guardados.forEach ( registro => {
      const linea = `${ registro.type }, ${ registro.format },
                     ${registro.created}, ${ registro.text.replace(',', ' ') }\n`;

      arrTemp.push( linea );

    });

    this.crearArchivoFisico( arrTemp.join(''));

  }

  crearArchivoFisico( text: string ) {
    this.file.checkFile( this.file.dataDirectory, 'registros.csv')
        .then( existe => {
          console.log('Existe archivo?', existe);
          return this.escribirEnArchivo( text );
        })
        .catch( err => {
          return this.file.createFile( this.file.dataDirectory, 'registros.csv', false)
                 .then( creado => this.escribirEnArchivo(text))
                 .catch( err2 => console.log('No se pudo crear archivo', err2));
        });
  }
  async escribirEnArchivo( text: string ) {

    await this.file.writeExistingFile(this.file.dataDirectory, 'registros.csv', text);

    const archivo = `${this.file.dataDirectory}registros.csv`;
    // console.log(this.file.dataDirectory + '/Archivo creado');

    const email = {
      to: 'chusventura95@gmail.com',
      // cc: 'erika@mustermann.de',
      // bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        archivo
      ],
      subject: 'Backup de scans',
      body: 'Prueba envio correo ionic',
      isHtml: true
    };

    this.emailComposer.open(email);

  }
}
