import { of as observableOf, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

import { Channel } from '../modelos/channel';
import { ChannelService } from '../servicos/channel.service';
import { PaginateResponse } from '../modelos/paginate';
@Injectable()
export class SearchChannelResolver implements Resolve<Observable<PaginateResponse<Channel>>> {
  constructor(private channelService: ChannelService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PaginateResponse<Channel>> {
    return this.channelService.listar();
  }
}
