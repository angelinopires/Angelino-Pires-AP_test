import { Component, OnInit, Input } from '@angular/core';

import { UserModel } from 'src/app/core/models/UserModel';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {
	@Input() badges: UserModel;

  constructor() { }

  ngOnInit() {}
}
