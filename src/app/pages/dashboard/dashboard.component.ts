import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { DashboardService } from 'src/app/core/services/dashboard.service';
import { DashboardModel } from 'src/app/core/models/DashboardModel';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
	dashboardSubscription: Subscription
	dashboard: DashboardModel

	constructor(private dashboardService: DashboardService) { }

	ngOnInit() {
		this.getDashboard();
	}

	ngOnDestroy() {
		this.dashboardSubscription && this.dashboardSubscription.unsubscribe();
	}

	async getDashboard(): Promise<void> {
		await this.dashboardService.getDashboard();

		this.dashboardSubscription = this.dashboardService.dashboard.subscribe(data => {
			if (data && data.user) {
				console.log(data);
				this.dashboard = data;
			}
		})
	}
}
