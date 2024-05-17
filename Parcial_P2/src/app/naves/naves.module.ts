import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavesComponent } from './naves.component';
import { HttpClientModule } from '@angular/common/http';
import { NaveDetailComponent } from './nave-detail/nave-detail.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [NavesComponent, NaveDetailComponent],
  exports: [NavesComponent]
})
export class NavesModule { }
