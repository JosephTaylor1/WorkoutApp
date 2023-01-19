import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {
    Form
} from './HomepageFormElements';

const HomePage = (props) => {
    return(
        <div>
            <Form
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
            >
                <TextField id="outlined-basic" label="Username:" variant="outlined" />
                <TextField id="outlined-basic" label="Password:" variant="outlined" />
                <Button variant="contained">Submit</Button>
            </Form>

        </div>
    );
};

export default HomePage;