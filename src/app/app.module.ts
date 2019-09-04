import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import localePt from '@angular/common/locales/pt';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

registerLocaleData(localePt, 'pt');
@NgModule({
	declarations: [
		AppComponent,
		HomeComponent
	],
	imports: [
		CoreModule,
		BrowserModule,
		AppRoutingModule,
		RouterModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
