import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CadastroFornecedorComponent } from './cadastro-fornecedor.component';
import { CadastroFornecedorRoutingModule } from './cadastro-fornecedor-routing.module';
import { StepsModule } from 'primeng/steps';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card'; 
import { TicketService } from '../../../../compartilhado/servicos/ticket.service';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		CadastroFornecedorRoutingModule,
		StepsModule, 
		ToolbarModule,
		ToastModule,
		CardModule,
	],
	declarations: [ CadastroFornecedorComponent ], 
    bootstrap: [ CadastroFornecedorComponent ],
    providers: [ TicketService ],
})
export class CadastroFornecedorModule { }
