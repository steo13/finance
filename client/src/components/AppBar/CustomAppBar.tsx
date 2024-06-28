import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomAppBarProps } from "./type";

export default function CustomAppBr (props: CustomAppBarProps) {
    const [activeTab, setActiveTab] = useState<string>(props.path ?? 'home')
    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const navItems = ['home', 'about', 'contact'];
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Ultimate Finance
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {navItems.map((item) => (
                            <Button 
                                key={item} 
                                sx={{ color: '#fff', borderBottom: activeTab === item ? '2px solid #fff' : 'none' }}
                                onClick={() => {
                                    setActiveTab(item)
                                    navigate(`/${item.toLowerCase()}`);
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={() => {}}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={() => {}}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}