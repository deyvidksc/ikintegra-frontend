import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { ResultadoPaginado } from "../modelos/resultado-paginado";
import { Channel } from "../modelos/channel";
import { PaginateResponse } from "../modelos/paginate";

@Injectable({ providedIn: "root" })
export class ChannelService {
    private url = environment.urlBase + "medias/channels";

    private channel: Channel = {};

    setChannel(channel: Channel) {
      this.channel = channel;
    }

    getChannel() {
      return this.channel;
    }

    constructor(private http: HttpClient) { }

    pesquisar(channel: Channel): Observable<Channel[]> {
        return this.http.post<Channel[]>(`${this.url}`, channel);
    }

    inserir(name: string): Observable<Channel> {
        return this.http.post<Channel>(`${this.url}/${name}`, null);
    }

    listar(pageSize: number = 10, pageIndex: number = 0): Observable<PaginateResponse<Channel>> {
        const url = `${this.url}?pageSize=${pageSize}&pageIndex=${pageIndex}`;
        return this.http.get<PaginateResponse<Channel>>(url);
    }
}
