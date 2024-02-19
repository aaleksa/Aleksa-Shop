'use client'
import Link from '@mui/material/Link';
import * as NextLink from 'next/link';
import DrawerAppBar from "/src/components/AppBar";
import * as React from 'react';
import Box from "@mui/material/Box";

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            {/*<header>*/}
            {/*<drawerAppBar/>*/}
            <h1>Campaigns</h1>
            <DrawerAppBar/>
            {/*</header>*/}
            <Box sx={{display: {xs: 'none', sm: 'block'}}}>

                <Link component={NextLink}
                      sx={{color: '#fff'}}
                      href="/"
                >
                    To Home page
                </Link>


            </Box>
        </div>
    );
}