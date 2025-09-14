// src/pages/About.tsx
import { Container, Typography, Grid, Paper } from "@mui/material";

export default function About() {
    return (
        <Container sx={{ mt: 6, mb: 8 }}>
            <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
                About Us
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" gutterBottom>
                Bringing renewable energy closer to every home and business.
            </Typography>

            <Grid container justifyContent={'center'} spacing={4} sx={{ mt: 5 }}>
                <Grid>
                    <Paper elevation={3} sx={{ p: 4 }}>
                        <Typography variant="h5" gutterBottom>Our Mission</Typography>
                        <Typography>
                            We aim to make clean, affordable solar energy accessible to everyone,
                            while ensuring quality, reliability, and long-term savings.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid>
                    <Paper elevation={3} sx={{ p: 4 }}>
                        <Typography variant="h5" gutterBottom>Why Choose Us?</Typography>
                        <Typography>
                            With years of experience and trusted partners, we provide end-to-end solutions,
                            from product selection to installation and service.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
