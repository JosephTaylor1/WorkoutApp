import React from 'react';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';


const workoutList = [
    'Benchpress', 
    'Squat', 
    'Pull-Ups', 
    'Hamstring Curls',
    'Military Press',
    'Facepulls',
    'Isolated Curls',
    'Deadlift',
    'Incline Benchpress',
    'Split Squat',
    'Chest Supported Row',
    'Lateral Raises',
    'Dips',
    'Kickbacks',
    'Cable Flies'
];

const WorkoutDropdwon = () => {
    return (
        <div>
            <Stack spacing={3} padding={1} sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                <InputLabel>Select a Workout:</InputLabel>
                <Select >
                    <MenuItem></MenuItem>
                    {workoutList.map((x, y) => {
                    return <MenuItem key={y} value={x}>{x}</MenuItem>;
                })}
                </Select>   
                </FormControl>
            </Stack>
        </div>
    );
}

export default WorkoutDropdwon;