
export class AddressProvider {
    country?: string;
    zipCode?: string;
    city?: string;
    street?: string;
    district?: string;
    addressNumber?: string;
    state?: string;
    complement?: string;   

    public static create(): AddressProvider {
        return new AddressProvider();
    }
}