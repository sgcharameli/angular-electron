import { Component } from '@angular/core';

import { environment } from '../environments/environment';
import { ElectronService } from 'src/app/core/services/electron/electron.service'

// import * as childProcess from 'child_process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'a3d';

  constructor(private electronService: ElectronService) {
    console.log('AppComponent - AppConfig', environment);
    console.log('AppComponent - isElectron', electronService.isElectron);
    console.log('AppComponent - childProcess', electronService.childProcess);
  }

  onClick(): void {

    console.log('onClick(): childProcess');

    /*
  onClick() {
    console.log('onClick(): childProcess', childProcess);
    childProcess.exec('ls -l', (err, stdout, stderr) => {
      console.error('error: ', err);
      console.log('stdout: ', stdout);
      console.log('stderr: ', stderr);
    });
  }
    */

  }

}
