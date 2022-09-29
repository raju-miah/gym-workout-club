import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Gym from '../Gym/Gym';
import './Workout.css'
const Workout = () => {

    const [workouts, setWorkouts] = useState([]);

    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch('workout.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, [])

    const handelAddTime = (workout) => {
        // console.log(workout)
        const newTime = [...time, workout];
        setTime(newTime);
    }

    return (
        <div className='workout-container'>
            <div className="workout-cart">
                {
                    workouts.map(workout => <Gym
                        key={workout.id}
                        workout={workout}
                        handelAddTime={handelAddTime}
                    ></Gym>)
                }
            </div>
            <div className="workout-info">
                {/* info in Exercise */}
                <Exercise
                    time={time}
                ></Exercise>
            </div>
        </div>
    );
};

export default Workout;