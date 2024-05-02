import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Rekognition } from "../modelos/rekognition";
import { PaginateResponse } from "../modelos/paginate";

@Injectable({ providedIn: "root" })
export class RekognitionService {
    private url = environment.urlBase + "rekognitions";

    constructor(private http: HttpClient) { }

    consultar(providerId: string = '', pageSize: number = 10, pageIndex: number = 0): Observable<PaginateResponse<Rekognition>> {
        const url = `${this.url}/${providerId}?pageSize=${pageSize}&pageIndex=${pageIndex}`;

        return this.http.get<PaginateResponse<Rekognition>>(url);
    }

    reprocessar(): Observable<any> {
        return this.http.post(`${this.url}/reprocess`, null);
    }
}
