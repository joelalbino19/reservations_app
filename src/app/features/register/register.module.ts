import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPage } from './pages/register/register.page';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [RegisterPage, RegisterFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule {}
