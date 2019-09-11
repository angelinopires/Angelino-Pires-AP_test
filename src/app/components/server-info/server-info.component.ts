import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-info',
  templateUrl: './server-info.component.html',
  styleUrls: ['./server-info.component.scss']
})
export class ServerInfoComponent implements OnInit {
	@Input() banned: string = ''
	@Input() playersOnline: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
