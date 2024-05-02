import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SeverityType } from '../constantes/severity-type';


@Injectable()
export class TicketService {

  ticketInformation = {
    identificationInformation: {
      nome: '',
      apelido: '',
      idade: null,
      genero: '',
      ultimoClube: '',
      situacao: '',
      documento: '',
      posicao: '',
      tipoDocumento: '',
      dataNascimento: '',
      cidadeNascimento: '',
      estadoNascimento: '',
    },
    addressInformation: {
      cep: '',
      endereco: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      pais: '',

    },
    authenticationInformation: {
      cardholderName: '',
      cardholderNumber: '',
      date: '',
      cvv: '',
      remember: false,
      confirmarSenha: '',
      senha: '',
      telefone: '',
      email: '',
    }, picturesInformation: {
      images: [{
        imageType: '',
        image: ''
      }],
    },

  };

  resetTicketInformation() {
    this.ticketInformation = {
      identificationInformation: {
        nome: '',
        apelido: '',
        idade: null,
        genero: '',
        ultimoClube: '',
        situacao: '',
        documento: '',
        posicao: '',
        tipoDocumento: '',
        dataNascimento: '',
        cidadeNascimento: '',
        estadoNascimento: '',
      },
      addressInformation: {
        cep: '',
        endereco: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        pais: '',
      },
      authenticationInformation: {
        cardholderName: '',
        cardholderNumber: '',
        date: '',
        cvv: '',
        remember: false,
        confirmarSenha: '',
        senha: '',
        telefone: '',
        email: '',
      },
      picturesInformation: {
        images: [
          {
            imageType: '',
            image: '',
          },
        ],
      },
    };
  }

  private confirmationComplete = new Subject<any>();

  confirmationComplete$ = this.confirmationComplete.asObservable();

  getTicketInformation() {
    return this.ticketInformation;
  }

  setTicketInformation(ticketInformation: any) {
    this.ticketInformation = ticketInformation;
  }

  complete(typeMessage: SeverityType) {
      this.confirmationComplete.next([this.ticketInformation.identificationInformation, typeMessage]); 
  }

}
