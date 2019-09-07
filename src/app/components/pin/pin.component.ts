import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {
	@Input() class: string = '';

  constructor() { }

  ngOnInit() { }

}
