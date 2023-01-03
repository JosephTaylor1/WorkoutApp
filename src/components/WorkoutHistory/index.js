import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { 
        field: 'date', 
        headerName: 'Date', 
        width: 150,
        editable: true
    },
    {
        field: 'workoutType',
        headerName: 'Workout',
        width: 150,
        editable: true,
    },
    {
        field: 'sets',
        headerName: 'Sets',
        type: 'number',
        width: 150,
        editable: true,
    },
    {
        field: 'reps',
        headerName: 'Reps',
        type: 'number',
        width: 150,
        editable: true,
    },
    {
        field: 'weight',
        headerName: 'Weight',
        sortable: false,
        width: 160
    },
  ];
  
  const rows = [
    { id: 1, date: '07/08/1988', workoutType: 'Bench', sets: 4, reps: 12, weight: 120 },
  ];

const  WorkoutHistoryTable = () => {
    return(
        <div>  
            <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
            </Box>
        </div>
    );
};

export default WorkoutHistoryTable;