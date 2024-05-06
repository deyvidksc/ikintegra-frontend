import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, LazyLoadMeta, MessageService, SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { ActivatedRoute, Router } from '@angular/router';
import { Titulo } from 'src/app/compartilhado/modelos/titulo'
import { TituloService } from 'src/app/compartilhado/servicos/titulo.service';
import { catchError, of } from 'rxjs';
import { PaginateResponse } from 'src/app/compartilhado/modelos/paginate';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ParamFilial } from 'src/app/compartilhado/modelos/param-filial';
import { ParamFilialService } from 'src/app/compartilhado/servicos/param-filial.service';
export class Status {
    name: string = "Sucesso";
    value: number = 2;
}
@Component({
    templateUrl: './parametros-filial.component.html',
    providers: [MessageService, DatePipe]
})
export class ParametrosFilialComponent implements OnInit {
    listStatus: Status[] | undefined;
    paramFiliais: ParamFilial[] = [];
    filteredParamFiliais: ParamFilial[] = [];
    form: FormGroup;
    first = 0;
    rows = 10;
    // tituloDialog: boolean = false;
    paramFilial: any = {};
    submitted: boolean = false;
    loading: boolean = true;
    sortOptions: SelectItem[] = [];
    sortOrder: number = 0;
    sortField: string = '';
    currentPage: number = 1;
    pageSize: number = 10;
    totalCount: number = 0;

    constructor(private tituloService: TituloService,
        private messageService: MessageService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private datePipe: DatePipe,
        private fb: FormBuilder,
        private paramFilialService: ParamFilialService) {
        const dataAtual = new Date(); // Obtém a data atual
        const umaSemanaAtras = new Date(dataAtual.getTime() - 7 * 24 * 60 * 60 * 1000); // Calcula a data de uma semana atrás
        this.form = this.fb.group({
            nome: new FormControl(''),
            filial: new FormControl(''),
        });
    }

    ngOnInit() {
        this.preencherTabela();

        this.listStatus = [
            { name: 'Sucesso', value: 2 },
            { name: 'Recebido', value: 1 },
            { name: 'Erro', value: 0 },
            { name: 'Todos', value: 99 }
        ];

    }

    onSortChange(event: any) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    onFilter(dv: DataView, event: Event) {
        dv.filter((event.target as HTMLInputElement).value);
    }


    getFormValues(): { nome: string, filial: string } | null {
        if (this.form) {
            const nomeControl = this.form.get('nome');
            const filialControl = this.form.get('filial');
            if (nomeControl && filialControl) {
                let nome = nomeControl.value;
                let filial = filialControl.value;
                return { nome, filial };
            } else {
                console.error('Erro: Controles do formulário são nulos.');
                return null;
            }
        } else {
            console.error('Erro: Formulário é nulo.');
            return null;
        }
    }


    private preencherTabela(): void {
        const formValues = this.getFormValues();
        this.loading = true;
        if (formValues) {
            let page: number = this.currentPage;
            let pageSize: number = this.pageSize;
            this.paramFilialService.listar(formValues.nome, formValues.filial, page, pageSize).subscribe(listParamFilial => {
                const paginate = listParamFilial as PaginateResponse<ParamFilial>;
                this.currentPage = paginate.pageIndex!;
                this.totalCount = paginate.totalCount;
                this.paramFiliais = paginate.items;
                this.filteredParamFiliais = this.paramFiliais;
                this.loading = false;
                console.log(paginate);
            }, (error) => {
                console.error('Erro ao buscar títulos:', error);
                this.loading = false;
            });
        } else {
            console.error('Não foi possível obter os valores válidos do formulário.');
        }
    }
    pesquisar() {
        this.preencherTabela();
    }

    // savetitulo() {
    //     this.submitted = true;

    //     if (this.titulo.name?.trim()) {
    //         this.loading = true;

