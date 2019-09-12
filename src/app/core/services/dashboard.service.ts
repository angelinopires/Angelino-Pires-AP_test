import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import { ApiService } from './api.service';

import { DashboardModel } from '../models/DashboardModel';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
	private dashboardSubject = new BehaviorSubject<DashboardModel>({} as DashboardModel);
	public dashboard = this.dashboardSubject.asObservable().pipe(distinctUntilChanged());

	constructor(private apiService: ApiService, private loadingService: LoadingService) { }

	getDashboard(): void {
		this.loadingService.show();

		this.apiService.get('sqwaq').subscribe(result => {
			if (result) {
				this.setDashboard(result)
				this.loadingService.hide();
			}
		}, error => {
			this.loadingService.hide();
		});
	}

	setDashboard(dashboard: DashboardModel): void {
		this.dashboardSubject.next(dashboard)
	}
}
