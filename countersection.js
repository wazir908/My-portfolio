import React, { useEffect, useState } from 'react';
import './countersection.css';

const CounterSection = () => {
    const [counters, setCounters] = useState([
        { id: 1, target: 3, value: 0, label: 'Full Stack Webs' },
        { id: 2, target: 2, value: 0, label: 'Ecommerce webs' },
        { id: 3, target: 45, value: 0, label: 'Shopify Webs' },
        { id: 4, target: 3, value: 0, label: 'React Js Webs' },
        // Added a new counter for HTML/CSS/JS websites
        { id: 5, target: 12, value: 0, label: 'Static Websites' }
    ]);

    useEffect(() => {
        const updateCounter = () => {
            setCounters(prevCounters => (
                prevCounters.map(counter => ({
                    ...counter,
                    value: counter.value < counter.target ? counter.value + 1 : counter.value
                }))
            ));
        };

        const timer = setInterval(updateCounter, 50); // Adjust the interval for smoother animation

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="counter">
            <div className="container">
                <h2 className="projects-heading">Projects Completed</h2>
                <div className="counter__content">
                    <div className="row">
                        {counters.map(counter => (
                            <div key={counter.id} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter__item">
                                    <div className="counter__item__text">
                                        {/* Assuming img/icons/ci-1.png, ci-2.png, etc. exist */}
                                        <img src={`img/icons/ci-${counter.id}.png`} alt="" />
                                        <h2 className="counter_num">{counter.value}</h2>
                                        <p>{counter.label}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CounterSection;
