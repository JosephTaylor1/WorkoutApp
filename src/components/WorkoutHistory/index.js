import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

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

const  WorkoutHistoryTable = () => {

    const [session, setSession] = useState([]);

    const sessionsCollection = collection(db, 'WorkoutSessions');
    useEffect(() => {

        const getSessions = async () => {
            const sessionData = await getDocs(sessionsCollection);
            console.log(sessionData);
            setSession(sessionData.docs.map((doc) => ({...doc.data(), id: doc.id })));
        }
        getSessions();
    }, [])

    const rows = [
        { id: 1, date: session.date, workoutType: session.workoutType, sets: session.sets, reps: session.reps, weight: session.weight },
        { id: 2, date: '01/15/2023', workoutType: 'Bench', sets: '4', reps: '6', weight: '120'}
    ];

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