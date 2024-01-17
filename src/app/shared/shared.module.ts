import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

const materials = [MatToolbarModule];

@NgModule({
  exports: [materials],
  imports: [materials],
})
export class SharedModule {}
