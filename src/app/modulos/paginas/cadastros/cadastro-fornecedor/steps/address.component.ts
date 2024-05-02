import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../../../compartilhado/servicos/ticket.service';
import { Router } from '@angular/router';
import { estados } from 'src/app/compartilhado/constantes/estados';

@Component({
    template: `
        <div class="stepsdemo-content">
            <p-card>
                <ng-template pTemplate="title"> Endereço </ng-template>
                <ng-template pTemplate="subtitle"> Informações de endereço </ng-template>
                <ng-template pTemplate="content">
                    <div class="p-fluid formgrid grid">
                        <!--<div class="field col-12 md:col-6">
                            <label for="class">Class</label>
                            <p-dropdown inputId="class" [(ngModel)]="addressInformation.class" [options]="classes" (onChange)="setVagons($event)" optionLabel="name" placeholder="Select a Class"></p-dropdown>
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="wagon">Wagon</label>
                            <p-dropdown inputId="wagon" [(ngModel)]="addressInformation.wagon" [options]="vagons" (onChange)="setAddresss($event)" optionLabel="wagon" placeholder="Select a Wagon"></p-dropdown>
                        </div>
                        <div class="field col-12">
                            <label for="address">Address</label>
                            <p-dropdown inputId="address" [(ngModel)]="addressInformation.address" [options]="addresss" optionLabel="address" placeholder="Select a address"></p-dropdown>
                        </div>-->

                        <div class="field col-12 md:col-8">
                            <label for="endereco">Endereço</label>
                            <input
                                id="endereco"
                                type="text"
                                pInputText
                                [(ngModel)]="addressInformation.endereco"
                            />
                        </div>
                        <div class="field col-12 md:col-2">
                            <label for="cep">Cep</label>
                            <p-inputMask id="cep" mask="99999-999"
                            [(ngModel)]="addressInformation.cep"></p-inputMask>
                        </div>

                        <div class="field col-12 md:col-2">
                            <label for="numero">Número</label>
                            <input
                                id="numero"
                                type="text"
                                pInputText
                                [(ngModel)]="addressInformation.numero"
                            />
                        </div>
                        <div class="field col-12 md:col-4">
                            <label for="complemento">Complemento</label>
                            <input
                                id="complemento"
                                type="text"
                                pInputText
                                [(ngModel)]="addressInformation.complemento"
                            />
                        </div>
                        <div class="field col-12 md:col-4">
                            <label for="bairro">Bairro</label>
                            <input
                                id="bairro"
                                type="text"
                                pInputText
                                [(ngModel)]="addressInformation.bairro"
                            />
                        </div>
                        <div class="field col-12 md:col-4">
                            <label for="cidade">Cidade</label>
                            <input
                                id="cidade"
                                type="text"
                                pInputText
                                [(ngModel)]="addressInformation.cidade"
                            />
                        </div>

                        <div class="field col-12 md:col-4">
                            <label for="estado">Estado</label>
                            <p-dropdown inputId="estado"
                                    [(ngModel)]="addressInformation.estado"
                                    [options]="estados"
                                    optionLabel="estado"
                                    placeholder="Selecione um estado">
                            </p-dropdown>
                        </div>


                    </div>
                </ng-template>
                <ng-template pTemplate="footer">
                    <div class="grid grid-nogutter justify-content-between">
                        <p-button label="Anterior" (onClick)="prevPage()" icon="pi pi-angle-left"></p-button>
                        <p-button label="Próxima" (onClick)="nextPage()" icon="pi pi-angle-right" iconPos="right"></p-button>
                    </div>
                </ng-template>
            </p-card>
        </div>
        `
})
export class AddressComponent implements OnInit {
    constructor(public ticketService: TicketService, private router: Router) {}

    classes: any[] = [];

    vagons: any[] = [];

    addresss: any[] = [];

    estados: any[] = estados;
    estado: string = '';
    addressInformation: any;

    ngOnInit() {
        this.addressInformation = this.ticketService.ticketInformation.addressInformation;

        // this.classes = [
        //     { name: 'First Class', code: 'A', factor: 1 },
        //     { name: 'Second Class', code: 'B', factor: 2 },
        //     { name: 'Third Class', code: 'C', factor: 3 }
        // ];
    }

    // setEstado(event: any) {
    //     this.addressInformation.estado =  event.value.sigla;
    //     console.log('estado: '+ this.estado);

    // }

   /* setVagons(event: any) {
        if (this.addressInformation.class && event.value) {
            this.vagons = [];
            this.addresss = [];
            for (let i = 1; i < 3 * event.value.factor; i++) {
                this.vagons.push({ wagon: i + event.value.code, type: event.value.name, factor: event.value.factor });
            }
        }
    }

    setAddresss(event: any) {
        if (this.addressInformation.wagon && event.value) {
            this.addresss = [];
            for (let i = 1; i < 10 * event.value.factor; i++) {
                this.addresss.push({ address: i, type: event.value.type });
            }
        }
    }*/

    nextPage() {
        this.ticketService.ticketInformation.addressInformation = this.addressInformation;
        // this.router.navigate(['steps/authentication']);
        this.router.navigate(['cadastros/cadastro-fornecedor', { outlets: { one: ['authentication'] } }]);
        console.log(this.addressInformation);

    }

    prevPage() {
        // this.router.navigate(['steps/identification']);
        this.router.navigate(['cadastros/cadastro-fornecedor', { outlets: { one: ['identification'] } }]);

    }
}
