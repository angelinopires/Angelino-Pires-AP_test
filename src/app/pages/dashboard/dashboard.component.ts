import { Component, OnInit, OnDestroy } from '@angular/core';

import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import { DashboardService } from 'src/app/core/services/dashboard.service';
import { DashboardModel } from 'src/app/core/models/DashboardModel';
import { Router } from '@angular/router';

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

	async getDashboard(): Promise<void> {
		await this.dashboardService.getDashboard();

		this.dashboardSubscription = this.dashboardService.dashboard.subscribe(data => {
			if (data && data.user) {
				console.log(data);
				this.dashboard = data;
			}
		})
	}

	navigateTo(route: string, url?: string): void {
		if (url) {
			console.log(route, url);

			this.router.navigate([route, { externalUrl: url }]);
			return;
		}
		this.router.navigate([route]);
	}
}
