import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EncontradosBaixaManualComponent } from './encontrados-baixa-manual.component';

@NgModule({
	imports: [RouterModule.forChild([
		{
			path: '', component: EncontradosBaixaManualComponent,
		}
	])],
	exports: [RouterModule],

})
export class EncontradosBaixaManualRoutingModule { }
