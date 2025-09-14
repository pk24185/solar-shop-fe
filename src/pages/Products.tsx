// src/pages/Products.tsx
import { useEffect, useState } from "react";
import { Grid, Container, Typography, Box, CircularProgress } from "@mui/material";
import ProductCard, { type Product } from "../components/ProductCard";
import { getProducts } from "../api";

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        (async () => {
            const products = await getProducts();
            setProducts(products);
        })()
    }, [])

    return (
        <Container sx={{ mt: 6, mb: 8 }}>
            <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
                Our Products
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" gutterBottom>
                Explore our range of high-quality solar panels, inverters, and batteries.
            </Typography>

            <Box sx={{ mt: 5 }}>
                <Grid justifyContent={'center'} container spacing={4}>
                    {products.length == 0 && <CircularProgress />}
                    {products.map((p) => (
                        <Grid key={p.id}>
                            <ProductCard product={p} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}
