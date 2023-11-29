//TODO: Create Models

export interface Staff {
    name: string;
    position: string;
    description: string;
    socials?: string;
    picture: string;
}

export interface Store {
    name: string,
    address: string,
    email: string,
    phoneNumber: string,
    image?: string,
    route: string,
    staff?: Staff[],
    mapsLink?: string
}

export const STORES: Store[] =
    [
        {
            name: 'The Lord Classic',
            address: 'Rua de Bragadela, Loja 24, 4760-706',
            email: 'geral@thelord.pt',
            phoneNumber: '+351 913 484 773',
            image: 'assets/official/classic_store_v2.png',
            route: 'the-lord-barbershop',
            mapsLink: 'https://maps.app.goo.gl/YEcwUV2w65w4geVi8'
        },
        {
            name: 'The Lord Privé',
            address: 'Avenida Rio Veirão, Loja 1 Nº16, 4760-715',
            email: 'geral@thelord.pt',
            phoneNumber: '+351 914 210 310',
            image: 'assets/official/prive_store_v2.png',
            route: 'the-lord-prive',
            mapsLink: 'https://maps.app.goo.gl/LRxwt8M6Cw6fTtBR7'
        }
    ]