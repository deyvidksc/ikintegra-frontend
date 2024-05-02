import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { ResultadoPaginado } from "../modelos/resultado-paginado";
import { Titulo } from "../modelos/titulo";
import { PaginateResponse } from "../modelos/paginate";

@Injectable({ providedIn: "root" })
export class TituloService {
    private url = environment.urlBase + "/ink/buscar-titulos";

    private titulo: Titulo = {};

    setTitulo(titulo: Titulo) {
      this.titulo = titulo;
    }

    getTitulo() {
      return this.titulo;
    }

    constructor(private http: HttpClient) { }

    pesquisar(titulo: Titulo): Observable<Titulo[]> {
        return this.http.post<Titulo[]>(`${this.url}`, titulo);
    }

    inserir(name: string): Observable<Titulo> {
        return this.http.post<Titulo>(`${this.url}/${name}`, null);
    }

    listar(
      status: number = 2,
      dataInicio: string,
      dataFinal: string,
      pagina: number = 1,
      tamanhoPagina: number = 10,
      idRegraIntegracao: number = 0
    ): Observable<PaginateResponse<Titulo>> {
      const url = `${this.url}?status=${status}&dataInicio=${dataInicio}&dataFinal=${dataFinal}&pagina=${pagina}&tamanhoPagina=${tamanhoPagina}&idRegraIntegracao=${idRegraIntegracao}`;
      return this.http.get<PaginateResponse<Titulo>>(url);
    }


}
