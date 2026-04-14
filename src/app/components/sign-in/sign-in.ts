import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog"
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule, MatPrefix, MatSuffix } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignInParams } from '../../models/user';
import { EcommerceStore } from '../../ecommerce-store';
import { SignUp } from '../sign-up/sign-up';




@Component({
  selector: 'app-sign-in',
  imports: [MatButtonModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatPrefix, MatSuffix, MatInputModule, ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  // utilizziamo un NonNullableFormBuilder al posto di un classico FormBuilder per non dichiarare in continuazione che i valori
  // potrebbero ? essere anche null -> |null e automaticamente al posto di dichiarare al reset del form i valori da riportare
  // lui in automatico li riporta a quelli iniziali.
  formBuilder = inject(NonNullableFormBuilder);

  // iniettiamo store per utilizzare i metodi
  store = inject(EcommerceStore);

  // iniettiamo la proprietà data, MAT_DIALOG_DATA è un injection token, this.data,checkout sarà true o false a sceonda di dove è 
  // stato aperto il dialog.
  data = inject<{ checkout: boolean }>(MAT_DIALOG_DATA);
  
  // iniettiamo MatDialogRef che gestisce e controlla il Dialog
  dialogRef = inject(MatDialogRef)

  // iniettiamo MatDialog per manipolare il Dialog
  matDialog = inject(MatDialog)

  // dichiariamo che il form signIN è un formBuilder con determinati campi. Mail e PW sono messi così di default per test.
  // Validators controlla che il campo sia valido e required obbligatorio.
  signInForm = this.formBuilder.group({
    email: ['chrisg@test.com', Validators.required],
    password: ['test1234', Validators.required]
  })

  // creiamo il signal per la password che sia visibile o no
  passwordVisibile = signal(false)

  // metodo SignIn per convalidare l'accesso, se il form non valido evidenzia tutti gli input del form toccati
  signIn() {
    if (!this.signInForm.valid) {
      this.signInForm.markAllAsTouched();
      return;
    }
    // vengono presi i valori dall'input email e password e passati al metodo nel store con checkout (per capire se è stato aperto dal bottone del checkout o dal signIn)
    // e dialogId che con il ref restituisce l'id del Dialog aperto nel momento.
    // su checkout mettiamo il ? così che sia opzionale ricevere il dato
    const { email, password } = this.signInForm.value;
    this.store.signIn({email, password, checkout: this.data?.checkout, dialogId: this.dialogRef.id } as SignInParams)
  };

  // metodo apriSignUpDialog per aprire il dialog per effettuare la registrazione al sito
  // dialogRef che sarebbe quello per il signIn si chiude e si apre quello per il sign UP
  // su checkout mettiamo il? così che sia opzionale ricevere il dato

  apriSignUpDialog() {
    this.dialogRef.close()
    this.matDialog.open(SignUp, {
      disableClose: true,
      data: {
        checkout: this.data?.checkout
      }
    })
  }
}
