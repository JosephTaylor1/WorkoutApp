import React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const CalendarPicker = () => {  
    const [value, setValue] = React.useState(dayjs());

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return(
        <div>   
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3} padding={1}>
                    <DesktopDatePicker
                        label="Workout Date"
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                />
                </Stack>
            </LocalizationProvider>
        </div>
    );
};

export default CalendarPicker;