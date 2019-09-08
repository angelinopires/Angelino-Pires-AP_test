import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
		DashboardComponent
	],
  imports: [
		CommonModule,
		ComponentsModule,
	],
	exports: [
		DashboardComponent
	]
})
export class PagesModule { }
