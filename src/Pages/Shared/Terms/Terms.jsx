import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and condition</h2>
            <p>A Terms and Conditions agreement is where you let the public know the terms, rules and guidelines for using your website or mobile app. They include topics such as acceptable use, restricted behavior and limitations of liability.
                <p>Go back to <Link to="/register">Register</Link></p>
            </p>
        </div>
    );
};

export default Terms;