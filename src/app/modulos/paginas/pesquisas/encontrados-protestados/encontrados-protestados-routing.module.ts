import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EncontradosProtestadosComponent } from './encontrados-protestados.component';


@NgModule({
	imports: [RouterModule.forChild([
		{
			path: '', component: EncontradosProtestadosComponent,
		}
	])],
	exports: [RouterModule],

})
export class EncontradosProtestadosRoutingModule { }
