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
        submissionData.push(workoutOption);
        submissionData.push(setsValue);
        submissionData.push(repsValue);
        submissionData.push(weightValue);
        var doc = {
            "_id": "workoutInfo",
            "workoutType": submissionData[0],
            "sets": submissionData[1],
            "reps": submissionData[2],
            "weight": submissionData[3],
          };
        console.log('WOW IT WORKED: ' + submissionData[1]);
        alert('Workout Type: ' + submissionData[0] + ' Sets: ' + submissionData[1] + ' Reps: ' + submissionData[2] + ' Weight: ' + submissionData[3]);
    };

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

    var doc = {
        "_id": "workoutInfo",
        "workoutType": submissionData[0],
        "sets": submissionData[1],
        "reps": submissionData[2],
        "weight": submissionData[3],
      };

      db.get('workoutInfo').then(function (doc) {
        console.log(doc);
      });

    return (
        <div>
            <Form onSubmit={handleSubmit} >
                
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