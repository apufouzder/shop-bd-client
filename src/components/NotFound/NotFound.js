import React from 'react';
import NotFoundImg from '../../images/notfound.gif';

const NotFound = () => {
    return (
        <div className="text-center py-5">
            <img style={{ width: '50%' }} src={NotFoundImg} alt="" />
        </div>
    );
};

export default NotFound;