import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncontradosBaixaComponent } from './encontrados-baixa.component';
import { EncontradosBaixaRoutingModule } from './encontrados-baixa-routing.module';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { TagModule } from 'primeng/tag';
import { SearchChannelResolver } from 'src/app/compartilhado/resolvers/search-channel.resolver';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SelectButtonModule } from 'primeng/selectbutton';
import { Divider, DividerModule } from 'primeng/divider';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		EncontradosBaixaRoutingModule,
		DataViewModule,
		PickListModule,
		OrderListModule,
		InputTextModule,
		DropdownModule,
		RatingModule,
		ButtonModule,
		TableModule,
		ToolbarModule,
        ToastModule,
		TagModule,
        DialogModule,
        TooltipModule,
        CalendarModule,
        ReactiveFormsModule,
        InputGroupModule,
        InputGroupAddonModule,
        DividerModule,
	],
	declarations: [EncontradosBaixaComponent],
	providers: [SearchChannelResolver, DatePipe],
})
export class EncontradosBaixaModule { }
