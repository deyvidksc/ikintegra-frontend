import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnviadosBaixaManualComponent } from './enviados-baixa-manual.component';

@NgModule({
	imports: [RouterModule.forChild([
		{
			path: '', component: EnviadosBaixaManualComponent,
		}
	])],
	exports: [RouterModule],

})
export class EnviadosBaixaManualRoutingModule { }
