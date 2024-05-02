import { of as observableOf, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

import { Provider } from '../modelos/provider';
import { ProviderService } from '../servicos/provider.service';
import { PaginateResponse } from '../modelos/paginate';
// import { MensagensService, Paginas } from '../integracao/utilitarios';
@Injectable()
export class SearchProviderResolver implements Resolve<PaginateResponse<Provider>> {
  constructor(private providerService: ProviderService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PaginateResponse<Provider>> {
    return this.providerService.listarProvider();
  }
}
