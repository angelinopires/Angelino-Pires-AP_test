import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { faCopy, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import { FunRoomModel } from 'src/app/core/models/FunRoomModel';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
	@ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;
	@Input() lobbys: FunRoomModel[];

	lastIndex: number;
	maxIndex: number;

	faCopy = faCopy;
	faSignInAlt = faSignInAlt;

	constructor(private router: Router) { }

	ngOnInit() {
		this.findCarouselMaxIndex();
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

	copyText(text: string): void {
		let selBox = document.createElement('textarea');
		selBox.classList.add('invisible');
    selBox.value = text;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
	}

	findCarouselMaxIndex(): void {
		if (this.lobbys) {
			this.maxIndex = this.lobbys.length < 3 ? 0 : this.lobbys.length - 3;
		}
	}

	moveLeft(): void {
		this.ds.moveLeft();
		this.saveIndex(this.ds.currIndex);
  }

  moveRight(): void {
    this.ds.moveRight();
		this.saveIndex(this.ds.currIndex);
  }

	saveIndex(index: number) {
		this.lastIndex = index;
	}

	handle() {
		console.log('cheguei no fim kkk', this.ds);

	}
}
