import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EncontradosBaixaComponent } from './encontrados-baixa.component';

@NgModule({
	imports: [RouterModule.forChild([
		{
			path: '', component: EncontradosBaixaComponent,
		}
	])],
	exports: [RouterModule],

})
export class EncontradosBaixaRoutingModule { }
