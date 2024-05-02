import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api'; 
import { ProviderService } from '../../../../compartilhado/servicos/provider.service';
import { Provider } from '../../../../compartilhado/modelos/provider';  
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TicketService } from '../../../../compartilhado/servicos/ticket.service';
import { SeverityType } from '../../../../compartilhado/constantes/severity-type';

@Component({
    templateUrl: './cadastro-fornecedor.component.html', 
    providers: [MessageService],
})
export class CadastroFornecedorComponent  implements OnInit { 
    
    providers: Provider[] = [];
    items: MenuItem[] = [];
    activeIndex: number = 0;
    subscription: Subscription = new Subscription();

    constructor(private providerService: ProviderService,
                private router: Router,
                public messageService: MessageService, 
                public ticketService: TicketService) { }
 
    ngOnInit() {
        this.ticketService.resetTicketInformation();
        this.items = [
            {
                label: 'Identificação',
                 routerLink: 'identification'
            },
            {
                label: 'Endereço',
                routerLink: 'address'
            },
            {
                label: 'Autenticação',
                routerLink: 'authentication'
            },
            {
                label: 'Fotos',
                routerLink: 'pictures'
            },
            {
                label: 'Confirmação',
                routerLink: 'confirmation'
            }
        ];

        this.subscription = this.ticketService.confirmationComplete$.subscribe(([identificationInformation, severityType]) => {
            if (severityType === SeverityType.Success) {
                // Exibir o toast de sucesso
                this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Operação concluída com sucesso' });
              } else if (severityType === SeverityType.Error) {
                // Exibir o toast de erro
                this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro durante a operação' });
              } else {
                // Exibir o toast com nível padrão
                this.messageService.add({ severity: 'info', summary: 'Informação', detail: 'Operação concluída' });
              }
        });    
    } 

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    
    navigateNewSearchProvider() {
        this.router.navigate(['/pesquisas/pesquisa-fornecedor']);
    }
    next() {
        this.activeIndex += 1;
    }
}
