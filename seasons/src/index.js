import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js';
import Spinner from './Spinner.js';
import useLocation from './useLocation'

const App = () => {
    const {lat, errorMessage} = useLocation();

    let content;
    if (errorMessage && !lat)
        content = <div>Error: {errorMessage}</div>;
    else if (!errorMessage && lat)
        content = <SeasonDisplay lat={lat} />;
    else
        content = <Spinner message="Loading location information..." />;

    return <div className="border red">{content}</div>
};

ReactDOM.render(<App/>, document.querySelector('#root'));