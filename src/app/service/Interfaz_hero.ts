
// Protegermos la estructura de nuestro array de heroes con una interfaz.
export interface herosInterfaz {

    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    indice?: number;
}