import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
const routes: Routes = [
	{
		path: '',
		component: DashboardComponent
	},
	{
		path: 'externalRedirect',
		canActivate: [externalUrlProvider],
		resolve: {
			url: externalUrlProvider
		},
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
	providers: [
		{
			provide: externalUrlProvider,
			useValue: (route: ActivatedRouteSnapshot) => {
				const externalUrl = route.paramMap.get('externalUrl');
				window.open(externalUrl, '_blank');
			},
		},
	],
})
export class AppRoutingModule { }
