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
        submissionData.push(workoutInputValue);
        submissionData.push(workoutOption);
        console.log('WOW IT WORKED: ' + submissionData[1]);
        alert(submissionData[0] + ' ' + submissionData[1])
    };
    /* Retrieves and sets input value for Sets,Reps,Weight */
    const [ workoutInputValue, setWorkoutData ] = useState('');
    const getWorkoutInputData = (workoutInput) => {
        setWorkoutData(workoutInput);
    };

    /* Retrieves and sets dropdown value for workout type */
    const [ workoutOption, setWorkoutType ] = useState('');
    const getWorkoutType = (dropdownOption) => {
        setWorkoutType(dropdownOption);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit} >
                
                <WorkoutDropdown workoutTypeSelection={getWorkoutType} />

                <WorkoutInputs workoutInputData={getWorkoutInputData} />

                <CalendarInput />

                <Button variant="contained" type='submit'>Submit</Button>

            </Form>
        </div>
    );
};

export default WorkoutForm;