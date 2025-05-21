import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CourseSection from '../components/CourseSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import StatsSection from '../components/StatsSection';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';
import Hero from '../components/Hero';
import '../styles/HomePage.css';

const HomePage = () => {
    // Add animation effects when components enter viewport
    useEffect(() => {
        // If anime.js is available, add entry animations for sections
        if (window.anime) {
            const sections = document.querySelectorAll('.home-page .section');
            sections.forEach((section) => {
                // Observe when section enters viewport
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // Animate section when it comes into view
                            window.anime({
                                targets: entry.target,
                                opacity: [0, 1],
                                translateY: [20, 0],
                                easing: 'easeOutQuad',
                                duration: 600,
                                delay: 100
                            });
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });
                
                observer.observe(section);
            });
        }
    }, []);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <Hero />
                
            {/* Course Catalog Section - Key Feature 1 */}
            <section className="section" id="courses">
                <div className="container" style={{ maxWidth: '1100px', padding: '2rem 1.5rem' }}>
                    <div className="section-header">
                        <h2>Our Courses</h2>
                        <p>Explore our wide range of IT courses designed to prepare you for the careers of today and tomorrow.</p>
                    </div>
                    
                    {/* Course filters */}
                    <div className="course-filters tag-list" style={{ margin: '1.5rem 0' }}>
                        <div className="inner">
                            <button className="filter-btn tag active">
                                <span className="material-icons">school</span>
                                All Courses
                            </button>
                            <button className="filter-btn tag">
                                <span className="material-icons">code</span>
                                Web Development
                            </button>
                            <button className="filter-btn tag">
                                <span className="material-icons">analytics</span>
                                Data Science
                            </button>
                            <button className="filter-btn tag">
                                <span className="material-icons">security</span>
                                Cybersecurity
                            </button>
                            <button className="filter-btn tag">
                                <span className="material-icons">cloud</span>
                                Cloud Computing
                            </button>
                            <button className="filter-btn tag">
                                <span className="material-icons">smart_toy</span>
                                Artificial Intelligence
                            </button>
                        </div>
                        <div className="fade"></div>
                    </div>
                    
                    <CourseSection />
                </div>
            </section>

            {/* About Section - Key Feature 2 */}
            <section className="section" id="about" style={{backgroundColor: '#f8f9fa'}}>
                <div className="container">
                    <AboutSection />
                </div>
            </section>

            {/* Stats Section */}
            <section className="section" id="stats">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Impact</h2>
                        <p>The numbers that define our success in preparing the next generation of tech professionals.</p>
                    </div>
                    <StatsSection />
                </div>
            </section>

            {/* Testimonials Section - Key Feature 3 */}
            <section className="section" id="testimonials" style={{backgroundColor: '#f8f9fa'}}>
                <div className="container">
                    <TestimonialsSection 
                        title="Student Success Stories"
                        subtitle="Hear from our graduates who have successfully launched their careers in the tech industry."
                    />
                </div>
            </section>

            {/* News Section */}
            <section className="section" id="news">
                <div className="container">
                    <NewsSection 
                        title="Latest News & Events"
                        subtitle="Stay updated with our latest announcements, events, and tech industry insights."
                    />
                </div>
            </section>
            
            {/* Contact Section */}
            <section className="section" id="contact" style={{backgroundColor: '#f8f9fa'}}>
                <div className="container">
                    <ContactSection 
                        title="Get In Touch"
                        subtitle="Have questions? We're here to help you start your journey in tech education."
                    />
                </div>
            </section>
        </div>
    );
};

export default HomePage;