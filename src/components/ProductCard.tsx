import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export interface Product {
    id: number;
    name: string;
    category: string;
    imageUrl: string;
    isFeatured: boolean,
    description?: string;
    specs: {
        power_output: string,
        voltage: string,
        efficiency: string,
        warranty: string
    },
    price: string
}

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                height="180"
                image={product.imageUrl}
                alt={product.name}
            />
            <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.category}
                </Typography>
                <Button
                    variant="contained"
                    component={Link}
                    to={`/products/${product.id}`}
                    sx={{ mt: 1 }}
                >
                    View Details
                </Button>
            </CardContent>
        </Card>
    );
}
