import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './loading/loading.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
	  LoadingComponent,
	  ModalComponent
  ],
  imports: [
    CommonModule
	],
	exports: [
		LoadingComponent,
	]
})
export class SharedModule { }
