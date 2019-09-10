import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() modifiers: string[] = [];
	@Input() iconName: string = '';
	@Input() text: string = '';
	@Input() extraText: string = ''
	@Output() clicked = new EventEmitter();

  modifiersJoined: string = '';

  constructor() { }

  ngOnInit() {
    if (!this.modifiers.length) {
      return;
    }
    if (this.modifiers.length > 1) {
      this.modifiersJoined = `btn--${this.modifiers.join(' btn--')}`;
    }
    if (this.modifiers.length === 1) {
      this.modifiersJoined = `btn--${this.modifiers[0]}`;
    }
  }
}
