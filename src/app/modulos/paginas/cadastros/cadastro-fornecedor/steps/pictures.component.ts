import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TicketService } from '../../../../../compartilhado/servicos/ticket.service';
import { Router } from '@angular/router';
import { WebcamComponent, WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { positionsOrder } from 'src/app/compartilhado/constantes/images-type';
import { ImageProvider } from 'src/app/compartilhado/modelos/Image-provider';
import { FacePosition, findEnumKeyByValue } from 'src/app/compartilhado/constantes/faces-posicion';

@Component({
  template: `
        <div class="stepsdemo-content">
            <p-card>
                <ng-template pTemplate="title"> Fotos </ng-template>
                <ng-template pTemplate="subtitle">imagens do rosto </ng-template>
                <ng-template pTemplate="content">
                    <div class="p-fluid formgrid grid" >
                        <div class="field col-12 flex justify-content-center" >

                            <div class="p-card col-4" #webcamContainer >
                                <webcam class="flex justify-content-center" [height]="webcamHeight" [width]="webcamWidth"
                                        [trigger]="triggerObservable"
                                        (imageCapture)="handleImage($event)" *ngIf="showWebcam"
                                        [allowCameraSwitch]="allowCameraSwitch" [switchCamera]="nextWebcamObservable"
                                        [videoOptions]="videoOptions"
                                        [imageQuality]="1"
                                        (cameraSwitched)="cameraWasSwitched($event)"
                                        (initError)="handleInitError($event)"
                                ></webcam>
                            </div>
                            <div class="p-card col-8 flex justify-content-center">
                              <div class="col-6 flex justify-content-center">
                                <p-knob [(ngModel)]="valueKnob" [readonly]="true" [step]="5" [size]="180">
                                </p-knob>
                                <label>{{ labelKnob }}</label>
                              </div>


                            </div>
                        </div>


                      <div class="card col-12 md-4 flex justify-content-center">
                        <p-button class="actionBtn" (click)="triggerSnapshot();" [disabled]="this.imagesLength-1 === 5">Capturar Foto</p-button>
                      </div>
                     <!-- <div class="card col-4">
                        <p-button class="actionBtn" (click)="triggerSnapshot();" [disabled]="this.imagesLength-1 !== 5">Novo</p-button>
                      </div>-->

                    </div>
                </ng-template>
                <ng-template pTemplate="footer">
                    <div class="grid grid-nogutter justify-content-between">
                        <p-button label="Anterior" (onClick)="prevPage()" icon="pi pi-angle-left"></p-button>
                        <p-button label="Próxima" (onClick)="nextPage()" icon="pi pi-angle-right" iconPos="right"></p-button>
                    </div>
                </ng-template>
            </p-card>
        </div>
        `
})

export class PicturesComponent implements OnInit {

  @ViewChild('webcamContainer') webcamContainer: ElementRef = new ElementRef(null);
  webcamHeight: number = 0;
  webcamWidth: number = 0;
  positionsOrder: any[] = positionsOrder;
  addresss: any[] = [];
  picturesInformation: any;
  valueKnob: number = 0;
  labelKnob: string = positionsOrder[0];
  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string = '';
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };

  public errors: WebcamInitError[] = [];
  // latest snapshot
  public webcamImage: WebcamImage = new WebcamImage('', '', new ImageData(1, 1, undefined));
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  images: WebcamImage[] = [];

  constructor(public ticketService: TicketService, private router: Router) { }


  ngOnInit() {
    this.ticketService.ticketInformation.picturesInformation.images = [];
    this.picturesInformation = this.ticketService.ticketInformation.picturesInformation;
   }

  ngOnDestroy(): void {
    this.showWebcam = false;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.calculateWebcamSize();
    });
  }

  calculateWebcamSize() {
    const container = this.webcamContainer.nativeElement;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Aqui você pode definir a lógica para calcular a altura e a largura desejadas com base no tamanho da div pai.
    // Por exemplo, você pode definir proporções ou ajustar o tamanho de acordo com o aspect ratio da webcam.
    console.log("containerWidth " + containerWidth + " containerHeight" + containerHeight);
    // Exemplo: Definir a altura como 80% da altura do container e a largura como 60% da largura do container.
    this.webcamHeight = containerHeight * 0.9;
    this.webcamWidth = containerWidth * 0.9;
  }


  public habilitarParaRefazer(): void {
    this.showWebcam = true;
    this.images = [];
  }

  imagesLength: number = 1;

  public triggerSnapshot(): void {
    this.trigger.next();

    if (this.imagesLength <= positionsOrder.length) {
      if (this.webcamImage.imageAsDataUrl) {
        this.valueKnob += 20;
        this.labelKnob = positionsOrder[this.imagesLength - 1];
        let imageProvider: ImageProvider = ImageProvider.create();
        const imageType = findEnumKeyByValue(FacePosition, positionsOrder[this.imagesLength - 1]);
        imageProvider.imageType = imageType;
        imageProvider.image = this.webcamImage.imageAsDataUrl;
        this.picturesInformation.images.push(imageProvider as any);
        this.imagesLength += 1;
      }
    }

    if (this.imagesLength-1 === 5) {
      // Finalize a câmera aqui
      this.showWebcam = false;
      this.ticketService.ticketInformation.picturesInformation = this.picturesInformation;
      // for (let index = 0; index < this.images.length; index++) {
      //   console.info(positionsOrder[index], this.images[index]);

      // }
    }

  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }


  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    // console.info('received webcam image', webcamImage);

    this.webcamImage = webcamImage;
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

  nextPage() {
    this.ticketService.ticketInformation.picturesInformation = this.picturesInformation;
    console.log(this.ticketService.ticketInformation.picturesInformation.images.length );
    this.router.navigate(['cadastros/cadastro-fornecedor', { outlets: { one: ['confirmation'] } }]);

  }

  prevPage() {
    // this.router.navigate(['steps/identification']);
    this.showWebcam = false;
    this.router.navigate(['cadastros/cadastro-fornecedor', { outlets: { one: ['authentication'] } }]);

  }
}
