import { Component, inject } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from "@angular/router";
import { MatBadgeModule } from '@angular/material/badge';
import { EcommerceStore } from '../../ecommerce-store';
import { MatMenuModule } from '@angular/material/menu';
import { MatDivider } from "@angular/material/divider";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog"
import { SignIn } from '../sign-in/sign-in';
import { SignUp } from '../sign-up/sign-up';

@Component({
  selector: 'app-azioni-header',
  imports: [MatButtonModule, MatIconModule, MatIconButton, RouterLink, MatBadgeModule, MatMenuModule, MatDivider],
  templateUrl: './azioni-header.html',
  styleUrl: './azioni-header.css',
})
export class AzioniHeader {
  // iniettiamo lo store per poterlo utilizzare
  store = inject(EcommerceStore);

  // iniettiamo dialogRef per poter utilizzre id di riferimento
  dialogRef = inject(MatDialogRef)

    // iniettiamo MatDialog per manipolare il Dialog
  matDialog = inject(MatDialog)

  // iniettiamo la proprietà data, MAT_DIALOG_DATA è un injection token, this.data,checkout sarà true o false a sceonda di dove è 
  // stato aperto il dialog.
  data = inject<{ checkout: boolean }>(MAT_DIALOG_DATA);

  // creiamo un metodo per poter aprire il dialog per loggarsi
    apriSignInDialog() {
      this.dialogRef.close();
      this.matDialog.open(SignIn, {
        disableClose: true,
        data: {
          checkout: this.data.checkout
        }
      });
  
  };

  // metodo apriSignUpDialog per aprire il dialog per effettuare la registrazione al sito
    // dialogRef che sarebbe quello per il signIn si chiude e si apre quello per il sign UP
    apriSignUpDialog() {
      this.dialogRef.close()
      this.matDialog.open(SignUp, {
        disableClose: true,
        data: {
          checkout: this.data.checkout
        }
      })
    }
}
