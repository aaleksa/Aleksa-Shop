import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './App.css';
import {StyledEngineProvider} from '@mui/material/styles';
import DrawerAppBar from "./components/AppBar";
// import {AppCacheProvider} from '@mui/material-nextjs/v13-pagesRouter';
import Link from "./Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


function App() {
    return (
        <div >
            <header >
                <DrawerAppBar/>
                <Box
                    sx={{
                        my: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    // <Link href="/" color="secondary">
                    //     Go to the about page
                    // </Link>
                    {/*<ProTip />*/}
                    {/*<Copyright />*/}
                </Box>
            </header>
            <Typography variant="h4" component="h1" sx={{mb: 2}}>
                Material UI - Next.js example in TypeScript
            </Typography>
        </div>
    )
        ;
}

export default App;
