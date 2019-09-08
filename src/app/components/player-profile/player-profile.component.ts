import { Component, OnInit, Input } from '@angular/core';

import { UserModel } from 'src/app/core/models/UserModel';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss']
})
export class PlayerProfileComponent implements OnInit {
	@Input() profile: UserModel;

  constructor() { }

  ngOnInit() {}
}
