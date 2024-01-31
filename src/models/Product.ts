import Category from "./Category";

export default interface Product {
    id: number;
    title: string;
    price: number;
    photo: string;
    category: Category | null;
}