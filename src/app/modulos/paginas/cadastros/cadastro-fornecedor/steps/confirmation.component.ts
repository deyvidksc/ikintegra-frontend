import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../../../compartilhado/servicos/ticket.service';
import { Router } from '@angular/router';
import { ProviderService } from 'src/app/compartilhado/servicos/provider.service';
import { Provider } from 'src/app/compartilhado/modelos/provider';
import { AddressProvider } from 'src/app/compartilhado/modelos/address-provider';
import { catchError } from 'rxjs/operators';
import { SeverityType } from 'src/app/compartilhado/constantes/severity-type';
import { of } from 'rxjs';
@Component({
    template: `
        <div class="stepsdemo-content">
            <p-card>
                <ng-template pTemplate="title"> Confirmação </ng-template>
                <ng-template pTemplate="subtitle"> Detalhes </ng-template>
                <ng-template pTemplate="content">
                    <p-fieldset legend="Identificação" class="field col-12">
                        <div class="p-fluid formgrid grid">
                            <div class="field col-12 md:col-4">
                                <label for="nome" > Nome: </label>
                                <b > {{ticketInformation.identificationInformation.nome.toUpperCase()}} </b>
                            </div>
                            <div class="field col-12 md:col-4">
                                <label for="apelido">Apelido: <b>{{ticketInformation.identificationInformation.apelido.toUpperCase()}} </b></label>
                            </div>
                            <div class="field col-12 md:col-4">
                                <label for="genero">Gênero: <b>{{ticketInformation.identificationInformation.genero.value}} </b></label>
                            </div>
                            <div class="field col-12 md:col-4">
                                <label for="ultimoClube">Último Clube: <b>{{ticketInformation.identificationInformation.ultimoClube.toUpperCase()}} </b></label>
                            </div>
                            <div class="field col-12 md:col-4">
                                <label for="situacao">Situação: <b>{{ticketInformation.identificationInformation.situacao.value}} </b></label>
                            </div>
                            <div class="field col-12 md:col-4">
                                <label for="posicao">Posição: <b>{{ticketInformation.identificationInformation.posicao.value}} </b></label>
                            </div>
                        </div>
                    </p-fieldset>
                    <p-fieldset legend="Endereço"  class="field col-12">
                        <div class="p-fluid formgrid grid">
                            <div class="field col-12 md:col-4">
                                <label for="endereco" > Endereço:
                                    <b> {{ticketInformation.addressInformation.endereco.toUpperCase()}} </b>
                                </label>
                            </div>
                            <div class="field col-12 md:col-4">
                                <label for="numero" >Número: </label>
                                <b > {{ticketInformation.addressInformation.numero.toUpperCase()}} </b>
                            </div>
                            <div class="field col-12 md:col-4">
                                <label for="numero" >Número:
                                    <b > {{ticketInformation.addressInformation.numero.toUpperCase()}} </b>
                                </label>
                            </div>
                            <div class="field col-12 md:col-4">
                                <label for="complemento" >Complemento:
                                    <b > {{ticketInformation.addressInformation.complemento.toUpperCase()}} </b>
                                </label>
                            </div>
                        </div>
                    </p-fieldset>
                    <p-fieldset legend="Autenticação"  class="field col-12">
                        <div class="p-fluid formgrid grid">
                            <div class="field col-4 md:col-4">
                                <label for="Age">Telefone:
                                    <b>{{ ticketInformation.authenticationInformation.telefone ? ticketInformation.authenticationInformation.telefone : ' - ' }}</b>
                                </label>
                            </div>
                            <div class="field col-4 md:col-4">
                                <label for="Age">Email:
                                    <b>{{ ticketInformation.authenticationInformation.email ? ticketInformation.authenticationInformation.email : ' - ' }}</b>
                                </label>
                            </div>
                        </div>
                    </p-fieldset>
                    <p-fieldset legend="Fotos"  class="field col-12">
                        <div class="p-fluid formgrid grid">
                            <div class="field col-4 md:col-4">
                                <label  for="front"> Imagen de Front: <b class="pi pi-check" > </b></label>
                            </div>
                            <div class="field col-4 md:col-4">
                                <label for="ladoDireito"> Imagem lado Direito: <b class="pi pi-check" > </b></label>
                            </div>
                            <div class="field col-4 md:col-4">
                                <label for="ladoEsquerdo"> Imagem Lado Esquerdo: <b class="pi pi-check" > </b></label>

                            </div>
                            <div class="field col-4 md:col-4">
                                <label for="deCima"> Imagen de Cima:  <b class="pi pi-check" > </b></label>
                            </div>
                            <div class="field col-4 md:col-4">
                                <label for="deCima"> Imagen de Baixo:  <b class="pi pi-check" > </b></label>
                            </div>
                        </div>
                    </p-fieldset>
                </ng-template>
                <ng-template pTemplate="footer">
                    <div class="grid grid-nogutter justify-content-between">
                        <p-button label="Anterior" (onClick)="prevPage()" icon="pi pi-angle-left"></p-button>
                        <p-button label="Concluir" (onClick)="complete()" icon="pi pi-angle-right" iconPos="right" styleClass="p-button-success"  [loading]="loading" (click)="load()"></p-button>
                    </div>
                </ng-template>
            </p-card>
        </div>
    `
})
export class ConfirmationComponent implements OnInit {
    ticketInformation: any;

