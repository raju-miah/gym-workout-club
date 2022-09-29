import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Exercise = (props) => {
    const { time } = props;
    // console.log(time)

    let totalTime = 0;
    for (const times of time) {
        totalTime = totalTime + times.time;
    }

    const [breakTime, setBreakTime] = useState([]);

    const handleBreakTime = (event) => {
        const breakTime = event.target.innerText;
        setBreakTime(breakTime);
    }

    const notify = () => toast.success("Workout Completed", { position: "top-center" });
    return (
        <div>
            <h1>Alex John here</h1>
            <p>Sydney, Australia</p>
            <div>
                <h1>Add a Break</h1>
            </div>
            <div className='btn-break'>
                <button onClick={(event) => handleBreakTime(event)}>10</button>
                <button onClick={(event) => handleBreakTime(event)}>20</button>
                <button onClick={(event) => handleBreakTime(event)}>30</button>
                <button onClick={(event) => handleBreakTime(event)}>40</button>
                <button onClick={(event) => handleBreakTime(event)}>50</button>
            </div>
            <h2>Exercise Details</h2>
            <div className='exercise-time'>
                <p><strong>Exercise time</strong></p>
                <p>{totalTime} seconds</p>
            </div>
            <div className='break-time'>
                <p><strong>Break time</strong></p>
                <p>{breakTime} seconds</p>
            </div>
            <button onClick={notify} className='btn-activity'>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Exercise;