    //         this.tituloService.inserir(this.titulo.name)
    //             .pipe(
    //                 catchError((error) => {
    //                     this.loading = false;
    //                     console.error('Ocorreu um erro ao inserir o provedor:', error);
    //                     const errorMessage = error?.error?.Message || 'Erro desconhecido ao inserir o canal';
    //                     this.messageService.add({ severity: 'error', summary: 'Erro', detail: errorMessage, life: 3000 });
    //                     return of(''); // Retorne um Observable vazio usando o operador `of`
    //                 })
    //             )
    //             .subscribe(valor => {
    //                 if (valor) {
    //                     this.loading = false;
    //                     console.log('Canal cadastrado com sucesso:', valor);
    //                     this.tituloDialog = false;
    //                     this.titulo = {};
    //                     this.preencherTabela();
    //                     this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Canal cadastrado', life: 3000 });
    //                 }
    //             }, error => {
    //                 this.loading = false;
    //                 console.error('asdasda:', error);
    //                 const errorMessage = error?.error?.Message || 'Erro desconhecido ao inserir o canal';
    //                 this.messageService.add({ severity: 'error', summary: 'Erro', detail: errorMessage, life: 3000 });
    //             });
    //     }

    //     //this.loading = false;
    // }

    load() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
        }, 2000);
    }

    // hideDialog() {
    //     this.tituloDialog = false;
    //     this.submitted = false;
    // }

    // openNew() {
    //     this.titulo = {};
    //     this.submitted = false;
    //     this.tituloDialog = true;
    // }

    onGlobalFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
        this.filteredParamFiliais = this.paramFiliais.filter(paramFilial =>
            paramFilial.nome!.toLowerCase().includes(filterValue)
        );
    }

    loadData(event: LazyLoadMeta) {
        this.loading = true;
        console.log('event.first!: ' + event.first!)
        console.log('event.rows!: ' + event.rows!)

        // Verifica se event.first é um número válido e maior ou igual a zero
        if (typeof event.first === 'number' && event.first >= 0) {
            const firstIndex = event.first;

            // Verifica se event.rows é um número válido e maior que zero
            if (typeof event.rows === 'number' && event.rows > 0) {
                this.pageSize = event.rows;
            } else {
                // Define um valor padrão para pageSize caso event.rows não seja válido
                this.pageSize = 10; // ou qualquer outro valor padrão desejado
            }

            // Calcula a página atual com base em firstIndex e pageSize
            this.currentPage = Math.floor(firstIndex / this.pageSize) + 1;

            this.preencherTabela();
        } else {
            console.error('Erro: Valor inválido para event.first');
            // Lida com a situação em que event.first não é um número válido
        }

        // //this.currentPage = Math.floor(event.first! / event.rows!);
        // this.pageSize = event.rows as number;
        // this.currentPage = this.currentPage == 0 ? 1 : this.currentPage;
        // this.preencherTabela();
    }

    // getSeverity(status: number) {
    //     switch (status) {
    //         case 2:
    //             return 'success';
    //         case 1:
    //             return 'warning';
    //         case 0:
    //             return 'danger';
    //         default:
    //             return 'warning'; // ou qualquer valor que faça sentido para o seu aplicativo
    //     }
    // }

    // getValorSeverity(status: number) {
    //     switch (status) {
    //         case 2:
    //             return 'sucesso';
    //         case 1:
    //             return 'recebido';
    //         case 0:
    //             return 'erro';
    //         default:
    //             return 'warning'; // ou qualquer valor que faça sentido para o seu aplicativo
    //     }
    // }


    onRowEditInit(titulo: Titulo) {
        console.log(titulo)
        // this.clonedProducts[product.id as string] = { ...product };
    }

    onRowEditSave(titulo: Titulo) {
        console.log(titulo)
        // if (titulo.price > 0) {
        //     delete this.clonedProducts[product.id as string];
        //     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
        // } else {
        //     this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
        // }
    }

    onRowEditCancel(titulo: Titulo, index: number) {
        console.log(titulo)
        // this.products[index] = this.clonedProducts[product.id as string];
        // delete this.clonedProducts[product.id as string];
    }
}
