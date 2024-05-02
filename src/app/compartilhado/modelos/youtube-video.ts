export class YoutubeVideo {
    videoId: string = '';
    channelId: string = '';
    url: string = '';
    title: string = '';
    duration: number = 0;
    isDownloaded: boolean = false;
    uploadDate: string = '';
    engagement?: Engagement | null = null;
    imageBase64: string = '';
}

export class Engagement {
    dislikes: number = 0;
    views: number = 0;
    likes: number = 0;
}
