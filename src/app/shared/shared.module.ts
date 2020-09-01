import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';


@NgModule({
  declarations: [SuccessDialogComponent, ErrorDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    SuccessDialogComponent,
    ErrorDialogComponent
  ],
  // we are not going to use routing nor app selector to call these components.
  // We are going to use them as a template reference for the dialog’s open()
  // function and thus the need for the entryComponents array:
  entryComponents: [
    SuccessDialogComponent,
    ErrorDialogComponent
  ]
})
export class SharedModule { }
