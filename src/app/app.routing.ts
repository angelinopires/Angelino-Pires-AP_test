import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent
	},
	{ path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	],
})
export class AppRoutingModule { }
