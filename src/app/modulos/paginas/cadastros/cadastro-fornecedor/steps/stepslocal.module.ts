import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificationComponent } from './identification.component';
import { AddressComponent } from './address.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { StepsModule } from 'primeng/steps';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import {RadioButtonModule} from 'primeng/radiobutton';  
import { TicketService } from '../../../../../compartilhado/servicos/ticket.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { AuthenticationComponent } from './authentication.component';
import { WebcamModule } from 'ngx-webcam'; 
import { PicturesComponent } from './pictures.component';
import { ConfirmationComponent } from './confirmation.component';
import { CalendarModule } from 'primeng/calendar';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common'; 
import { FieldsetModule } from 'primeng/fieldset';
import { KnobModule } from 'primeng/knob';


registerLocaleData(localePt);

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      InputTextModule, 
      ButtonModule,
      TableModule,
      StepsModule, 
      ToolbarModule,
      ToastModule,
      CardModule,
      DropdownModule,
      CheckboxModule,
      InputMaskModule,
      RadioButtonModule,
      WebcamModule,
      CalendarModule,
      FieldsetModule,
      KnobModule, 
    ],
   exports: [RouterModule],
  declarations:[IdentificationComponent, 
                AddressComponent, 
                AuthenticationComponent, 
                PicturesComponent,
                ConfirmationComponent],
  providers: [ TicketService, { provide: LOCALE_ID, useValue: 'pt' } ],
  
  
})
export class  StepsLocalModule { }
