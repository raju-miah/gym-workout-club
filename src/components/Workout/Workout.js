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
                <h1>Alex John</h1>
                <p>Sydney, Australia</p>
                <div>
                    <h1>Add a Break</h1>
                </div>
                <div className='btn-break'>
                    <button>10</button>
                    <button>20</button>
                    <button>30</button>
                    <button>40</button>
                    <button>50</button>
                </div>
                <h2>Exercise Details</h2>
                <div className='exercise-time'>
                    <p><strong>Exercise time</strong></p>
                    <p>200 seconds</p>
                </div>
                <div className='break-time'>
                    <p><strong>Break time</strong></p>
                    <p>15 seconds</p>
                </div>
                <button className='btn-activity'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Workout;