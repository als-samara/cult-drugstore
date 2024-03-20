import Product from "./Product";

export default interface User{
    id: number;
    username: string;
    name: string;
    password: string;
    photo: string;
    products?: Product | null;
    roles: string
}