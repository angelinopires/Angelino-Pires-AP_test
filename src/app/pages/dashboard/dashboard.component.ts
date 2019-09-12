import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import { DashboardModel } from 'src/app/core/models/DashboardModel';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
	dashboardSubscription: Subscription
	dashboard: DashboardModel

	faDownload = faDownload;
	constructor(
		private dashboardService: DashboardService,
		private router: Router) { }

	ngOnInit() {
		this.getDashboard();
	}

	ngOnDestroy() {
		this.dashboardSubscription && this.dashboardSubscription.unsubscribe();
	}

	getDashboard(): void {
		this.dashboardService.getDashboard();

		this.dashboardSubscription = this.dashboardService.dashboard.subscribe(data => {
			if (data && data.user) {
				this.dashboard = data;
			}
		})
	}

	navigateTo(route: string, url?: string): void {
		if (url) {
			this.router.navigate([route, { externalUrl: url }]);
			return;
		}
		this.router.navigate([route]);
	}
}
