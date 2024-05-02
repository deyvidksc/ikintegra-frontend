import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AtualizadosProtestoComponent } from './atualizados-protesto.component';

import { DetailVideoModule  } from './detail/detail-video.module';
import { DetailVideoComponent } from './detail/detail-video.component';

@NgModule({
	imports: [RouterModule.forChild([
		{
			path: '', component: AtualizadosProtestoComponent,
		},
        {
            path: 'detail-video/:valor',
            component: DetailVideoComponent,

        }
	])],
	exports: [RouterModule],

})
export class AtualizadosProtestoRoutingModule { }
