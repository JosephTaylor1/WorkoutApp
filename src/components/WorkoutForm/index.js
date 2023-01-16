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
import dayjs from 'dayjs';

const WorkoutForm = (props) => {

    const sessionsCollection = collection(db, 'WorkoutSessions');

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

    /* Retrieves and sets input value for Calendar Date */
    const [ dateValue, setWorkoutDate ] = useState(dayjs());
    const getDateData = (date) => {
        setWorkoutDate(date);
    }
    const createWorkoutSession = async () => {
        await addDoc(sessionsCollection, {date: dateValue.toString(), reps: repsValue, sets: setsValue, weight: weightValue, workoutType: workoutOption})
        alert('Workout Info Submitted')
    }

    return (
        <div>
            <Form>
                
                <WorkoutDropdown workoutTypeSelection={getWorkoutType} />

                <WorkoutInputs workoutInputData={getWorkoutSetData} labelText={'Sets:'} />

                <WorkoutInputs workoutInputData={getWorkoutRepData} labelText={'Reps:'} />

                <WorkoutInputs workoutInputData={getWorkoutWeightData} labelText={'Weight'} />

                <CalendarInput value={getDateData} />

                <Button variant="contained" onClick={createWorkoutSession} >Submit</Button>

            </Form>
        </div>
    );
};

export default WorkoutForm;