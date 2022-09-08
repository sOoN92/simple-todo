import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatSlideToggleModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatSlideToggleModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
  ],
})
export class MaterialModule {}
