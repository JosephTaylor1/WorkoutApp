import React, { useState } from 'react';
import WorkoutDropdown from './WorkoutDropdown';
import WorkoutInputs from './WorkoutInputs';
import Button from '@mui/material/Button';
import CalendarInput from './CalendarInput';
import {
    Form
} from './WorkoutFormElements';

const WorkoutForm = (props) => {

    const handleSubmit = (event) => {
        console.log('WOW IT WORKED: ' + data);
    };

    const [ data, setData ] = useState('');

    const childToParent = (childData) => {
        setData(childData);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit} >
                
                <WorkoutDropdown />

                <WorkoutInputs childToParent={childToParent} />

                <CalendarInput />

                <Button variant="contained" type='submit'>Submit</Button>

            </Form>
        </div>
    );
};

export default WorkoutForm;