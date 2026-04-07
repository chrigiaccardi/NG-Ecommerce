import { Injectable,inject } from '@angular/core';
import { HotToastService } from '@ngxpert/hot-toast';

@Injectable({
  providedIn: 'root',
})
  // Questo ToasterService serve per avere un popup che conferma o smentsce una azione.
export class Toaster {
  toaster = inject(HotToastService);

  success(message: string) {
    this.toaster.success(message)
  }
  error(message: string) {
    this.toaster.error(message)
  };
  
}
