import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { faCopy, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import { FunRoomModel } from 'src/app/core/models/FunRoomModel';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
	@ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;
	@ViewChild('lobbysId') lobbysId: ElementRef;
	@Input() lobbys: FunRoomModel[];

	lastIndex: number;
	maxIndex: number = 0;

	faCopy = faCopy;
	faSignInAlt = faSignInAlt;

	constructor(private router: Router) { }

	ngOnInit() {}

	ngAfterViewInit() {
		this.findMaxIndex();
	}

	getPercentage(current: number, total: number): number {
		return Number(((current / total) * 100).toFixed());
	}

	navigateTo(route: string, url?: string): void {
		if (url) {
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

	findMaxIndex(): void {
		if (this.lobbys) {
			const lobbysWidth = this.lobbysId.nativeElement.offsetWidth;
			const max = this.lobbys.length - Number((lobbysWidth / 176).toFixed());
			this.maxIndex =max;
		}
	}

	moveLeft(): void {
		this.ds.moveLeft();
	}

	moveRight(): void {
		this.ds.moveRight();
	}
}
