import React from 'react';
import './Footer.css';
export const Footer = ({ className }) => {

    const renderMultipleElements = () => {
        return ([
            <a key="About" className="footer-btn" href="/#">About</a>,
            <a key="Contact" className="footer-btn" href="/#">Contact</a>,
            <a key="Support" className="footer-btn" href="/#">Support</a>
        ]);
    };

    return (
        <footer className={className}>
            {renderMultipleElements()}
        </footer>
    );
};
