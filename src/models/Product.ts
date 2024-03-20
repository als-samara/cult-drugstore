import Category from "./Category";

export default interface Product {
    id: number;
    name: string;
    price: number;
    photo: string;
    category: Category | null;
}