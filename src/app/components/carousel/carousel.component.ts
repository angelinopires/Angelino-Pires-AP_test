import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { faCopy, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import { FunRoomModel } from 'src/app/core/models/FunRoomModel';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
	@Input() lobbys: FunRoomModel;

	faCopy = faCopy;
	faSignInAlt = faSignInAlt;

	constructor(private router: Router) { }

	ngOnInit() {
	}

	getPercentage(current: number, total: number): number {
		return Number(((current / total) * 100).toFixed());
	}

	navigateTo(route: string, url?: string): void {
		if (url) {
			console.log(route, url);

			this.router.navigate([route, { externalUrl: url }]);
			return;
		}
		this.router.navigate([route]);
	}

	copyText(text: string) {
		let selBox = document.createElement('textarea');
		selBox.classList.add('invisible');
    selBox.value = text;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
	}
}
