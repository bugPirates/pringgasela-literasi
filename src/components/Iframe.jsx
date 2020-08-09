import React from 'react';
import './Iframe.css';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     
    return (
        // basic bootstrap classes. you can change with yours.
        <div className="col-md-12">
            <div class="embed-responsive embed-responsive-16by9">
            <iframe src={src}></iframe>
            </div>
        </div>
    );
};

export default Iframe;