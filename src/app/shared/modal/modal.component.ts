import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() isVisible = false;
  @Input() isContainer = false;
  @Input() isCancelable = false;
  @Input() hasClose = true;
  @Input() hasHeader = true;
  @Input() hasFooter = true;

  @Output() close = new EventEmitter;

  @ViewChild('modalContent') modalContent: ElementRef;

  isModal = true;

  constructor() { }

  ngOnInit() {
  }

}
