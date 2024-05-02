import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GaleriaComponent } from './galeria.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: GaleriaComponent }
	])],
	exports: [RouterModule]
})
export class GaleriaRoutingModule { }
