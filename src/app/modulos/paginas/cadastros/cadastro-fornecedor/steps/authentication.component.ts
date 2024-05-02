import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../../../compartilhado/servicos/ticket.service';
import { Router } from '@angular/router';
import { PrimeIcons } from 'primeng/api';


@Component({
    styles: [`
    .custom-inputgroup {
      width: 100%;
    }
  `],
    template: `
        <div class="stepsdemo-content">
            <p-card>
                <ng-template pTemplate="title"> Registro de Usuário </ng-template>
                <ng-template pTemplate="subtitle"> Preencha os campos abaixo para criar sua conta </ng-template>
                <ng-template pTemplate="content">
                    <div class="p-fluid formgrid grid">
                        <!--<div class="field col-12">
                            <label for="class">Card Holder Name</label>
                            <input type="text" required pInputText [(ngModel)]="authenticationInformation.cardholderName" />
                        </div>
                        <div class="field col-8">
                            <label id="number" for="lastname">Number</label>
                            <p-inputMask inputId="number" mask="9999-9999-9999-9999" [(ngModel)]="authenticationInformation.cardholderNumber"></p-inputMask>
                        </div>
                        <div class="field col-2">
                            <label id="date" for="date">Date</label>
                            <p-inputMask inputId="date" mask="99/99" [(ngModel)]="authenticationInformation.date"></p-inputMask>
                        </div>
                        <div class="field col-2">
                            <label for="cvv">CVV</label>
                            <p-inputMask id="cvv" mask="999" [(ngModel)]="authenticationInformation.cvv"></p-inputMask>
                        </div>
                        <div class="field-checkbox col-12">
                            <p-checkbox id="remember" [binary]="true" [(ngModel)]="authenticationInformation.remember"></p-checkbox>
                            <label for="remember" class="p-checkbox-label">Save credit card information for future</label>
                        </div>-->

                        <div class="field col-12 md:col-6">
                            <label for="telefone">Telefone</label>
                            <!--<div class="p-inputgroup custom-inputgroup">
                                <span class="p-inputgroup-addon">
                                <i class="pi pi-phone"></i>
                                </span>-->
                                <p-inputMask id="telefone" mask="(99) 9999-9999"
                                [(ngModel)]="authenticationInformation.telefone"
                                ></p-inputMask>
                            <!--</div>-->
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="email">Email</label>
                            <div class="p-inputgroup">
                                <span class="p-inputgroup-addon">
                                <i class="pi pi-envelope"></i>
                                </span>
                                <input
                                    id="email"
                                    type="text"
                                    pInputText
                                    [(ngModel)]="authenticationInformation.email"
                                />
                            </div>
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="senha">Senha</label>
                            <div class="p-inputgroup">
                                <span class="p-inputgroup-addon">
                                <i class="pi pi-lock"></i>
                                </span>
                                <input
                                    id="senha"
                                    type="password"
                                    pInputText
                                    [(ngModel)]="authenticationInformation.senha"
                                />
                            </div>
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="confirmarSenha">Confirmar Senha</label>
                            <div class="p-inputgroup">
                                <span class="p-inputgroup-addon">
                                <i class="pi pi-lock"></i>
                                </span>
                                <input
                                    id="confirmarSenha"
                                    type="password"
                                    pInputText
                                    [(ngModel)]="authenticationInformation.confirmarSenha"
                                />
                            </div>
                        </div>


                    </div>
                </ng-template>
                <ng-template pTemplate="footer">
                    <div class="grid grid-nogutter justify-content-between">
                        <p-button label="Back" (onClick)="prevPage()" icon="pi pi-angle-left"></p-button>
                        <p-button label="Next" (onClick)="nextPage()" icon="pi pi-angle-right" iconPos="right"></p-button>
                    </div>
                </ng-template>
            </p-card>
        </div>
    `
})
export class AuthenticationComponent implements OnInit {
    authenticationInformation: any;

    constructor(public ticketService: TicketService, private router: Router) {}

    ngOnInit() {
        this.authenticationInformation = this.ticketService.ticketInformation.authenticationInformation;
    }

    nextPage() {
        this.ticketService.ticketInformation.authenticationInformation = this.authenticationInformation;
        // this.router.navigate(['steps/confirmation']);
        this.router.navigate(['cadastros/cadastro-fornecedor', { outlets: { one: ['pictures'] } }]);
        console.log(this.authenticationInformation);

    }

    prevPage() {
        this.router.navigate(['cadastros/cadastro-fornecedor', { outlets: { one: ['address'] } }]);

        // this.router.navigate(['steps/address']);
    }
}
