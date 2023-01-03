import React, { useState } from 'react';
import WorkoutDropdown from './WorkoutDropdown';
import WorkoutInputs from './WorkoutInputs';
import Button from '@mui/material/Button';
import CalendarInput from './CalendarInput';
import {
    Form
} from './WorkoutFormElements';

const WorkoutForm = (props) => {

    const submissionData = [];

    const handleSubmit = () => {
        console.log('WOW IT WORKED: ' + workoutInputValue);
        submissionData.push(workoutInputValue);
    };

    const [ workoutInputValue, setData ] = useState('');

    const getWorkoutInputData = (workoutInput) => {
        setData(workoutInput);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit} >
                
                <WorkoutDropdown />

                <WorkoutInputs workoutInputData={getWorkoutInputData} />

                <CalendarInput />

                <Button variant="contained" type='submit'>Submit</Button>

            </Form>
        </div>
    );
};

export default WorkoutForm;