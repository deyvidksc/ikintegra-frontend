import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'encontrados-protesto', data: { breadcrumb: 'encontrados-protesto' }, loadChildren: () => import('./encontrados-protesto/encontrados-protesto.module').then(m => m.EncontradosProtestoModule) },
        { path: 'enviados-protesto', data: { breadcrumb: 'encontrados-protesto' }, loadChildren: () => import('./enviados-protesto/enviados-protesto.module').then(m => m.EnviadosProtestoModule) },
        { path: 'encontrados-protestados', data: { breadcrumb: 'encontrados-protestados' }, loadChildren: () => import('./encontrados-protestados/encontrados-protestados.module').then(m => m.EncontradosProtestadosModule) },
        { path: 'atualizados-protesto', data: { breadcrumb: 'atualizados-protesto' }, loadChildren: () => import('./atualizados-protesto/atualizados-protesto.module').then(m => m.AtualizadosProtestoModule) },
        { path: 'titulos-baixados', data: { breadcrumb: 'titulos-baixados' }, loadChildren: () => import('./titulos-baixados/titulos-baixados.module').then(m => m.TitulosBaixadosModule) },
        { path: 'encontrados-baixa', data: { breadcrumb: 'encontrados-baixa' }, loadChildren: () => import('./encontrados-baixa/encontrados-baixa.module').then(m => m.EncontradosBaixaModule) },
        { path: 'encontrados-baixa-manual', data: { breadcrumb: 'encontrados-baixa-manual' }, loadChildren: () => import('./encontrados-baixa-manual/encontrados-baixa-manual.module').then(m => m.EncontradosBaixaManualModule) },
        { path: 'enviados-baixa-manual', data: { breadcrumb: 'enviados-baixa-manual' }, loadChildren: () => import('./enviados-baixa-manual/enviados-baixa-manual.module').then(m => m.EnviadosBaixaManualModule) },

        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PesquisasRoutingModule { }
