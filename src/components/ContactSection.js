import React, { useState, useRef, useEffect } from 'react';
import '../styles/ContactSection.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: ''
    });
    
    const sectionRef = useRef(null);

    // Animation on scroll
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
        
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simulate form submission
        setFormStatus({
            submitted: true,
            error: false,
            message: 'Thank you for your message! We will get back to you shortly.'
        });
        
        // Reset form after successful submission
        setTimeout(() => {
            if (!formStatus.error) {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            }
        }, 3000);
    };

    return (
        <section className="contact-section" id="contact" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Get in Touch</span>
                    <h2>Contact Us</h2>
                    <p>We're here to answer any questions you have about our programs and admissions process.</p>
                </div>
                
                <div className="contact-grid">
                    <div className="contact-form-wrapper">
                        <div className="contact-form-card">
                            <h3>Send Us a Message</h3>
                            {formStatus.submitted && (
                                <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                                    <span className="material-icons">
                                        {formStatus.error ? 'error' : 'check_circle'}
                                    </span>
                                    <p>{formStatus.message}</p>
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name <span className="required">*</span></label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-input" 
                                            required 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address <span className="required">*</span></label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-input" 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="form-input" 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message <span className="required">*</span></label>
                                    <textarea 
                                        id="message" 
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="form-input" 
                                        rows="5" 
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn-submit">
                                    Send Message
                                    <span className="material-icons">send</span>
                                </button>
                            </form>
                        </div>
                    </div>
                    
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-header">
                                <h3>Our Information</h3>
                                <p>Feel free to reach out to us through any of these channels:</p>
                            </div>
                            
                            <div className="info-items">
                                <div className="info-item">
                                    <span className="material-icons">location_on</span>
                                    <div>
                                        <h4>Address</h4>
                                        <p>3-1-5 Shibuya, Shibuya City<br />Tokyo, Japan 150-0002</p>
                                    </div>
                                </div>
                                
                                <div className="info-item">
                                    <span className="material-icons">phone</span>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>Main: +81-3-1234-5678<br />Admissions: +81-3-1234-5679</p>
                                    </div>
                                </div>
                                
                                <div className="info-item">
                                    <span className="material-icons">email</span>
                                    <div>
                                        <h4>Email</h4>
                                        <p>info@forumacademy.jp<br />admissions@forumacademy.jp</p>
                                    </div>
                                </div>
                                
                                <div className="info-item">
                                    <span className="material-icons">schedule</span>
                                    <div>
                                        <h4>Hours</h4>
                                        <p>Monday - Friday: 9AM - 6PM<br />Saturday: 10AM - 3PM</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="social-links">
                                <h4>Connect With Us</h4>
                                <div className="social-icons">
                                    <a href="https://twitter.com/forumacademy" className="social-icon" aria-label="Twitter">
                                        <span className="material-icons">alternate_email</span>
                                    </a>
                                    <a href="https://facebook.com/forumacademy" className="social-icon" aria-label="Facebook">
                                        <span className="material-icons">facebook</span>
                                    </a>
                                    <a href="https://instagram.com/forumacademy" className="social-icon" aria-label="Instagram">
                                        <span className="material-icons">photo_camera</span>
                                    </a>
                                    <a href="https://linkedin.com/company/forumacademy" className="social-icon" aria-label="LinkedIn">
                                        <span className="material-icons">work</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="map-preview">
                            <img src="/images/map-preview.jpg" alt="Map location of Forum Information Academy" />
                            <a href="https://goo.gl/maps/8F5HVCFgEZj4TPUR7" className="btn-directions" target="_blank" rel="noopener noreferrer">
                                Get Directions
                                <span className="material-icons">directions</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;