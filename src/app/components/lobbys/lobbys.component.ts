import { Component, OnInit, Input } from '@angular/core';

import {faChevronRight, faUsers, faSurprise, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { CompetitiveRoomModel } from 'src/app/core/models/CompetitiveRoomModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobbys',
  templateUrl: './lobbys.component.html',
  styleUrls: ['./lobbys.component.scss']
})
export class LobbysComponent implements OnInit {
	@Input() games: Array<CompetitiveRoomModel> = [];

	faChevronRight = faChevronRight;
	faUsers = faUsers;
	faSurprise = faSurprise;
	faDesktop = faDesktop;

  constructor(private router: Router) { }

  ngOnInit() {
	}

	navigateTo(route: string, url?: string): void {
		console.log(`recebi isso`, route, url);
		if (url) {
			console.log(`uhul entrei`);

			this.router.navigate([route, { externalUrl: url }]);
			return;
		}
		this.router.navigate([route]);
	}
}
