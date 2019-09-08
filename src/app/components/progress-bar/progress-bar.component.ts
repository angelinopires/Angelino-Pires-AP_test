import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
	@Input() hasLabel: boolean = false;
	@Input() expertise: string = '';

	progressBarValue: number;
	casualValue: number = 15;
	competitiveValue: number = 50;
	amateurValue: number = 75;
	proValue: number = 100;

  constructor() { }

	ngOnInit() {
		this.findPlayerExpertise();
	}

	findPlayerExpertise(): void {
		if (!this.expertise) {
			return;
		}

		const expertiseMap = new Map([
			['casual', this.casualValue],
			['competitive', this.competitiveValue],
			['amateur', this.amateurValue],
			['pro', this.proValue]
		]);

		this.progressBarValue = expertiseMap.get(this.expertise);
	}
}
