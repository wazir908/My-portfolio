import React from 'react';
import './projectdesc.css';
import ProjectCarousel from './ProjectCarousel'; // Import the ProjectCarousel component
import project1 from './img/work/ss1.png';
import project2 from './img/work/ss2.png';
import project3 from './img/work/ss3.png';
import ecommerceProject1 from './img/portfolio/myimg6.png'; // Import the image for the new e-commerce project
import ecommerceProject2 from './img/portfolio/ss4.png'; // Import the image for the new e-commerce project
import ecommerceProject3 from './img/work/ss5.png';
import ecommerceProject4 from './img/work/ss6.png';
import ecommerceProject5 from './img/work/ss7.png';
import ecommerceProject6 from './img/work/ss8.png';
import ecommerceProject7 from './img/work/ss9.png';
import ecommerceProject8 from './img/work/ss10.png';
import ecommerceProject9 from './img/work/ss11.png';
import ecommerceProject10 from './img/work/ss12.png';
import ecommerceProject11 from './img/work/ss13.png';
import ecommerceProject12 from './img/work/ss14.png';
import shopifyProject1 from './img/work/ss15.png';
import shopifyProject2 from './img/work/ss16.png';
import shopifyProject3 from './img/work/ss17.png';
import shopifyProject4 from './img/work/ss18.png';
import shopifyProject5 from './img/work/ss19.png';
import shopifyProject6 from './img/work/ss20.png';
import shopifyProject7 from './img/work/ss21.png';
import shopifyProject8 from './img/work/ss22.png';
import shopifyProject9 from './img/work/ss23.png';
import shopifyProject10 from './img/work/ss24.png';
import shopifyProject11 from './img/work/ss25.png';

const ProjectDesc = () => {
    return (
        <div>
            {/* First container for the healthcare project */}
            <div className="project-container">
                <div className="project-content">
                    <div className="project-carousel">
                        <ProjectCarousel images={[project1, project2, project3]} />
                    </div>
                    <div className="project-details">
                        <h2 className="project-heading">Full Stack Health Care Website</h2>
                        <p className="project-duration">
                            <strong>Duration:</strong> 3 months
                        </p>
                        <ul className="project-features">
                            <li>Developed a full-stack web application using HTML, CSS, JavaScript, PHP, and MySQL.</li>
                            <li>Implemented features such as user authentication, online reports generation, appointment scheduling, and an admin dashboard for managing users and appointments.</li>
                            <li>Utilized RESTful APIs for communication between the front end and back end.</li>
                            <li>Designed a responsive and intuitive user interface to ensure a professional and user-friendly experience.</li>
                            <li>Performed testing and debugging to ensure high-quality code and functionality.</li>
                        </ul>
                        <a href="https://alimedicalcentreskd.netlify.app/" className="primary-btn" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>
            </div>
            {/* Second container for the e-commerce project */}
            <div style={{marginTop: '50px'}} className="project-container">
                <div className="project-content">
                    <div className="project-carousel">
                        <ProjectCarousel images={[ecommerceProject1, ecommerceProject2, ecommerceProject3, ecommerceProject4, ecommerceProject5, ecommerceProject6, ecommerceProject7, ecommerceProject8, ecommerceProject9, ecommerceProject10, ecommerceProject11, ecommerceProject12]} />
                    </div>
                    <div className="project-details">
                        <h2 className="project-heading">E-commerce Website</h2>
                        <p className="project-duration">
                            <strong>Duration:</strong> 6 months
                        </p>
                        <ul className="project-features">
                            <li>Developed a full-stack e-commerce website using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and React.</li>
                            <li>Implemented features such as user authentication, product catalog, shopping cart, checkout process, and order management.</li>
                            <li>Utilized third-party payment gateways for secure transactions.</li>
                            <li>Designed a responsive and visually appealing user interface to enhance the shopping experience.</li>
                            <li>Conducted performance optimization and security measures for a smooth and secure online shopping experience.</li>
                        </ul>
                        <a href="https://baltistanorganicdryfruits.netlify.app/" className="primary-btn" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>
            </div>
             {/* Third container for the Shopify web project */}
             <div className="project-container">
    <div className="project-content">
        <div className="project-carousel">
            <ProjectCarousel images={[shopifyProject1, shopifyProject2, shopifyProject3, shopifyProject4, shopifyProject5, shopifyProject6, shopifyProject7, shopifyProject8, shopifyProject9, shopifyProject10, shopifyProject11 ]} />
        </div>
        <div className="project-details">
            <h2 className="project-heading">Shopify Website</h2>
            <p className="project-duration">
            <strong>At Dropwarez I created This</strong>
            </p>
            <p className="project-duration">
                <strong>Duration:</strong> 6 Days
            </p>
            <ul className="project-features">
                <li>Created a custom sales funnel to attract customers and increase conversions.</li>
                <li>Developed hooks and incentives to engage visitors and encourage them to make purchases.</li>
                <li>Integrated various Shopify apps and tools to optimize the sales process.</li>
                <li>Implemented responsive design principles to ensure compatibility across devices.</li>
                <li>Utilized analytics and A/B testing to refine the sales funnel and improve performance.</li>
                {/* Additional Custom Sections */}
                <li>Designed and implemented custom sections within the sales funnel to showcase product benefits, testimonials, and limited-time offers.</li>
                <li>Utilized persuasive copywriting and compelling visuals to captivate visitors and drive conversions.</li>
                <li>Implemented exit-intent pop-ups and targeted email campaigns to re-engage potential customers.</li>
            </ul>
            <a href="https://zilapz.com/" className="primary-btn" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    </div>
</div>
        </div>
    );
};

export default ProjectDesc;