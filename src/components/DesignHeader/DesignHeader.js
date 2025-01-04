import React from 'react';
import "../../assets/styles/components/DesignHeader/design.css";

function DesignHeader(){

    return (
        <div className="design-container">
            <span className="arrow">&#9664;</span>
            <span className="design-text">Luna</span>
            <span className="arrow">&#9654;</span>
        </div>
    );
}

export default DesignHeader;