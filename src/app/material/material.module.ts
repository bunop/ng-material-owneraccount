import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: []
})
export class MaterialModule { }
