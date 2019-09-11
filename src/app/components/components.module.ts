import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PinComponent } from './pin/pin.component';
import { BadgesComponent } from './badges/badges.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { FunRoomComponent } from './fun-room/fun-room.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ButtonComponent } from './button/button.component';
import { LobbysComponent } from './lobbys/lobbys.component';
import { ServerInfoComponent } from './server-info/server-info.component';

@NgModule({
  declarations: [
		ProgressBarComponent,
		PinComponent,
		BadgesComponent,
		PlayerProfileComponent,
		FunRoomComponent,
		CarouselComponent,
		ButtonComponent,
		LobbysComponent,
		ServerInfoComponent,
	],
  imports: [
		CommonModule,
		FontAwesomeModule
	],
	exports: [
		ProgressBarComponent,
		BadgesComponent,
		PlayerProfileComponent,
		FunRoomComponent,
		CarouselComponent,
		ButtonComponent,
		LobbysComponent,
		ServerInfoComponent,
	],
	providers: []
})
export class ComponentsModule { }
