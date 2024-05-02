import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './modulos/layout/app.layout.module';
import { NotfoundComponent } from './compartilhado/componentes/notfound/notfound.component';
import { ProductService } from './compartilhado/servicos/product.service';
import { CountryService } from './compartilhado/servicos/country.service';
import { CustomerService } from './compartilhado/servicos/customer.service';
import { EventService } from './compartilhado/servicos/event.service';
import { IconService } from './compartilhado/servicos/icon.service';
import { NodeService } from './compartilhado/servicos/node.service';
import { PhotoService } from './compartilhado/servicos/photo.service';
import { RekognitionService } from './compartilhado/servicos/rekognition.service';
import { ProviderService } from './compartilhado/servicos/provider.service';
import { ChannelService } from './compartilhado/servicos/channel.service';
import { YoutubeVideoService } from './compartilhado/servicos/youtube.video.service';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, RekognitionService, ProviderService, ChannelService, YoutubeVideoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
