'use client'
import * as React from 'react';
import * as NextLink from 'next/link';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Logo from "/public/logo-new.png";

const drawerWidth = 240;
const navItems = ['home', 'about', 'sizecharts', 'campaigns'];
const linkMenu = (item) => {
    if (item === "home") {
        return {
            pathname: `/`,
        };
    } else {
        return {
            pathname: `/${item}`,

        };
    }
}


function DrawerAppBar(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                MUI
            </Typography>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <ListItemText primary={item}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box>
            <CssBaseline/>
            <AppBar component="nav" position="static">
                <Toolbar sx={{display:"flex"}}>
                    <IconButton
                        color="i"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none', xs: 'block'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Box sx={{display: {xs: 'none', sm: 'flex'}}}>
                        {navItems.map((item) => (
                            <Link component={NextLink}
                                  variant="h6"
                                  key={item}
                                  sx={{color: '#fff', padding: '8px', textTransform: "uppercase"}}
                                  href={linkMenu(item)}
                            >
                                  {item}
                            </Link>
                        ))}
                    </Box>
                    <Link href="/" component={NextLink}>
                        <Box
                            component="img"
                            sx={{
                                height: 40,
                            }}
                            className="Header-logo"
                            alt="Your logo."
                            src={Logo}
                        />

                    </Link>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="primary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>

        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;