    loading: boolean = false;

    constructor(public ticketService: TicketService,
        private router: Router,
        private providerService: ProviderService) { }

    ngOnInit() {
        this.ticketInformation = this.ticketService.ticketInformation;
    }

    load() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
        }, 2000);
    }


    complete() {
        this.loading = true;
        let provider: Provider = Provider.create();
        this.receiveAddress(provider);
        this.receiveIdentification(provider);
        this.receiveAuthentication(provider);
        this.receivePictures(provider);

        provider.documentNumber = provider.documentNumber?.replace(/\D/g, '');
        console.log(provider);
        this.providerService.inserir(provider)
            .pipe(
                catchError((error) => {
                    this.loading = false;
                    console.error('Ocorreu um erro ao inserir o provedor:', error);
                    this.ticketService.complete(SeverityType.Error);
                    return of(''); // Retorne um Observable vazio usando o operador `of`
                })
            )
            .subscribe(valor => {
                if (valor) {
                    this.loading = false;
                    console.log('Provedor inserido com sucesso:', valor);
                    this.router.navigate(['/pesquisas/pesquisa-fornecedor']);
                    this.ticketService.complete(SeverityType.Success);

                } else {
                    this.loading = false;
                    this.ticketService.complete(SeverityType.Info);
                    console.log('Erro ao inserir provedor. Valor padrão retornado.');
                }
            }, error => {
                this.loading = false;
                console.error('asdasda:', error);
                this.ticketService.complete(SeverityType.Error);
            });
    }

    private receivePictures(provider: Provider) {
        provider.images = this.ticketInformation.picturesInformation.images;
    }

    private receiveAuthentication(provider: Provider) {
        provider.phone = this.ticketInformation.authenticationInformation.telefone;
        provider.email = this.ticketInformation.authenticationInformation.email;
    }

    private receiveIdentification(provider: Provider) {
        provider.birthCity = this.ticketInformation.identificationInformation.cidadeNascimento;
        // provider.image = this.ticketInformation.identificationInformation.cidadeNascimento;
        let birthDateFormatted: string;

        if (this.ticketInformation.identificationInformation.dataNascimento) {
            birthDateFormatted = new Date(this.ticketInformation.identificationInformation.dataNascimento).toISOString().split('T')[0];
        } else {
            birthDateFormatted = '1900-01-01'; // Data de 01-01-1900 como valor padrão para caso de valor vazio
        }
        provider.birthDate = birthDateFormatted;
        provider.birthState = this.ticketInformation.identificationInformation.estadoNascimento.sigla;
        provider.documentNumber = this.ticketInformation.identificationInformation.documento;
        provider.documentType = this.ticketInformation.identificationInformation.tipoDocumento.value;
        provider.gender = this.ticketInformation.identificationInformation.genero.value;
        provider.isActive = 'ACTIVE';
        provider.lastClub = this.ticketInformation.identificationInformation.ultimoClube;
        provider.position = this.ticketInformation.identificationInformation.posicao.value;
        provider.providerName = this.ticketInformation.identificationInformation.nome;
        provider.situation = this.ticketInformation.identificationInformation.situacao.value;
        provider.nickname = this.ticketInformation.identificationInformation.apelido;
    }

    private receiveAddress(provider: Provider) {
        let address: AddressProvider = AddressProvider.create();
        address.addressNumber = this.ticketInformation.addressInformation.numero;
        address.city = this.ticketInformation.addressInformation.cidade;
        address.complement = this.ticketInformation.addressInformation.complemento;
        address.country = this.ticketInformation.addressInformation.pais;
        address.district = this.ticketInformation.addressInformation.bairro;
        address.state = this.ticketInformation.addressInformation.estado.sigla;
        address.street = this.ticketInformation.addressInformation.endereco;
        address.zipCode = this.ticketInformation.addressInformation.cep;
        provider.address = address;
    }

    prevPage() {
        this.router.navigate(['cadastros/cadastro-fornecedor', { outlets: { one: ['pictures'] } }]);

    }
}
