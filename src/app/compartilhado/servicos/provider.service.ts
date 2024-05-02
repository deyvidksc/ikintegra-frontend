import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { ResultadoPaginado } from "../modelos/resultado-paginado";
import { Provider } from "../modelos/provider";
import { PaginateResponse } from "../modelos/paginate";

@Injectable({ providedIn: "root" })
export class ProviderService {
    private url = environment.urlBase + "providers";

    private provider: Provider = {};

    setProvider(provider: Provider) {
      this.provider = provider;
    }

    getProvider() {
      return this.provider;
    }

    constructor(private http: HttpClient) { }

    pesquisar(provider: Provider): Observable<Provider[]> {
        return this.http.post<Provider[]>(`${this.url}`, provider);
    }

    consultar(id: string, pageSize?: number, paginationToken?: string): Observable<PaginateResponse<Provider>> {
        let url = `${this.url}/${id}`;

        if (pageSize)
            url += `?pageSize=${pageSize}&paginationToken=${paginationToken}`

        return this.http.get<PaginateResponse<Provider>>(url);
    }

    listar(somenteprovidersBusca: boolean = false): Observable<ResultadoPaginado<Provider>> {
        return this.http.get<ResultadoPaginado<Provider>>(`${this.url}/?pageSize=99999&somenteBuscas=${somenteprovidersBusca}`);
    }

    listarProvider(pageSize: number = 10, pageIndex: number = 0): Observable<PaginateResponse<Provider>> {
        const url = `${this.url}?pageSize=${pageSize}&pageIndex=${pageIndex}`;

        return this.http.get<PaginateResponse<Provider>>(url);
    }

    deletar(codigo: number): Observable<boolean> {
        return this.http.delete<boolean>(`${this.url}/${codigo}`);
    }

    inserir(provider: Provider): Observable<Provider> {
        // const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<Provider>(`${this.url}`, JSON.stringify(provider));
    }

    alterar(provider: Provider): Observable<Provider> {
        return this.http.put<Provider>(`${this.url}`, provider);
    }

    listarClasses(): Observable<classeId[]> {
        return this.http.get<classeId[]>(`${this.url}/listar`);
    }
}

type classeId = {
    id: number;
    nome: string;
};
