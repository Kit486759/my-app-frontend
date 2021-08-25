import React, {useState } from 'react'
import { CardActions, CardContent, Button, Typography, Card, Box, TextField, Link } from '@material-ui/core/';
import axios from 'axios';


const inputDiv = {
    margin: '0 auto 10px'
}

export default function Login() {

    const [loginInput, setLoginInput] = useState({})

    const test = async (e) => {
        e.preventDefault()
        console.log(`Submitted email: ${loginInput.email}, password: ${loginInput.password}`)
        try {
            const res = await axios({
                method: 'get',
                url: 'http://localhost:1111',
                headers: {
                    // = Basic encoder  =  'Basic email:password'
                    'Authorization': `Basic ${Buffer.from(`${loginInput.email}:${loginInput.password}`).toString('base64')}`
                }
            })
            const data = res.data
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }
    console.log(loginInput)
    console.log(Buffer.from(`${loginInput.email}:${loginInput.password}`).toString('base64'))

    return (
        <Box sx={{ width: '300px', display: 'block', margin: 'auto', }}>
            <Card variant="outlined">
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
                        action="/api/login"
                        method="GET"
                    >
                        {/* <form action="/api/login" method="GET"> */}
                            {/* <form action="/api/login" method="GET"> */}
                            <div style={inputDiv}><TextField onChange={(e) => setLoginInput({ ...loginInput, email: e.target.value })} id="outlined-basic email" label="Email" variant="outlined" /></div>
                            <div style={inputDiv}><TextField onChange={(e) => setLoginInput({ ...loginInput, password: e.target.value })} id="outlined-basic password" label="Password" variant="outlined" /></div>
                            {/* <input type="submit"></input> */}
                            <div style={{ display: 'flex', margin: '0 auto', justifyContent: 'space-between' }}>
                                {/* <div onClick={() => test()} style={{ display: 'flex', margin: '0 auto', justifyContent: 'space-between' }}> */}
                                <Button type="submit" onClick={(e) => test(e)} variant="contained">Login</Button>
                                <Link href="/signup"><Button variant="contained">Sign-up</Button></Link>
                            </div>
                        {/* </form> */}
                    </Box>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Box>
    );
}