import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PinComponent } from './pin/pin.component';

@NgModule({
  declarations: [
		ProgressBarComponent,
		PinComponent
	],
  imports: [
    CommonModule
	],
	exports: [
		ProgressBarComponent,
	]
})
export class ComponentsModule { }
