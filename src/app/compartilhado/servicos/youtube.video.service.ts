import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { PaginateResponse } from "../modelos/paginate";
import { YoutubeVideo } from "../modelos/youtube-video";

@Injectable({ providedIn: "root" })
export class YoutubeVideoService {
    private url = environment.urlBase + "medias/channels/videos";

    constructor(private http: HttpClient) { }

    consultar(channelId: string = '', pageSize: number = 10, pageIndex: number = 0): Observable<PaginateResponse<YoutubeVideo>> {
        const url = `${this.url}/${channelId}?pageSize=${pageSize}&pageIndex=${pageIndex}`;

        return this.http.get<PaginateResponse<YoutubeVideo>>(url);
    }
}
