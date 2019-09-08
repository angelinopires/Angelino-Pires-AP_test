import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import { ApiService } from './api.service';

import { DashboardModel } from '../models/DashboardModel';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
	private dashboardSubject = new BehaviorSubject<DashboardModel>({} as DashboardModel);
	public dashboard = this.dashboardSubject.asObservable().pipe(distinctUntilChanged());

	constructor(private apiService: ApiService) { }

	getDashboard(): void {
		this.apiService.get('sqwaq').subscribe(result => {
			if (result) {
				this.setDashboard(result);
			}
		});
	}

	setDashboard(dashboard: DashboardModel): void {
		this.dashboardSubject.next(dashboard)
	}
}
