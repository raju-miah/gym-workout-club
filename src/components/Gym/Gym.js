import React from 'react';
import './Gym.css';

const Gym = (props) => {
    const { workout, handelAddTime } = props;
    const { name, time, img, text } = workout;
    // console.log(props)

    return (
        <div className='gym-cart'>
            <div>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p><small>{text}</small></p>
                <p>Time required: {time} seconds</p>
            </div>
            <button onClick={() => handelAddTime(workout)} className='btn-cart'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Gym;