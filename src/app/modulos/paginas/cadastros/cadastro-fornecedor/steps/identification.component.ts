import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../../../compartilhado/servicos/ticket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { estados } from 'src/app/compartilhado/constantes/estados';


@Component({
    template: `
        <div class="stepsdemo-content">
            <p-card>
                <ng-template pTemplate="title"> Identificação </ng-template>
                <ng-template pTemplate="subtitle"> Identificação pessoal </ng-template>
                <ng-template pTemplate="content">
                    <div class="p-fluid formgrid grid">
                        <div class="field col-12 md:col-8">
                            <label for="nome">Nome</label>
                            <input
                                #nome="ngModel"
                                id="nome"
                                type="text"
                                required
                                pInputText
                                [(ngModel)]="identificationInformation.nome"
                                [ngClass]="{ 'ng-dirty': (nome.invalid && submitted) || (nome.dirty && nome.invalid) }"
                            />
                            <small *ngIf="(nome.invalid && submitted) || (nome.dirty && nome.invalid)" class="p-error">Nome é requerido.</small>
                        </div>

                        <div class="field col-12 md:col-4">
                            <label for="apelido">Apelido</label>
                            <input #apelido="ngModel"
                                    id="apelido" type="text" required pInputText
                                    [(ngModel)]="identificationInformation.apelido"
                                    [ngClass]="{ 'ng-dirty': (apelido.invalid && submitted) || (apelido.dirty && apelido.invalid) }" />
                            <small class="p-error"
                                 *ngIf="(apelido.invalid && submitted) || (apelido.dirty && apelido.invalid)">Apelido é requerido.
                            </small>
                        </div>

                        <div class="field col-12 md:col-4">
                            <label for="documento">Tipo documento</label>
                            <p-dropdown inputId="tipoDocumentoLocal"
                                    [(ngModel)]="identificationInformation.tipoDocumento"
                                    [options]="tipoDocumentos"
                                    (onChange)="setTipoDocumento($event)"
                                    optionLabel="name"  >
                            </p-dropdown>
                        </div>

                        <div class="field col-12 md:col-4">
                            <label for="documento">Nº documento</label>
                            <ng-container *ngIf="tipoDocumentoLocal === 'CNPJ'">
                                <p-inputMask id="documento" mask="99.999.999/9999-99"
                                [(ngModel)]="identificationInformation.documento"></p-inputMask>
                            </ng-container>
                            <ng-container *ngIf="tipoDocumentoLocal === 'CPF'">
                                <p-inputMask id="documento" mask="999.999.999-99"
                                [(ngModel)]="identificationInformation.documento"></p-inputMask>
                            </ng-container>

                        </div>

                        <div class="field col-12 md:col-4">
                            <label for="dataNascimento">Data Nascimento</label>
                            <p-calendar  dateFormat="dd/mm/yy" name="dataNascimento"
                             [showIcon]="true"
                             [(ngModel)]="identificationInformation.dataNascimento"></p-calendar>
                        </div>

                        <div class="field col-12 md:col-4">
                            <label for="class">Gênero</label>
                            <p-dropdown inputId="genero"
                                [(ngModel)]="identificationInformation.genero"
                                [options]="generos"
                                (onChange)="setGenero($event)"
                                optionLabel="name"></p-dropdown>
                        </div>

                        <div class="field col-12 md:col-4">
                            <label for="nome">Cidade Nascimento</label>
                            <input
                                #nome="ngModel"
                                id="cidadeNascimento"
                                type="text"
                                pInputText
                                [(ngModel)]="identificationInformation.cidadeNascimento"
                            />
                        </div>

                        <div class="field col-12 md:col-4">
                            <label for="estadoNascimento">Estado Nascimento</label>
                            <p-dropdown inputId="estadoNascimento"
                                    [(ngModel)]="identificationInformation.estadoNascimento"
                                    [options]="estados"
                                    optionLabel="estado"
                                    (onChange)="setEstado($event)" >
                            </p-dropdown>
                        </div>


                        <div class="field col-12 md:col-4">
                            <label for="ultimoClube">Último Clube</label>
                            <input
                                #nome="ngModel"
                                id="utlimoClube"
                                type="text"
                                pInputText
                                [(ngModel)]="identificationInformation.ultimoClube"
                            />
                        </div>

                        <div class="field col-12 md:col-4">
                            <label for="posicao">Posição</label>
                            <p-dropdown inputId="posicao"
                                    [(ngModel)]="identificationInformation.posicao"
                                    [options]="posicoes"
                                    optionLabel="name"
                                    (onChange)="setPosicao($event)" >
                            </p-dropdown>
                        </div>

                        <div class="field col-12 md:col-4">
                            <label for="situacao">Situação</label>
                            <p-dropdown inputId="situacao"
                                    [(ngModel)]="identificationInformation.situacao"
                                    [options]="situacoes"
                                    optionLabel="name"
                                    (onChange)="setSituacao($event)" >
                            </p-dropdown>
                        </div>



                        <!--<div class="field col-12 md:col-2">
                            <label for="idade">Idade</label>
                            <input #idade="ngModel" id="idade" type="number" required pInputText [(ngModel)]="identificationInformation.idade" [ngClass]="{ 'ng-dirty': (idade.invalid && submitted) || (idade.dirty && idade.invalid) }" />
                            <small class="p-error" *ngIf="(idade.invalid && submitted) || (idade.dirty && idade.invalid)">idade é requerido.</small>
                        </div>-->
                    </div>
                </ng-template>
                <ng-template pTemplate="footer">
                    <div class="grid grid-nogutter justify-content-end">
                        <p-button label="Próxima" (onClick)="nextPidade()" icon="pi pi-angle-right" iconPos="right"></p-button>
                    </div>
                </ng-template>
            </p-card>
        </div>
    `
},

)

