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
            name: 'The Lord Barbershop',
            address: 'Rua de Bragadela, Loja 24, 4760-706',
            email: 'barberthelord@gmail.com',
            phoneNumber: '+351 913 484 773',
            image: 'assets/official/classic_store.png',
            route: 'the-lord-barbershop',
            mapsLink: 'https://goo.gl/maps/b49PGPx3sfKRmiEb7'
        },
        {
            name: 'The Lord Privé',
            address: 'Avenida Rio Veirão, Loja 17, 4760-715',
            email: 'barberthelord2@gmail.com',
            phoneNumber: '+351 913 484 773',
            image: 'assets/official/prive_store.png',
            route: 'the-lord-prive',
            mapsLink: 'https://goo.gl/maps/b49PGPx3sfKRmiEb7'
        }
    ]