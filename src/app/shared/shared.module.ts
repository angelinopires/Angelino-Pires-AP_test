import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalStructureComponent } from './internal-structure/internal-structure.component';
import { LayoutComponent } from './layout/layout.component';
import { LoadingComponent } from './loading/loading.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
	  InternalStructureComponent,
	  LayoutComponent,
	  LoadingComponent,
	  ModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
