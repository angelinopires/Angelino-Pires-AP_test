import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
		DashboardComponent
	],
  imports: [
		CommonModule,
		ComponentsModule,
		FontAwesomeModule,
	],
	exports: [
		DashboardComponent
	]
})
export class PagesModule { }
