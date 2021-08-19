import React from 'react'
import { CardActions, CardContent, Button, Typography, Card, Box, TextField } from '@material-ui/core/';

const inputDiv = {
    margin: '0 auto 10px'
}

const card = (
    <React.Fragment>
        <CardContent>
            <Typography variant="h5" component="div">
                Sign Up
            </Typography>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                margin: '20px auto 10px'
            }}
            noValidate
            autoComplete="off"
        >
            <div style={inputDiv}><TextField id="outlined-basic" label="Email" variant="outlined" /></div>
            <div style={inputDiv}><TextField id="outlined-basic" label="Password" variant="outlined" /></div>
            <div style={inputDiv}><TextField id="outlined-basic" label="Enter password again" variant="outlined" /></div>
            <div style={{ display: 'flex', margin:'0 auto', justifyContent:'center' }}>
                <Button variant="contained">Sign-up</Button>
            </div>
        </Box>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
        </CardContent>
    </React.Fragment>
);

export default function SignUp() {
    return (
        <Box sx={{ width: '300px', display: 'block', margin: 'auto', }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}