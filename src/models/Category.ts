import Product from "./Product";

export default interface Category {
    id: number;
    nome: string;
    produto?: Product | null;
}