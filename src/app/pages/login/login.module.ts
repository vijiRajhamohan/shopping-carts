import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { InputComponent } from 'src/app/input/input.component';
import { InputModule } from 'src/app/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
