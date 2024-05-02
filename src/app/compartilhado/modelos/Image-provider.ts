import { FacePosition } from '../constantes/faces-posicion'
export class ImageProvider {
    imageType: string = '';
    image:string = '';
    // key?: string;
    // location?: string;

    public static create():ImageProvider{
        return new ImageProvider();
    }
}