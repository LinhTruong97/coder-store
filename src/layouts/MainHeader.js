import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Logo from "../components/Logo";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function MainHeader() {
    const auth = useAuth();
    let navigate = useNavigate();

    return (
        <Box>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Logo />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        CoderStore
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography variant="h6" color="inherit" component="div">
                        Welcome {auth.user?.username}!
                    </Typography>
                    <Box sx={{ flexGrow: 0.1 }} />
                    <Button
                        variant="contained"
                        onClick={() => {
                            auth.logout(() => navigate("/"));
                        }}
                        sx={{ backgroundColor: (theme) => theme.palette.primary.dark }}
                    >
                        Sign out
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default MainHeader;