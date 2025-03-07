export interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number
}

export const defaultProductList: Product[] = [
    {
        id: 1,
        name: "Boomerang",
        description: "Plus loyal qu'un chien!",
        price: 15.99,
        stock: 12
    },
    {
        id: 2,
        name: "Ressort",
        description: "Boing!",
        price: 7.99,
        stock: 23
    },
    {
        id: 3,
        name: "Glaçons",
        description: "Ils ont tous fondus...",
        price: 1.49,
        stock: 0
    },
    {
        id: 4,
        name: "Pâte à dents",
        description: "Pour un plus beau sourire!",
        price: 0.99,
        stock: 46
    },
    {
        id: 5,
        name: "Jarre vide",
        description: "Prête à remplir",
        price: 12.99,
        stock: 8
    },
]