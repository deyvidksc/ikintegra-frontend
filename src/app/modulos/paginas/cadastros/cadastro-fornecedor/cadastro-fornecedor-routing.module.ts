import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CadastroFornecedorComponent } from './cadastro-fornecedor.component';
import { IdentificationComponent } from './steps/identification.component';
import { StepsLocalModule } from './steps/stepslocal.module';
import { AddressComponent } from './steps/address.component';
 import { AuthenticationComponent } from './steps/authentication.component';
import { PicturesComponent } from './steps/pictures.component'; 
import { ConfirmationComponent } from './steps/confirmation.component';
// import { ConfirmationDemo  } from './steps/confirmationdemo';

@NgModule({
	imports: [ 
		StepsLocalModule,
		RouterModule.forChild([
			{
				path: '',
				redirectTo: 'identification',
				pathMatch: 'full',
				outlet: 'one'
			},
			{
				path: '',
				component: CadastroFornecedorComponent,  
				children: [
					 { path: 'identification', component: IdentificationComponent, outlet:'one' },
					 { path: 'address', component: AddressComponent, outlet:'one'},
					 { path: 'authentication', component: AuthenticationComponent, outlet: 'one'},
					 { path: 'pictures', component: PicturesComponent, outlet: 'one'},
					 { path: 'confirmation', component: ConfirmationComponent, outlet: 'one'},
				]
			}
 ])
	 

],	

	exports: [RouterModule]
})
export class CadastroFornecedorRoutingModule { }
