import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Container,
    Typography,
    Box,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableRow,
    CircularProgress,
} from "@mui/material";
import QuoteForm from "../components/QuoteForm";
import { getProducts } from "../api";
import type { Product } from "../components/ProductCard";
import { appConfig } from "../config/appConfig";

export default function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        (async () => {
            const products = (await getProducts());
            const product = products.filter(p => p.id == +(id ?? 0))[0];
            setProduct(product);
        })()
    }, [id])

    if (!product) return <Typography sx={{ mt: 4 }} align="center">
        <CircularProgress />
    </Typography>;

    return (
        <Container sx={{ mt: 6, mb: 8 }}>
            <Grid container spacing={4}>
                {/* Product Image */}
                <Grid>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Box
                            component="img"
                            src={`${appConfig.basePath}/${product.imageUrl}`}
                            alt={product.name}
                            sx={{
                                borderRadius: 2,
                                maxWidth: "100%", // Image won't exceed parent width
                                height: "auto",   // Maintains aspect ratio
                                display: "block", // Removes bottom spacing
                            }}
                        />
                    </Paper>
                </Grid>

                {/* Product Info */}
                <Grid>
                    <Typography variant="h3" gutterBottom fontWeight="bold">
                        {product.name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        {product.category}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, mb: 3 }}>
                        {product.description}
                    </Typography>

                    {product.price && (
                        <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
                            Price: {product.price}
                        </Typography>
                    )}

                    {/* Specs Table */}
                    <Paper elevation={1} sx={{ mb: 3 }}>
                        <Table>
                            <TableBody>
                                <TableRow >
                                    <TableCell sx={{ fontWeight: "bold" }}>Power Output</TableCell>
                                    <TableCell>{product.specs.power_output}</TableCell>
                                </TableRow>

                                <TableRow >
                                    <TableCell sx={{ fontWeight: "bold" }}>Voltage</TableCell>
                                    <TableCell>{product.specs.voltage}</TableCell>
                                </TableRow>

                                <TableRow >
                                    <TableCell sx={{ fontWeight: "bold" }}>Efficiency</TableCell>
                                    <TableCell>{product.specs.efficiency}</TableCell>
                                </TableRow>

                                <TableRow >
                                    <TableCell sx={{ fontWeight: "bold" }}>Warranty</TableCell>
                                    <TableCell>{product.specs.warranty}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>

                    {/* Quote Form */}
                    <QuoteForm productId={product.id} />
                </Grid>
            </Grid>
        </Container>
    );
}
