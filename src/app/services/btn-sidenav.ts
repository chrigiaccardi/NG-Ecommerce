import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BtnSidenav {
    // apertura e chiusura della sidenav
  sidenavAperta = false

  toggleSidenav() {
    this.sidenavAperta = !this.sidenavAperta;
  }
}
