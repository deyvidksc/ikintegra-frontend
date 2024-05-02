import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) {}

  async getImageAsBase64(imagePath: string): Promise<string> {
    const response = await this.http.get(imagePath, { responseType: 'blob' }).toPromise();
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject; 
      if (response) {
        reader.readAsDataURL(response);
      } else {
        reject(new Error('Failed to load image.'));
      }
    });
  }
}
