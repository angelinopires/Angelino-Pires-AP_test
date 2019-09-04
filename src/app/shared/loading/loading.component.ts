import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {
  @Input() isVisible = false;
  @Input() isContainer = false;
  isLoading = true;

  private loadingSubscription: Subscription;

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingSubscription = this.loadingService.isLoading.subscribe(data => {
      this.isLoading = data;
    }, error => {
      console.log('error loadingSubscription', error);
    })
  }

  ngOnDestroy() {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
  }

}
