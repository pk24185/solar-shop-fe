import axios from "axios";
import type { Product } from "./components/ProductCard";

const api = axios.create({
    baseURL: "https://localhost:44361/api", // replace with backend URL later
});

export default api;

export async function getProducts() {
    const response = await fetch('/src/assets/data/products.json');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const products = (await response.json()) as Product[];
    return products;
}