export class IdentificationComponent implements OnInit {
    identificationInformation: any;
    tipoDocumentoLocal: string = 'CPF';

    generos: any[] = [
        { name: 'Masculino', value: 'MALE' },
        { name: 'Feminino', value: 'FEMALE' }
    ];

    tipoDocumentos: any[] = [
        { name: 'CPF', value: 'CPF' },
        { name: 'CNPJ', value: 'CNPJ' }
    ];

    posicoes: any[] = [
        { name: 'Atacante', value: 'ATACANTE' },
        { name: 'Lateral Esquerdo', value: 'LATERAL_ESQUERDO' },
        { name: 'Lateral Direito', value: 'LATERAL_DIREITO' },
        { name: 'Volante', value: 'VOLANTE' },
        { name: 'Zagueiro', value: 'ZAGUEIRO' },
        { name: 'Meia', value: 'MEIA' },
        { name: 'Centroavante', value: 'CENTROAVANTE' },
    ];

    situacoes: any[] = [
        { name: 'Em atividade', value: 'IN_ACTIVITY' },
        { name: 'Aposentado', value: 'RETIRED' }
    ];

    estados: any[] = estados;

    submitted: boolean = false;

    constructor(public ticketService: TicketService,
        private router: Router,
        public activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.identificationInformation = this.ticketService.getTicketInformation().identificationInformation;
        // this.valuesDefaultIdentification();
    }

    valuesDefaultIdentification() {
        this.identificationInformation.dataNascimento = new Date();
        this.identificationInformation.tipoDocumento = 'CPF';
        this.identificationInformation.genero = 'MALE';
        this.identificationInformation.estadoNascimento = '';
        this.identificationInformation.situacao = 'IN_ACTIVITY';
        this.identificationInformation.posicao = 'Atacante';
    }

    setGenero(event: any) {
        // if (this.identificationInformation.genero && event.value) {
            //  this.identificationInformation.genero = event.value.value;
            console.log(this.identificationInformation.genero.value);
        // }

    }

    setTipoDocumento(event: any) {
        if (this.identificationInformation.tipoDocumento && event.value) {
            this.tipoDocumentoLocal = event.value.value;
        }
    }

    setEstado(event: any) {
        console.log(event.value.sigla);
        // this.identificationInformation.estadoNascimento = event.value.sigla;
    }

    setPosicao(event: any) {
        console.log(event.value.value);
        // this.identificationInformation.posicao = event.value.value;
    }

    setSituacao(event: any) {
        console.log(event.value.value);
        // this.identificationInformation.situacao = event.value.value;
    }

    nextPidade() {
        // console.log(this.identificationInformation);
        if (this.identificationInformation.nome && this.identificationInformation.apelido) {
            this.ticketService.ticketInformation.identificationInformation = this.identificationInformation;
            // console.log(this.ticketService.ticketInformation.identificationInformation);
            this.router.navigate(['cadastros/cadastro-fornecedor', { outlets: { one: ['address'] } }]);
            return;
        }

        this.submitted = true;
    }
}
