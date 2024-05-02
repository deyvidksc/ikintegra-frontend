import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParametrosFilialComponent } from './parametros-filial.component';

@NgModule({
	imports: [RouterModule.forChild([
		{
			path: '', component: ParametrosFilialComponent,
		}
	])],
	exports: [RouterModule],

})
export class ParametrosFilialRoutingModule { }
