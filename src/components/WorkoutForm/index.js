import React, { useState } from 'react';
import WorkoutDropdown from './WorkoutDropdown';
import WorkoutInputs from './WorkoutInputs';
import Button from '@mui/material/Button';
import CalendarInput from './CalendarInput';
import {
    Form
} from './WorkoutFormElements';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';

const WorkoutForm = (props) => {

    const sessionsCollection = collection(db, 'WorkoutSessions');

    const createWorkoutSession = async () => {
        await addDoc(sessionsCollection, {reps: repsValue, sets: setsValue, weight: weightValue, workoutType: workoutOption})
    }

    /* Retrieves and sets dropdown value for workout type */
    const [ workoutOption, setWorkoutType ] = useState('');
    const getWorkoutType = (dropdownOption) => {
        setWorkoutType(dropdownOption);
    };

    /* Retrieves and sets input value for Sets */
    const [ setsValue, setWorkoutSets ] = useState('');
    const getWorkoutSetData = (sets) => {
        setWorkoutSets(sets);
    };

    /* Retrieves and sets input value for Reps */
    const [ repsValue, setWorkoutReps ] = useState('');
    const getWorkoutRepData = (reps) => {
        setWorkoutReps(reps);
    };

    /* Retrieves and sets input value for Weight */
    const [ weightValue, setWorkoutWeight ] = useState('');
    const getWorkoutWeightData = (weight) => {
        setWorkoutWeight(weight);
    };

    return (
        <div>
            <Form onSubmit={createWorkoutSession} >
                
                <WorkoutDropdown workoutTypeSelection={getWorkoutType} />

                <WorkoutInputs workoutInputData={getWorkoutSetData} labelText={'Sets:'} />

                <WorkoutInputs workoutInputData={getWorkoutRepData} labelText={'Reps:'} />

                <WorkoutInputs workoutInputData={getWorkoutWeightData} labelText={'Weight'} />

                <CalendarInput />

                <Button variant="contained" type='submit'>Submit</Button>

            </Form>
        </div>
    );
};

export default WorkoutForm;