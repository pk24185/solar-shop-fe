// src/pages/Home.tsx
import { Container, Typography, Box, Button, Grid, Paper, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import ProductCard, { type Product } from "../components/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "../api";

export default function Home() {
    const [featured, setFeatured] = useState<Product[]>([]);

    useEffect(() => {
        (async () => {
            const products = await getProducts();
            setFeatured(products.filter(c => c.isFeatured));
        })()
    }, [])

    return (
        <>
            {/* Hero Section */}
            <Box
                sx={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1600&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "#fff",
                    py: 12,
                    textAlign: "center",
                }}
            >
                <Container>
                    <Typography variant="h2" fontWeight="bold" gutterBottom>
                        Power Your Home with Solar
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Reliable Solar Panels & Inverters at Affordable Prices
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                        component={Link}
                        to="/products"
                        sx={{ mt: 3 }}
                    >
                        Browse Products
                    </Button>
                </Container>
            </Box>

            {/* Why Choose Us */}
            <Box sx={{ py: 8, bgcolor: "#f9f9f9" }}>
                <Container>
                    <Typography variant="h4" textAlign="center" gutterBottom>
                        Why Choose Us?
                    </Typography>
                    <Grid container justifyContent={'center'} spacing={3} sx={{ mt: 3 }}>
                        {[
                            { title: "Trusted Quality", desc: "Certified solar panels & inverters" },
                            { title: "Affordable Pricing", desc: "Best prices with no hidden costs" },
                            { title: "Expert Support", desc: "Installation & after-sales service" },
                        ].map((item, i) => (
                            <Grid key={i}>
                                <Paper sx={{ p: 4, textAlign: "center" }} elevation={3}>
                                    <Typography variant="h6" gutterBottom>{item.title}</Typography>
                                    <Typography>{item.desc}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Featured Products */}
            <Container sx={{ py: 8 }}>
                <Typography variant="h4" textAlign="center" gutterBottom>
                    Featured Products
                </Typography>
                <Grid container justifyContent={'center'} spacing={3} sx={{ mt: 3 }}>
                    {featured.length == 0 && <CircularProgress />}
                    {featured.map((p) => (
                        <Grid key={p.id}>
                            <ProductCard product={p} />
                        </Grid>
                    ))}
                </Grid>
                <Box textAlign="center" sx={{ mt: 4 }}>
                    <Button variant="outlined" component={Link} to="/products">
                        View All Products
                    </Button>
                </Box>
            </Container>
        </>
    );
}
