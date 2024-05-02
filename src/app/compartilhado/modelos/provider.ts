import { AddressProvider } from "./address-provider";
import { ImageProvider } from "./Image-provider";
import { Rekognition } from "./rekognition";

export class Provider {
    birthCity?: string = '';
    birthDate?: string = '';
    documentType?: string = '';
    address?:  AddressProvider = new AddressProvider();
    email?: string = '';
    gender?: string = '';
    isActive?: string = '';
    lastClub?: string = '';
    nickname?: string = '';
    situation?: string = '';
    image?: string = '';
    documentNumber?: string = '';
    providerName?: string = '';
    images?: ImageProvider[] = [];
    id?: string = '';
    phone?: string = '';
    position?: string = '';
    birthState?: string = '';
    rekognitions?: Rekognition[] = []

    public static create(): Provider {
        return new Provider();
    }
}
