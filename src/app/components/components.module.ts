import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PinComponent } from './pin/pin.component';
import { BadgesComponent } from './badges/badges.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { FunRoomComponent } from './fun-room/fun-room.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
		ProgressBarComponent,
		PinComponent,
		BadgesComponent,
		PlayerProfileComponent,
		FunRoomComponent,
		CarouselComponent,
	],
  imports: [
		CommonModule
	],
	exports: [
		ProgressBarComponent,
		BadgesComponent,
		PlayerProfileComponent,
		FunRoomComponent,
		CarouselComponent,
	],
	providers: []
})
export class ComponentsModule { }
