import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Galleria } from 'primeng/galleria';
import { Galeria } from '../modelos/galeria';

@Injectable()
export class Galeriaservice {

    constructor(private http: HttpClient) { }

    getGaleriasSmall() {
        return this.http.get<any>('https://s0bdujq0t9.execute-api.us-east-1.amazonaws.com/prod/providers')
            .toPromise()
            .then(res => res.data as Galleria[])
            .then(data => data);
    }

    getGalerias() {
        return this.http.get<any>('assets/demo/data/galerias.json')
            .toPromise()
            .then(res => res.data as Galeria[])
            .then(data => data);
    }

    getGaleriasMixed() {
        return this.http.get<any>('assets/demo/data/galerias-mixed.json')
            .toPromise()
            .then(res => res.data as Galeria[])
            .then(data => data);
    }

    getGaleriasWithOrdersSmall() {
        return this.http.get<any>('https://s0bdujq0t9.execute-api.us-east-1.amazonaws.com/prod/providers')
            .toPromise()
            .then(res => res.data as Galeria[])
            .then(data => data);
    }
}
