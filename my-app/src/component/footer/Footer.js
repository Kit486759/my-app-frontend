import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';

export default function ButtonAppBar() {
    return (
        <footer >
            {/* <div style={{backgroundColor:'black', height:'100%'}}></div> */}
            <Box sx={{ flexGrow: 1 }} mt={0}>
                <AppBar position="sticky">
                    This it footer
                </AppBar>
            </Box>
        </footer>

    );
}