import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

registerLocaleData(localePt, 'pt');
@NgModule({
	declarations: [AppComponent],
	imports: [
		CoreModule,
		BrowserModule,
		AppRoutingModule,
		RouterModule,
		PagesModule,
		SharedModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
