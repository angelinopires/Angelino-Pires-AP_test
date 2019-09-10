import { Component, OnInit, Input } from '@angular/core';

import {faChevronLeft, faUsers } from '@fortawesome/free-solid-svg-icons';
import { CompetitiveRoomModel } from 'src/app/core/models/CompetitiveRoomModel';

@Component({
  selector: 'app-lobbys',
  templateUrl: './lobbys.component.html',
  styleUrls: ['./lobbys.component.scss']
})
export class LobbysComponent implements OnInit {
	@Input() games: Array<CompetitiveRoomModel> = [];

	faChevronLeft = faChevronLeft;
	faUsers = faUsers;

  constructor() { }

  ngOnInit() {
  }

}
