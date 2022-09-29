import React, { useEffect, useState } from 'react';
import Gym from '../Gym/Gym';
import './Workout.css'
const Workout = () => {

    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('workout.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, [])

    return (
        <div className='workout-container'>
            <div className="workout-cart">
                {
                    workouts.map(workout => <Gym
                        key={workout.id}
                        workout={workout}
                    ></Gym>)
                }
            </div>
            <div className="workout-info">
                <h1>this is for workout info</h1>
            </div>
        </div>
    );
};

export default Workout;