import React from 'react';
import './Gym.css';

const Gym = (props) => {
    const { name, time, img } = props.workout;
    return (
        <div className='gym-cart'>
            <div>
                <img src={img} alt="" />
                <p>{name}</p>
                <p>Time required: {time}</p>
            </div>
            <button className='btn-cart'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Gym;