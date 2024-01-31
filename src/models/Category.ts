import Product from "./Product";

export default interface Category {
    id: number;
    description: string;
    postagem?: Product | null;
}