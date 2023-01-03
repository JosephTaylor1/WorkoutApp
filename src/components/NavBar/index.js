import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavbarElements';

const Navbar = () => {
    return (
        <div>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/addAWorkout' activestyle='true'>
                        Add a workout
                    </NavLink>
                    <NavLink to='/workoutHistory' activestyle='true'>
                        Workout history
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    );
};

export default Navbar;