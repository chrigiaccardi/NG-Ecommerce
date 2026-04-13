import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog"
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule, MatPrefix, MatSuffix } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignInParams, SignUpParams } from '../../models/user';
import { EcommerceStore } from '../../ecommerce-store';
import { MatBadge } from "@angular/material/badge";
import { SignIn } from '../sign-in/sign-in';
import Checkout from '../../pages/checkout/checkout';

@Component({
  selector: 'app-sign-up',
  imports: [MatButtonModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatPrefix, MatSuffix, MatInputModule, ReactiveFormsModule,],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  // iniettiamo lo store per poterlo utilizzare
  store = inject(EcommerceStore)

  // iniettiamo dialogRef per poter utilizzre id di riferimento
  dialogRef = inject(MatDialogRef)

    // iniettiamo MatDialog per manipolare il Dialog
  matDialog = inject(MatDialog)

  // iniettiamo la proprietà data, MAT_DIALOG_DATA è un injection token, this.data,checkout sarà true o false a sceonda di dove è 
  // stato aperto il dialog.
  data = inject<{ checkout: boolean }>(MAT_DIALOG_DATA);

  // utilizziamo un NonNullableFormBuilder al posto di un classico FormBuilder per non dichiarare in continuazione che i valori
  // potrebbero ? essere anche null -> |null e automaticamente al posto di dichiarare al reset del form i valori da riportare
  // lui in automatico li riporta a quelli iniziali.
  formBuilder = inject(NonNullableFormBuilder);

  // dichiariamo che il form signUp è un formBuilder con determinati campi. Mail, PW, nome e la conferma PW sono messi così di default per test.
  // Validators controlla che il campo sia valido e required obbligatorio.
  signUpForm = this.formBuilder.group({
    name: ['Christian Giaccardi', Validators.required],
    email: ['chrisg@test.com', Validators.required],
    password: ['test1234', Validators.required],
    confermaPassword: ['test1234', Validators.required],
  })

  // creiamo il signal per la password che sia visibile o no
  passwordVisibile = signal(false)
  passwordVisibileCP = signal(false)

  // creiamo il metodo per effettuare la registrazione dell'account
  signUp() {
    if (!this.signUpForm.valid) {
      this.signUpForm.markAllAsTouched();
      return;
    }
    const { name, email, password } = this.signUpForm.value;

    this.store.signUp({name, email, password , dialogId: this.dialogRef.id, checkout: this.data.checkout} as SignUpParams)
  };

  // creiamo un metodo per poter aprire il dialog per loggarsi
  apriSignInDialog() {
    this.dialogRef.close();
    this.matDialog.open(SignIn, {
      disableClose: true,
      data: {
        checkout: this.data.checkout
      }
    });

  }

}
