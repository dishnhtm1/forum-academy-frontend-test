import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CareerServicesPage.css';

function CareerServicesPage() {
    // Add animation when page loads
    useEffect(() => {
        if (window.anime) {
            // Animate elements when they enter the viewport
            const animatedElements = document.querySelectorAll('.animate-entry');
            // Add this inside your useEffect function
            // Handle FAQ toggles
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    // Toggle current item
                    item.classList.toggle('active');
                    const toggleIcon = item.querySelector('.toggle-icon');
                    toggleIcon.textContent = item.classList.contains('active') ? 'close' : 'add';
                });
            });

            animatedElements.forEach((element) => {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });

                observer.observe(element);
            });
        }
    }, []);

    return (
        <div className="career-services-page">
            {/* Hero Section */}
            <section className="career-hero">
                <div className="container">
                    <div className="career-hero-content animate-entry">
                        <h1>Launch Your Tech Career</h1>
                        <p className="subtitle">Our dedicated career services team helps you transition from student to industry professional.</p>
                        <Link to="/apply" className="btn btn-primary">Apply Now</Link>
                    </div>
                </div>
                <div className="career-stats">
                    <div className="container">
                        <div className="stats-grid">
                            <div className="stat-card animate-entry">
                                <div className="stat-number">93%</div>
                                <div className="stat-label">Employment Rate</div>
                            </div>
                            <div className="stat-card animate-entry">
                                <div className="stat-number">¥4.2M</div>
                                <div className="stat-label">Average Starting Salary</div>
                            </div>
                            <div className="stat-card animate-entry">
                                <div className="stat-number">200+</div>
                                <div className="stat-label">Hiring Partners</div>
                            </div>
                            <div className="stat-card animate-entry">
                                <div className="stat-number">14+</div>
                                <div className="stat-label">Career Events Annually</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Support Section */}
            <section className="career-support-section">
                <div className="container">
                    <div className="section-header animate-entry">
                        <h2>Comprehensive Career Support</h2>
                        <p>We provide end-to-end career support to ensure your successful transition into the tech industry.</p>
                    </div>

                    <div className="support-grid">
                        <div className="support-card animate-entry">
                            <div className="card-icon">
                                <span className="material-icons">assignment_ind</span>
                            </div>
                            <h3>Resume Building</h3>
                            <p>Craft a tech-focused resume that highlights your skills and projects to catch recruiters' attention.</p>
                        </div>

                        <div className="support-card animate-entry">
                            <div className="card-icon">
                                <span className="material-icons">record_voice_over</span>
                            </div>
                            <h3>Interview Preparation</h3>
                            <p>Practice technical interviews, whiteboard challenges, and behavioral questions with industry experts.</p>
                        </div>

                        <div className="support-card animate-entry">
                            <div className="card-icon">
                                <span className="material-icons">handshake</span>
                            </div>
                            <h3>Networking Events</h3>
                            <p>Connect with hiring partners and industry professionals at exclusive networking events and job fairs.</p>
                        </div>

                        <div className="support-card animate-entry">
                            <div className="card-icon">
                                <span className="material-icons">work</span>
                            </div>
                            <h3>Job Placement</h3>
                            <p>Access our network of hiring partners and receive personalized job matching services.</p>
                        </div>

                        <div className="support-card animate-entry">
                            <div className="card-icon">
                                <span className="material-icons">public</span>
                            </div>
                            <h3>Global Opportunities</h3>
                            <p>Explore international career paths with our global network of tech companies and startups.</p>
                        </div>

                        <div className="support-card animate-entry">
                            <div className="card-icon">
                                <span className="material-icons">trending_up</span>
                            </div>
                            <h3>Career Advancement</h3>
                            <p>Receive ongoing support and resources for continued professional growth after placement.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Journey Section */}
            <section className="career-journey-section">
                <div className="container">
                    <div className="section-header animate-entry">
                        <h2>Your Career Journey</h2>
                        <p>Our structured approach ensures you're fully prepared for the tech job market.</p>
                    </div>

                    <div className="journey-timeline">
                        <div className="timeline-item animate-entry">
                            <div className="timeline-marker">1</div>
                            <div className="timeline-content">
                                <h3>Career Assessment</h3>
                                <p>We start by understanding your career goals, strengths, and preferences to create a personalized career plan.</p>
                            </div>
                        </div>

                        <div className="timeline-item animate-entry">
                            <div className="timeline-marker">2</div>
                            <div className="timeline-content">
                                <h3>Skills Development</h3>
                                <p>Alongside your technical training, we help develop essential soft skills valued by employers.</p>
                            </div>
                        </div>

                        <div className="timeline-item animate-entry">
                            <div className="timeline-marker">3</div>
                            <div className="timeline-content">
                                <h3>Portfolio Review</h3>
                                <p>Our industry experts review and help polish your project portfolio to showcase your best work.</p>
                            </div>
                        </div>

                        <div className="timeline-item animate-entry">
                            <div className="timeline-marker">4</div>
                            <div className="timeline-content">
                                <h3>Interview Training</h3>
                                <p>Practice technical and behavioral interviews with personalized feedback and improvement strategies.</p>
                            </div>
                        </div>

                        <div className="timeline-item animate-entry">
                            <div className="timeline-marker">5</div>
                            <div className="timeline-content">
                                <h3>Job Matching</h3>
                                <p>We connect you with opportunities that match your skills and career aspirations from our partner network.</p>
                            </div>
                        </div>

                        <div className="timeline-item animate-entry">
                            <div className="timeline-marker">6</div>
                            <div className="timeline-content">
                                <h3>Ongoing Support</h3>
                                <p>Our support doesn't end at placement—we provide continued guidance as you grow in your tech career.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hiring Partners Section */}
            <section className="hiring-partners-section">
                <div className="container">
                    <div className="section-header animate-entry">
                        <h2>Our Hiring Partners</h2>
                        <p>We've built strong relationships with leading tech companies who regularly hire our graduates.</p>
                    </div>

                    <div className="partners-grid">
                        {/* Replace with actual partner logos */}
                        <div className="partner-logo animate-entry">
                            <img src="/images/partners/microsoft.png" alt="Microsoft" />
                        </div>
                        <div className="partner-logo animate-entry">
                            <img src="/images/partners/google.png" alt="Google" />
                        </div>
                        <div className="partner-logo animate-entry">
                            <img src="/images/partners/amazon.png" alt="Amazon" />
                        </div>
                        <div className="partner-logo animate-entry">
                            <img src="/images/partners/rakuten.png" alt="Rakuten" />
                        </div>
                        <div className="partner-logo animate-entry">
                            <img src="/images/partners/softbank.png" alt="SoftBank" />
                        </div>
                        <div className="partner-logo animate-entry">
                            <img src="/images/partners/mercari.png" alt="Mercari" />
                        </div>
                        <div className="partner-logo animate-entry">
                            <img src="/images/partners/ntt.png" alt="NTT" />
                        </div>
                        <div className="partner-logo animate-entry">
                            <img src="/images/partners/hitachi.png" alt="Hitachi" />
                        </div>
                    </div>

                    <div className="partners-cta animate-entry">
                        <Link to="/partners" className="btn btn-secondary">View All Partners</Link>
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="success-stories-section">
                <div className="container">
                    <div className="section-header animate-entry">
                        <h2>Graduate Success Stories</h2>
                        <p>Our alumni have secured positions at some of the world's most innovative companies.</p>
                    </div>

                    <div className="stories-grid">
                        <div className="story-card animate-entry">
                            <div className="story-image">
                                <img src="/images/graduates/graduate1.jpg" alt="Taro Yamada" />
                                <div className="company-badge">
                                    <img src="/images/partners/google-small.png" alt="Google" />
                                </div>
                            </div>
                            <div className="story-content">
                                <h3>Taro Yamada</h3>
                                <p className="story-role">Software Engineer at Google</p>
                                <p className="story-quote">"The career support at FIA was instrumental in helping me land my dream job at Google. Their interview preparation was spot-on."</p>
                            </div>
                        </div>

                        <div className="story-card animate-entry">
                            <div className="story-image">
                                <img src="/images/graduates/graduate2.jpg" alt="Hanako Sato" />
                                <div className="company-badge">
                                    <img src="/images/partners/mercari-small.png" alt="Mercari" />
                                </div>
                            </div>
                            <div className="story-content">
                                <h3>Hanako Sato</h3>
                                <p className="story-role">Full-Stack Developer at Mercari</p>
                                <p className="story-quote">"FIA's networking events connected me directly with Mercari's recruiting team. Three weeks after graduation, I had multiple offers."</p>
                            </div>
                        </div>

                        <div className="story-card animate-entry">
                            <div className="story-image">
                                <img src="/images/graduates/graduate3.jpg" alt="Michael Chen" />
                                <div className="company-badge">
                                    <img src="/images/partners/amazon-small.png" alt="Amazon" />
                                </div>
                            </div>
                            <div className="story-content">
                                <h3>Michael Chen</h3>
                                <p className="story-role">Data Scientist at Amazon</p>
                                <p className="story-quote">"The personalized career coaching helped me reframe my previous experience for tech roles. Forever grateful for FIA's support."</p>
                            </div>
                        </div>
                    </div>

                    <div className="stories-cta animate-entry">
                        <Link to="/testimonials" className="btn btn-secondary">More Success Stories</Link>
                    </div>
                </div>
            </section>

            {/* Career FAQ Section */}
            <section className="career-faq-section">
                <div className="container">
                    <div className="section-header animate-entry">
                        <h2>Career Services FAQ</h2>
                        <p>Answers to commonly asked questions about our career support programs.</p>
                    </div>

                    <div className="faq-container">
                        <div className="faq-item animate-entry">
                            <div className="faq-question">
                                <h3>When does career support begin?</h3>
                                <span className="material-icons toggle-icon">add</span>
                            </div>
                            <div className="faq-answer">
                                <p>Career support begins from day one of your program. We integrate career readiness throughout the curriculum, with dedicated career service intensives in the later stages of your training.</p>
                            </div>
                        </div>

                        <div className="faq-item animate-entry">
                            <div className="faq-question">
                                <h3>How long do I have access to career services?</h3>
                                <span className="material-icons toggle-icon">add</span>
                            </div>
                            <div className="faq-answer">
                                <p>Graduates receive unlimited career support for 12 months after graduation. After that, you'll join our alumni network with access to exclusive events and opportunities.</p>
                            </div>
                        </div>

                        <div className="faq-item animate-entry">
                            <div className="faq-question">
                                <h3>Do you guarantee job placement?</h3>
                                <span className="material-icons toggle-icon">add</span>
                            </div>
                            <div className="faq-answer">
                                <p>While we don't guarantee placement, our 93% employment rate within 6 months of graduation speaks to the effectiveness of our career services. Our team works tirelessly to connect you with opportunities that match your skills.</p>
                            </div>
                        </div>

                        <div className="faq-item animate-entry">
                            <div className="faq-question">
                                <h3>Can I get help with visa sponsorship for international roles?</h3>
                                <span className="material-icons toggle-icon">add</span>
                            </div>
                            <div className="faq-answer">
                                <p>Yes, we have experience helping graduates secure roles with visa sponsorship. We maintain relationships with companies that are open to sponsoring qualified international candidates.</p>
                            </div>
                        </div>

                        <div className="faq-item animate-entry">
                            <div className="faq-question">
                                <h3>What if I'm interested in freelancing or entrepreneurship?</h3>
                                <span className="material-icons toggle-icon">add</span>
                            </div>
                            <div className="faq-answer">
                                <p>Our career services team also supports graduates interested in freelancing or launching startups. We offer specialized guidance on building a client base, setting rates, and establishing your business.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Services CTA Section */}
            <section className="career-cta-section">
                <div className="container">
                    <div className="cta-content animate-entry">
                        <h2>Take the Next Step in Your Tech Career</h2>
                        <p>Join Forum Information Academy and unlock your potential with our comprehensive technical training and career support.</p>
                        <div className="cta-buttons">
                            <Link to="/apply" className="btn btn-primary">Apply Now</Link>
                            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CareerServicesPage;