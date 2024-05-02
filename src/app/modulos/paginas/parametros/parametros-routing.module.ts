import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'parametros-filial', data: { breadcrumb: 'parametros-filial' }, loadChildren: () => import('./parametros-filial/parametros-filial.module').then(m => m.ParametrosFilialModule) },
        { path: '**', redirectTo: '/notfound' } // Esta rota deve ser a última na lista
    ])],
    exports: [RouterModule]
})
export class ParametrosRoutingModule { }
