import { Component, OnInit, Input } from '@angular/core';
import { FunModel } from 'src/app/core/models/FunModel';

@Component({
  selector: 'app-fun-room',
  templateUrl: './fun-room.component.html',
  styleUrls: ['./fun-room.component.scss']
})
export class FunRoomComponent implements OnInit {
	@Input() funLobby: FunModel;

  constructor() { }

  ngOnInit() {
	}

	getPercentage(current: number, total: number): number {
		return Number( ((current / total) * 100).toFixed());
	}
}
