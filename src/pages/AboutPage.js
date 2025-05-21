import React, { useEffect } from 'react';
import '../styles/AboutPage.css';
import AboutSection from '../components/AboutSection';

// Within your return statement
<AboutSection showAllFeatures={true} />

const AboutPage = () => {
    // Animation effect for sections when they come into view
    useEffect(() => {
        const sections = document.querySelectorAll('.about-section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        sections.forEach(section => {
            observer.observe(section);
        });
        
        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);
    
    <AboutSection showAllFeatures={true} />
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-content">
                        <h1>About Forum Information Academy</h1>
                        <p>Shaping the future of IT education since 2010</p>
                    </div>
                </div>
            </section>
            
            {/* Our Story Section */}
            <section className="about-section our-story">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Story</h2>
                        <p>How we became Japan's leading IT education provider</p>
                    </div>
                    <div className="story-content">
                        <div className="story-image">
                            <img src="/images/campus.jpg" alt="Forum Information Academy Campus" />
                        </div>
                        <div className="story-text">
                            <p>Forum Information Academy was founded in 2010 with a mission to bridge the gap between traditional education and the rapidly evolving needs of the tech industry.</p>
                            <p>Starting with just 15 students and 3 instructors in a small office in Shibuya, we have grown into one of Japan's most respected IT education institutions, with over 5,000 graduates who have gone on to successful careers in technology.</p>
                            <p>Our journey has been defined by a commitment to excellence, innovation, and student success. As technology evolves, so do we, continuously updating our curriculum to ensure our students are prepared for the challenges of tomorrow.</p>
                            
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <h4>2010</h4>
                                        <p>Founded in Shibuya, Tokyo</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <h4>2013</h4>
                                        <p>Expanded curriculum to include data science</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <h4>2016</h4>
                                        <p>Opened new campus in Osaka</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <h4>2020</h4>
                                        <p>Celebrated 10 years with 5,000+ graduates</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Why Choose Us Section */}
            <section className="about-section why-choose-us" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className="section-header">
                        <h2>Why Choose Forum Information Academy</h2>
                        <p>We're dedicated to providing cutting-edge IT education that prepares students for the real world.</p>
                    </div>
                    <div className="features">
                        <div className="feature">
                            <div className="feature-icon">
                                <span className="material-icons">business</span>
                            </div>
                            <h3>Industry Partnerships</h3>
                            <p>We collaborate with leading tech companies to ensure our curriculum meets industry standards and provides real-world experience.</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">
                                <span className="material-icons">people</span>
                            </div>
                            <h3>Expert Instructors</h3>
                            <p>Learn from professionals with years of industry experience who bring practical knowledge and insights to the classroom.</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">
                                <span className="material-icons">laptop_mac</span>
                            </div>
                            <h3>Modern Facilities</h3>
                            <p>Our campus features state-of-the-art computer labs, collaborative workspaces, and the latest technology tools.</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">
                                <span className="material-icons">work</span>
                            </div>
                            <h3>Career Services</h3>
                            <p>We provide comprehensive job placement assistance, resume workshops, interview preparation, and networking opportunities.</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">
                                <span className="material-icons">school</span>
                            </div>
                            <h3>Industry-Recognized Certifications</h3>
                            <p>Our courses prepare students for top industry certifications that enhance employability and career advancement.</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">
                                <span className="material-icons">support</span>
                            </div>
                            <h3>Student Support</h3>
                            <p>Our dedicated support team ensures that students receive the guidance and resources they need throughout their learning journey.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Mission & Vision */}
            <section className="about-section mission-vision">
                <div className="container">
                    <div className="mission-vision-grid">
                        <div className="mission-box">
                            <h2>Our Mission</h2>
                            <p>To empower individuals with the skills, knowledge, and support they need to thrive in the digital economy and shape the future of technology.</p>
                            <div className="mission-icon">
                                <span className="material-icons">lightbulb</span>
                            </div>
                        </div>
                        <div className="vision-box">
                            <h2>Our Vision</h2>
                            <p>To be the premier technology education institution in Asia, known for innovative teaching methods and producing graduates who lead technological innovation globally.</p>
                            <div className="vision-icon">
                                <span className="material-icons">visibility</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Our Team */}
            <section className="about-section team-section" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className="section-header">
                        <h2>Meet Our Leadership Team</h2>
                        <p>The experienced professionals guiding our academy</p>
                    </div>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-image">
                                <img src="/images/team1.jpg" alt="Hiroshi Yamada" />
                            </div>
                            <div className="member-info">
                                <h3>Hiroshi Yamada</h3>
                                <p className="member-role">Founder & CEO</p>
                                <p className="member-bio">Former software architect at Sony with over 20 years of experience in the tech industry.</p>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="member-image">
                                <img src="/images/team2.jpg" alt="Akiko Tanaka" />
                            </div>
                            <div className="member-info">
                                <h3>Akiko Tanaka</h3>
                                <p className="member-role">Academic Director</p>
                                <p className="member-bio">PhD in Computer Science with expertise in AI and machine learning education.</p>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="member-image">
                                <img src="/images/team3.jpg" alt="Ken Sato" />
                            </div>
                            <div className="member-info">
                                <h3>Ken Sato</h3>
                                <p className="member-role">Industry Relations</p>
                                <p className="member-bio">Former CTO who maintains our network of over 200 partnering companies.</p>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="member-image">
                                <img src="/images/team4.jpg" alt="Yuki Nakamura" />
                            </div>
                            <div className="member-info">
                                <h3>Yuki Nakamura</h3>
                                <p className="member-role">Student Success</p>
                                <p className="member-bio">Dedicated to ensuring student satisfaction and career placement after graduation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Campus Section */}
            <section className="about-section campus-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Campus Facilities</h2>
                        <p>Experience learning in our state-of-the-art environment</p>
                    </div>
                    <div className="campus-gallery">
                        <div className="campus-image">
                            <img src="/images/campus1.jpg" alt="Computer Lab" />
                            <div className="campus-caption">Advanced Computer Labs</div>
                        </div>
                        <div className="campus-image">
                            <img src="/images/campus2.jpg" alt="Collaboration Space" />
                            <div className="campus-caption">Collaborative Workspaces</div>
                        </div>
                        <div className="campus-image">
                            <img src="/images/campus3.jpg" alt="Lecture Hall" />
                            <div className="campus-caption">Modern Lecture Halls</div>
                        </div>
                        <div className="campus-image">
                            <img src="/images/campus4.jpg" alt="Student Lounge" />
                            <div className="campus-caption">Student Lounges</div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Call to Action */}
            <section className="about-section cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Start Your IT Career?</h2>
                        <p>Join thousands of successful graduates who have transformed their futures with Forum Information Academy.</p>
                        <div className="cta-buttons">
                            <a href="/courses" className="btn btn-primary">Browse Courses</a>
                            <a href="/apply" className="btn btn-outline">Apply Now</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;