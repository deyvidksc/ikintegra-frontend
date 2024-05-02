import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import FaceScanner from 'facescanner';

@Component({
  selector: 'app-face-scanner',
  templateUrl: './face-scanner.component.html',
  styleUrls: ['./face-scanner.component.css']
})
export class FaceScannerComponent implements OnInit {
  @ViewChild('videoElement') videoElement: ElementRef;
  faceScanner: any;

  ngOnInit() {
    this.faceScanner = new FaceScanner();

    // Inicializar o scanner de faces
    this.faceScanner.initialize().then(() => {
      // Iniciar a câmera
      this.faceScanner.startCamera(this.videoElement.nativeElement);
    });
  }

  captureFace() {
    // Capturar a face atual
    const faceData = this.faceScanner.captureFace();
    console.log(faceData);
  }
}
