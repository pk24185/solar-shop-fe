import { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    Divider,
    Avatar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const navLinks = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box
            sx={{
                width: 260,
                height: "100%",
                bgcolor: "primary.main",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Close Button */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Divider sx={{ borderColor: "rgba(255,255,255,0.3)" }} />

            {/* Menu Links */}
            <List sx={{ mt: 2, flexGrow: 1 }}>
                {navLinks.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={item.path}
                            sx={{
                                textAlign: "left",
                                py: 2,
                                px: 3,
                                "&:hover": { bgcolor: "secondary.main", color: "#000" },
                                borderRadius: 2,
                                m: 0.5,
                            }}
                            onClick={handleDrawerToggle}
                        >
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{ fontSize: "1.2rem", fontWeight: "bold" }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    {/* Mobile Menu Button */}
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 0.5, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Brand with Avatar + Caption */}
                    <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                        <Avatar
                            alt="Brand Logo"
                            src="/src/assets/images/avatar.png"
                            sx={{
                                width: 38,
                                height: 38,
                                border: "2px solid white",
                                mr: 1,
                            }}
                        />
                        <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                            <Typography variant="h6" noWrap>
                                Ganga Electricals Islamnagar
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.8)", mt: -0.4 }}
                            >
                                Solar energy equipment supplier
                            </Typography>
                        </Box>
                    </Box>


                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                        {navLinks.map((item) => (
                            <Button key={item.label} color="inherit" component={Link} to={item.path}>
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Side Drawer */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: 260,
                        bgcolor: "primary.main",
                        color: "#fff",
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}
