import React from 'react';
import { Link } from 'react-router-dom';

function ErrPage(props) {
    return (
        <div>
        <p>
            Somthing Went Wrong ! <Link to="/src/component/Home.js">Home</Link>
        </p>
            
        </div>
    );
}

export default ErrPage;