import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1>How does React works?</h1>
                <p><strong>Answer: </strong>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div>
                <h1>What are the differences between props and state?</h1>
                <p><strong>Answer: </strong><br />
                    <strong>props</strong> <br />
                    1. The Data is passed from one component to another. <br />
                    2. It is Immutable (cannot be modified). <br />
                    3. Props can be used with state and functional components. <br />
                    4. Props are read-only. <br />
                    <strong>state</strong> <br />
                    1. The Data is passed within the component only. <br />
                    2. It is Mutable ( can be modified). <br />
                    3. State can be used only with the state components/class component (Before 16.0). <br />
                    4. State is both read and write.
                </p>
            </div>
            <div>
                <h1>useEffect What else can we use other than loading data with api?</h1>
                <strong>Answer: </strong> <br />
                <p><strong> Mostly useEffect use cases</strong> <br />
                    1. Running once on mount: fetch API data <br />
                    2. Running on state change: validating input field <br />
                    3. Running on state change: live filtering <br />
                    4. Running on state change: trigger animation on new array value <br />
                    5. Running on props change: update paragraph list on fetched API data update <br />
                    6. Running on props change: updating fetched API data to get BTC updated price
                </p>
            </div>
        </div>
    );
};

export default Blog;