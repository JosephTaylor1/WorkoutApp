import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const inputList = [
    'Sets:',
    'Reps:',
    'Weight:'
];

const WorkoutInputs = ({workoutInputData}) => {
    return(
        <div>   
            {
              inputList.map((x,y) => {
                return <Stack key={y} spacing={3} padding={1}>
                            <TextField onChange={(e) => workoutInputData(e.target.value)} id="outlined-basic" label={x} variant="outlined"/>
                        </Stack>
              })  
            }
        </div>
    );

};

export default WorkoutInputs;

