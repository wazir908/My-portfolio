import React, { useState, useEffect } from 'react';
import './skills.css';

const Skills = () => {
    const [progress, setProgress] = useState({
        HTML: 80,
        CSS: 70,
        JavaScript: 90,
        ReactNext: 75,
        phpMyAdmin: 60,
        ShopifyElementor: 85,
        XAMPP: 70,
        MySQL: 65,
        LiquidThemeCustomization: 80,
        EcommerceSolutions: 75,
        NodeJs: 60,
        NextJs: 50 // Added comma here
    });

    useEffect(() => {
        const progressBar = document.querySelectorAll(".progress-bar");

        function fillProgress() {
            for (let bar of progressBar) {
                let targetWidth = bar.getAttribute("aria-valuenow");
                let currentWidth = 0;
                let interval = setInterval(() => {
                    if (currentWidth >= targetWidth) {
                        clearInterval(interval);
                        return;
                    }
                    currentWidth++;
                    bar.style.width = currentWidth + "%";
                }, 10);
            }
        }

        function checkProgress() {
            for (let bar of progressBar) {
                let position = bar.getBoundingClientRect().top;
                if (position < window.innerHeight) {
                    fillProgress();
                }
            }
        }

        window.addEventListener("scroll", checkProgress);
        checkProgress();

        return () => {
            window.removeEventListener("scroll", checkProgress);
        };
    }, []);

    return (
        <section id="skills" className="skills section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2 style={{ marginBottom: "10px" }}>My Proficiencies</h2>
                    <p style={{ marginTop: "20px", color: "white", fontWeight: 300, fontSize: '16px' }}>
                        {"I bring a diverse skill set that marries the art of front-end development with a solid foundation in web design. My proficiency extends across key technologies, enabling me to craft engaging and interactive web applications. With meticulous attention to detail and an unwavering focus on user experience, I consistently deliver polished, responsive, and user-friendly websites. My dedication to remaining at the forefront of the latest industry trends ensures I'm always ready to tackle new challenges and deliver top-notch results."}
                    </p>
                </div>

                <div className="row skills-content">
                    <div className="col-lg-6">
                        <div className="container">
                            <div className="progress">
                                <span className="skill">HTML <i className="val">{progress.HTML}%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={progress.HTML} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">Node Js <i className="val">{progress.NodeJs}%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={progress.NodeJs} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">CSS <i className="val">{progress.CSS}%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={progress.CSS} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">JavaScript <i className="val">{progress.JavaScript}%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={progress.JavaScript} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">phpMyAdmin <i className="val">{progress.phpMyAdmin}%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={progress.phpMyAdmin} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">Shopify Elementor ...<i className="val">{progress.ShopifyElementor}%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={progress.ShopifyElementor} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="container">
                            <div className="progress">
                                <span className="skill">XAMPP <i className="val">{progress.XAMPP}%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={progress.XAMPP} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">NextJs <i className="val">{progress.NextJs}%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={progress.NextJs} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">MySQL <i className="val">{progress.MySQL}%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={progress.MySQL} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">Liquid Theme Customization ...<i className="val">{progress.LiquidThemeCustomization}%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={progress.LiquidThemeCustomization} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">E-commerce Solutions <i className="val">{progress.EcommerceSolutions}%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={progress.EcommerceSolutions} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">React <i className="val">{progress.ReactNext}%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={progress.ReactNext} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            {/* Add more skills here */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
