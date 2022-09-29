import React from 'react';

const Exercise = ({ time }) => {
    return (
        <div>
            <h1>Alex John here</h1>
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
                <p>{time.length} seconds</p>
            </div>
            <div className='break-time'>
                <p><strong>Break time</strong></p>
                <p>15 seconds</p>
            </div>
            <button className='btn-activity'>Activity Completed</button>
        </div>
    );
};

export default Exercise;