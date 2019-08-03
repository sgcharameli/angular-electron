import { Injectable } from '@angular/core';


// CONDITIONAL IMPORT PARA CARGARLO DESDE EL BROWSER

// import * as childProcess from 'child_process';


@Injectable({
  providedIn: 'root'
})

export class ElectronService {

  // childProcess: typeof childProcess;
  childProcess;

  constructor() {
    console.log('isElectron: ', this.isElectron);
    if (this.isElectron) {
      this.childProcess = window.require('child_process');
      console.log('childProcess: ', this.childProcess);
    }
  }


  get isElectron() {
    return window && window.process && window.process.type;
  }

}
