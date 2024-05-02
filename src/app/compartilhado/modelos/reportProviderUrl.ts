import { AddressProvider } from "./address-provider";
import { ImageProvider } from "./Image-provider";
import { Rekognition } from "./rekognition";

export class DataProvider {
    baseURL: string = '';
    imageURL: string = '';
    similarity: string = '';
  
    static create(): DataProvider {
      return new DataProvider();
    }
  }
  
  export class ReportProviderUrl {
    providerName: string = '';
    baseURL: string = '';
    imageURL: string = '';
    similarity: string = '';
    totalQuantidade: string = '';
    count: number = 0; // Propriedade opcional para a contagem

    providerNames: { [key: string]: DataProvider[] } = {};
  
    static create(): ReportProviderUrl {
      return new ReportProviderUrl();
    }
  
    addProvider(name: string, provider: DataProvider): void {
      if (!this.providerNames[name]) {
        this.providerNames[name] = [];
      }
      this.providerNames[name].push(provider);
    }
  
    toJSON(): string {
      return JSON.stringify(this.providerNames);
    }

    
  }
