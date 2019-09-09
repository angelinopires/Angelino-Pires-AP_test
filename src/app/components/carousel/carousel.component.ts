import { Component, OnInit, Input } from '@angular/core';

import { FunRoomModel } from 'src/app/core/models/FunRoomModel';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
	@Input() lobbys: FunRoomModel;

	constructor() { }

	ngOnInit() {
	}

	getPercentage(current: number, total: number): number {
		return Number(((current / total) * 100).toFixed());
	}
}
