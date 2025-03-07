export interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number
}

export const soap: Product = {
    id: 1,
    name: "soap",
    description: "wash yourself now",
    price: 2.99,
    stock: 4
}