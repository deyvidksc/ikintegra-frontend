import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './compartilhado/componentes/notfound/notfound.component';
import { AppLayoutComponent } from "./modulos/layout/app.layout.component";
import { IdentificationComponent } from './modulos/paginas/cadastros/cadastro-fornecedor/steps/identification.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./modulos/paginas/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    //  { path: 'uikit', loadChildren: () => import('./compartilhado/componentes/uikit/uikit.module').then(m => m.UIkitModule) },
                     { path: 'pesquisas', loadChildren: () => import('./modulos/paginas/pesquisas/pesquisas.module').then(m => m.PesquisasModule) },
                     { path: 'cadastros', loadChildren: () => import('./modulos/paginas/cadastros/cadastros.module').then(m => m.CadastrosModule) },
                     { path: 'parametros', loadChildren: () => import('./modulos/paginas/parametros/parametros.module').then(m => m.ParametrosModule) },

                     // { path: 'utilities', loadChildren: () => import('./compartilhado/componentes/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    // { path: 'documentation', loadChildren: () => import('./compartilhado/componentes/documentation/documentation.module').then(m => m.DocumentationModule) },
                    // { path: 'blocks', loadChildren: () => import('./compartilhado/componentes/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    // { path: 'pages', loadChildren: () => import('./compartilhado/componentes/pages/pages.module').then(m => m.PagesModule) },
                  ]
            },
            { path: 'auth', loadChildren: () => import('./compartilhado/componentes/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./compartilhado/componentes/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
