import React, { useState } from 'react';
import './sidebar.css'; // Import your sidebar styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTimes, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleSidebar = () => {
        setIsVisible(!isVisible);
    };

    const closeSidebar = () => {
        setIsVisible(false);
    };

    return (
        <div>
            <button className="toggle-btn" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={isVisible ? faTimes : faCog} />
            </button>
            <div className={`sidebar ${isVisible ? 'visible' : ''}`}>
                <div className="get-connected">
                    <ul>
                        <li><a href="https://wa.me/+923469657528" onClick={closeSidebar}><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                        <li><a href="https://instagram.com/waxirmubashir_786?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D" onClick={closeSidebar}><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href="https://www.linkedin.com/in/wazir-mubashir-379b28279/" onClick={closeSidebar}><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    
                        <li><a href="https://www.facebook.com/profile.php?id=100080757323291" onClick={closeSidebar}><FontAwesomeIcon icon={faFacebook} /></a></li>
                        
                        <li><a href="mailto:wazirmubashir2021@gmail.com" onClick={closeSidebar}><FontAwesomeIcon icon={faEnvelope} /></a></li>
                        <li><a href="tel:+923469657528" onClick={closeSidebar}><FontAwesomeIcon icon={faPhone} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;