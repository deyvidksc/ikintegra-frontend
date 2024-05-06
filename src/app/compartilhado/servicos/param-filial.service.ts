import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../modelos/customer';
import { environment } from 'src/environments/environment';
import { ParamFilial } from '../modelos/param-filial';
import { PaginateResponse } from '../modelos/paginate';
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class ParamFilialService {
    private url = environment.urlBase + "/ink/buscar-param-filial";

    constructor(private http: HttpClient) { }

    listar(nome: string, filial: string, page: number, pageSize: number): Observable<PaginateResponse<ParamFilial>> {
        const url = `${this.url}?nome=${nome}&filial=${filial}&pagina=${page}&tamanhoPagina=${pageSize}`;
        return this.http.get<PaginateResponse<ParamFilial>>(url);
      }
}
