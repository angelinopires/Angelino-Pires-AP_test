import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CoreModule } from '../core/core.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

@NgModule({
	declarations: [
		DashboardComponent,
		UserComponent
	],
	imports: [
		CommonModule,
		UserRoutingModule,
		CoreModule,
	]
})
export class UserModule { }
