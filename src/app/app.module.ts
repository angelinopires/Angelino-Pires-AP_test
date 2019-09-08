import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import localePt from '@angular/common/locales/pt';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

registerLocaleData(localePt, 'pt');
@NgModule({
	declarations: [AppComponent],
	imports: [
		CoreModule,
		BrowserModule,
		AppRoutingModule,
		RouterModule,
		PagesModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
