import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const WorkoutInputs = ({workoutInputData}) => {
    return(
        <div>   
            <Stack  spacing={3} padding={1}>
                <TextField onChange={(e) => workoutInputData(e.target.value)} id="outlined-basic" label='Sets:' variant="outlined"/>
            </Stack>
            <Stack  spacing={3} padding={1}>
                <TextField onChange={(e) => workoutInputData(e.target.value)} id="outlined-basic" label= 'Reps:' variant="outlined"/>
            </Stack>
            <Stack  spacing={3} padding={1}>
                <TextField onChange={(e) => workoutInputData(e.target.value)} id="outlined-basic" label= 'Weight:' variant="outlined"/>
            </Stack> 
        </div>
    );

};

export default WorkoutInputs;

