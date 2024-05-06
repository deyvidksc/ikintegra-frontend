import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'parametros-filial', data: { breadcrumb: 'parametros-filial' }, loadChildren: () => import('./parametros-filial/parametros-filial.module').then(m => m.ParametrosFilialModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class ParametrosRoutingModule { }
