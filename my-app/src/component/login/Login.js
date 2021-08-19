import React from 'react'
import { CardActions, CardContent, Button, Typography, Card, Box, TextField, Link } from '@material-ui/core/';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const inputDiv = {
    margin: '0 auto 10px'
}

const card = (
    <React.Fragment>
        <CardContent>
            <Typography variant="h5" component="div">
                Login
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

            <div style={{ display: 'flex', margin:'0 auto', justifyContent:'space-between' }}>
                <Button variant="contained">Login</Button>
                <Link href="/signup"><Button variant="contained">Sign-up</Button></Link>
            </div>
        </Box>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
        </CardContent>
    </React.Fragment>
);

export default function Login() {
    return (
        <Box sx={{ width: '300px', display: 'block', margin: 'auto', }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}