import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const WorkoutInputs = ({workoutInputData, labelText}) => {
    return(
        <div>   
            <Stack  spacing={3} padding={1}>
                <TextField onBlur={(e) => workoutInputData(e.target.value)} id="outlined-basic" label={labelText} variant="outlined"/>
            </Stack>
        </div>
    );

};

export default WorkoutInputs;

