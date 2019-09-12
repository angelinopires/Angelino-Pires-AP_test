import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {
	private loadingSubscription: Subscription;

  isLoading: boolean = true;

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
		this.getLoading();
	}

	getLoading(): void {
		this.loadingSubscription = this.loadingService.isLoading.subscribe(data => {
      this.isLoading = data;
    });
	}

  ngOnDestroy() {
		this.loadingSubscription && this.loadingSubscription.unsubscribe();
  }
}
