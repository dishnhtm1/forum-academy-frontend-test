import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutSection.css';

const AboutSection = ({ showAllFeatures = false }) => {
    // Reference for section animation
    const sectionRef = useRef(null);
    
    // Add scroll animation effect
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        
        // Cleanup observer
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    
    // Core features to always show
    const coreFeatures = [
        {
            icon: "business",
            title: "Industry Partnerships",
            description: "We collaborate with leading tech companies to ensure our curriculum meets industry standards and provides real-world experience.",
            highlight: "200+ partner companies"
        },
        {
            icon: "people",
            title: "Expert Instructors",
            description: "Learn from professionals with years of industry experience who bring practical knowledge and insights to the classroom.",
            highlight: "15+ years avg. experience"
        },
        {
            icon: "laptop_mac",
            title: "Modern Facilities",
            description: "Our campus features state-of-the-art computer labs, collaborative workspaces, and the latest technology tools.",
            highlight: "Recently renovated campus"
        },
        {
            icon: "work",
            title: "Career Services",
            description: "We provide comprehensive job placement assistance, resume workshops, interview preparation, and networking opportunities.",
            highlight: "93% employment rate"
        }
    ];
    
    // Additional features to show on the full about page
    const additionalFeatures = [
        {
            icon: "school",
            title: "Industry-Recognized Certifications",
            description: "Our courses prepare students for top industry certifications that enhance employability and career advancement.",
            highlight: "8 certification paths"
        },
        {
            icon: "support",
            title: "Student Support",
            description: "Our dedicated support team ensures that students receive the guidance and resources they need throughout their learning journey.",
            highlight: "24/7 learning resources"
        }
    ];
    
    // Determine which features to display
    const displayFeatures = showAllFeatures ? 
        [...coreFeatures, ...additionalFeatures] : 
        coreFeatures;
        
    return (
        <section className="about-section" id="about" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Why Choose Us</span>
                    <h2>Forum Information Academy Advantage</h2>
                    <p>We're dedicated to providing cutting-edge IT education that prepares students for the real world.</p>
                </div>
                
                <div className="features-grid">
                    {displayFeatures.map((feature, index) => (
                        <div className="feature-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="feature-icon">
                                <span className="material-icons">{feature.icon}</span>
                            </div>
                            <div className="feature-content">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                                <div className="feature-highlight">
                                    <span className="highlight-badge">{feature.highlight}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {!showAllFeatures && (
                    <div className="learn-more-cta">
                        <div className="cta-content">
                            <h3>Want to know more about our approach?</h3>
                            <p>Discover our unique teaching methodology, campus facilities, and success stories.</p>
                        </div>
                        <Link to="/about" className="btn-learn-more">
                            Learn More About Us
                            <span className="material-icons">arrow_forward</span>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AboutSection;