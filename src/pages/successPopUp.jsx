import React from 'react';
import '../../public/assets/css/successPopUp.css';
import { Link } from '@tanstack/react-router';

const SuccessPopUp = ({ message }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <p>{message}</p>
                <Link to="/home" className="popup-link">Ir para a Home</Link>
            </div>
        </div>
    );
};

export default SuccessPopUp;
