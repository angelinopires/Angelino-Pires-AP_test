import { Component, OnInit, Input } from '@angular/core';
import { FunRoomModel } from 'src/app/core/models/FunRoomModel';

@Component({
  selector: 'app-fun-room',
  templateUrl: './fun-room.component.html',
  styleUrls: ['./fun-room.component.scss']
})
export class FunRoomComponent implements OnInit {
	@Input() funLobby: FunRoomModel;

  constructor() { }

  ngOnInit() {
	}

	getPercentage(current: number, total: number): number {
		return Number( ((current / total) * 100).toFixed());
	}
}
