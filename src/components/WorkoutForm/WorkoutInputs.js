import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const inputList = [
    'Sets:',
    'Reps:',
    'Weight:'
];

const WorkoutInputs = () => {

    const [value, setValue] = React.useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
};

  console.log('HEREs YOUR Input VALUE: ' + value );
  console.log('---------------------------------------------------');

    return(
        <div>   
            {
              inputList.map((x,y) => {
                return <Stack key={y} spacing={3} padding={1}>
                            <TextField inputfromfillins={value} onChange={handleChange} id="outlined-basic" label={x} variant="outlined"/>
                        </Stack>
              })  
            }
        </div>
    );

};

export default WorkoutInputs;

