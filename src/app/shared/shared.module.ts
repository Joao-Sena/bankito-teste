import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '../components/button/button.component';
import { FieldErrorComponent } from '../components/field-error/field-error.component';

@NgModule({
  declarations: [
    ButtonComponent,
    FieldErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    
    //Componentes
    ButtonComponent,
    FieldErrorComponent,
  ]
})
export class SharedModule { }
