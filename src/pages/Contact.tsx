// src/pages/Contact.tsx
import { Container, Typography, Grid, Paper, TextField, Button, Box } from "@mui/material";

export default function Contact() {
    return (
        <Container sx={{ mt: 6, mb: 8 }}>
            <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
                Contact Us
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" gutterBottom>
                Get in touch for inquiries, support, or solar consultation.
            </Typography>

            <Grid container spacing={4} sx={{ mt: 5 }}>
                {/* Contact Info */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Paper elevation={3} sx={{ p: 4 }}>
                        <Typography variant="h6" gutterBottom>Our Office</Typography>
                        <Typography>Email: info@solarshop.com</Typography>
                        <Typography>Phone: +91-9876543210</Typography>
                        <Typography>Address: Main Road, Your City</Typography>
                        <Box sx={{ mt: 3 }}>
                            <iframe
                                title="Google Maps"
                                src="https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                loading="lazy"
                            ></iframe>
                        </Box>
                    </Paper>
                </Grid>

                {/* Contact Form */}
                <Grid size={{ xs: 12, md: 8 }}>
                    <Paper elevation={3} sx={{ p: 4 }}>
                        <Typography variant="h6" gutterBottom>Send us a Message</Typography>
                        <Box component="form">
                            <TextField label="Name" fullWidth margin="normal" />
                            <TextField label="Email" fullWidth margin="normal" />
                            <TextField label="Message" fullWidth margin="normal" multiline rows={4} />
                            <Button variant="contained" size="large" sx={{ mt: 2 }}>
                                Send Message
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
