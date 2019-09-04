import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-internal-structure',
  templateUrl: './internal-structure.component.html',
  styleUrls: ['./internal-structure.component.scss']
})
export class InternalStructureComponent implements OnInit {
  @Input() modifiers: any[] = [];
  @Input() hideFooter = false;

  modifiersJoined = '';

  constructor() { }

  ngOnInit() {
    if (!this.modifiers.length) {
      return;
    }
    if (this.modifiers.length > 1) {
      this.modifiersJoined = `structure--${this.modifiers.join(' structure--')}`;
    }
    if (this.modifiers.length === 1) {
      this.modifiersJoined = `structure--${this.modifiers[0]}`;
    }
  }

}
