import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitulosBaixadosComponent } from './titulos-baixados.component';

@NgModule({
	imports: [RouterModule.forChild([
		{
			path: '', component: TitulosBaixadosComponent,
		}
	])],
	exports: [RouterModule],

})
export class TitulosBaixadosRoutingModule { }
