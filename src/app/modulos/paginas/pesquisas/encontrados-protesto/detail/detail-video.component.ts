import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService, SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { ActivatedRoute, Router } from '@angular/router';
import { Channel } from 'src/app/compartilhado/modelos/channel';
import { YoutubeVideo } from 'src/app/compartilhado/modelos/youtube-video';
import { ChannelService } from 'src/app/compartilhado/servicos/channel.service';
import { YoutubeVideoService } from 'src/app/compartilhado/servicos/youtube.video.service';
import { PaginateResponse } from 'src/app/compartilhado/modelos/paginate';

@Component({
    templateUrl: './detail-video.component.html'
})
export class DetailVideoComponent implements OnInit {
    channel: Channel = {};

    currentPage: number = 0;
    pageSize: number = 12;
    totalCount: number = 0;

    loading: boolean = true;
    videos: YoutubeVideo[] = [];

    constructor(private channelService: ChannelService,
        private youtubeVideoService: YoutubeVideoService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.preencherTabela();
    }


    private preencherTabela(): void {
        this.loading = true;
        let idChannel: string = this.receiveParamsIdProvider();
        this.channel = this.channelService.getChannel();

        this.youtubeVideoService.consultar(idChannel, this.pageSize, this.currentPage).subscribe(data => {
            const paginate = data as PaginateResponse<YoutubeVideo>;

            this.currentPage = paginate.pageIndex!;
            this.totalCount = paginate.totalCount;

            this.videos = paginate.items;

            this.loading = false;
        });

    }

    backPage() {
        this.router.navigate(["/pesquisas/pesquisa-canal"]);
    }

    navigateToVideo(video: YoutubeVideo) {

    }

    private receiveParamsIdProvider() {
        let idChannel: string = '';
        this.activatedRoute.params.subscribe(params => {
            idChannel = params['valor'];
        });
        return idChannel;
    }

    onFilter(dv: DataView, event: Event) {
        dv.filter((event.target as HTMLInputElement).value, 'contains');
    }

    loadData(event: LazyLoadEvent) {
        this.loading = true;

        this.currentPage = Math.floor(event.first! / event.rows!);
        this.pageSize = event.rows as number;

        this.preencherTabela();
    }

    abbreviateDuration(duration: number): string {
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        const seconds = duration % 60;

        let durationString = "";
        if (hours > 0) {
            durationString += hours + "h ";
        }
        if (minutes > 0) {
            durationString += minutes + "m ";
        }
        if (seconds > 0) {
            durationString += seconds + "s";
        }

        return durationString;
    }

    formatUploadDate(uploadDate: string) {
        const date = new Date(uploadDate);
        if (isNaN(date.getTime())) {
            return null;
        }
        return date.toLocaleDateString();
    }

    abbreviateNumber(value: number) {
        if (value === null)
          return 0;

        const suffixes = ["", "K", "M", "B", "T"];
        const suffixNum = Math.floor(Math.log10(value) / 3);
        let shortValue = value / Math.pow(1000, suffixNum);
        shortValue = parseFloat(shortValue.toFixed(1)); // Arredonda para uma casa decimal

        return shortValue + suffixes[suffixNum];
      }

    handleImageError(event: any) {
        event.target.src = '../assets/demo/images/error/no-video.png';
    }
}
