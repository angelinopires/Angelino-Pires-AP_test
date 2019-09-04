import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CoreModule } from '../core/core.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
	declarations: [
		DashboardComponent,
		AdminComponent
	],
	imports: [
		CommonModule,
		AdminRoutingModule,
		CoreModule,
	]
})
export class AdminModule { }
