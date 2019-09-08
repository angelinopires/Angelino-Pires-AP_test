import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PinComponent } from './pin/pin.component';
import { BadgesComponent } from './badges/badges.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';

@NgModule({
  declarations: [
		ProgressBarComponent,
		PinComponent,
		BadgesComponent,
		PlayerProfileComponent
	],
  imports: [
    CommonModule
	],
	exports: [
		ProgressBarComponent,
		BadgesComponent,
		PlayerProfileComponent
	]
})
export class ComponentsModule { }
