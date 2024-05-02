import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
        { path: 'cadastro-fornecedor',
          data: { breadcrumb: 'cadastro-fornecedor' },
          loadChildren: () => import('./cadastro-fornecedor/cadastro-fornecedor.module')
                    .then(m => m.CadastroFornecedorModule) },
        // { path: 'cadastro-cliente', data: { breadcrumb: 'cadastro-fornecedor' }, loadChildren: () => import('./cadastro-cliente/cadastro-cliente.module').then(m => m.CadastroClienteModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class CadastrosRoutingModule { }
