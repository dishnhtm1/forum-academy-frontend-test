import React, { useState, useEffect } from 'react';
import NewsSection from '../components/NewsSection';
import '../styles/NewsPage.css';

const NewsPage = () => {
    // State to track which category is active
    const [activeCategory, setActiveCategory] = useState('all');
    
    // Animation for news items when they load
    useEffect(() => {
        const newsItems = document.querySelectorAll('.news-item');
        
        newsItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, 100 * index);
        });
    }, []);

    // Filter news items by category
    const filterNews = (category) => {
        setActiveCategory(category);
        
        // In a real application, you would filter the news items based on category
        // For this demo, we'll just change the active state
    };

    return (
        <div className="news-page">
            {/* Hero section */}
            <section className="news-hero">
                <div className="container">
                    <div className="news-hero-content">
                        <h1>News & Events</h1>
                        <p>Stay updated with the latest happenings at Forum Information Academy.</p>
                    </div>
                </div>
            </section>
            
            {/* Filter categories */}
            <section className="news-filters">
                <div className="container">
                    <div className="filter-buttons">
                        <button 
                            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                            onClick={() => filterNews('all')}
                        >
                            All News
                        </button>
                        <button 
                            className={`filter-btn ${activeCategory === 'events' ? 'active' : ''}`}
                            onClick={() => filterNews('events')}
                        >
                            Events
                        </button>
                        <button 
                            className={`filter-btn ${activeCategory === 'announcements' ? 'active' : ''}`}
                            onClick={() => filterNews('announcements')}
                        >
                            Announcements
                        </button>
                        <button 
                            className={`filter-btn ${activeCategory === 'achievements' ? 'active' : ''}`}
                            onClick={() => filterNews('achievements')}
                        >
                            Student Achievements
                        </button>
                    </div>
                </div>
            </section>
            
            {/* Featured news */}
            <section className="featured-news">
                <div className="container">
                    <div className="featured-news-item">
                        <div className="featured-news-image">
                            <video autoPlay muted loop>
                                <source src="/videos/data2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="featured-tag">Featured</div>
                        </div>
                        <div className="featured-news-content">
                            <div className="news-meta">
                                <span className="news-category">Event</span>
                                <span className="news-date">May 10, 2025</span>
                            </div>
                            <h2 className="featured-news-title">Annual Tech Symposium 2025</h2>
                            <p className="featured-news-excerpt">
                                Join us for our annual technology symposium featuring industry speakers, 
                                workshop sessions, and networking opportunities. The event will showcase 
                                the latest advancements in AI, cloud computing, and cybersecurity, with 
                                hands-on demonstrations and career opportunities from our partner companies.
                            </p>
                            <div className="news-cta">
                                <a href="/news/tech-symposium" className="btn btn-primary">Learn More</a>
                                <a href="/events/register" className="btn btn-outline">Register Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* News grid */}
            <section className="news-section">
                <div className="container">
                    <h2 className="section-title">Latest News & Updates</h2>
                    
                    <div className="news-grid">
                        <div className="news-item">
                            <div className="news-img">
                                <video controls autoPlay muted loop>
                                    <source src="/videos/data2.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="news-content">
                                <div className="news-meta">
                                    <span className="news-category">Event</span>
                                    <span className="news-date">May 10, 2025</span>
                                </div>
                                <h3 className="news-title">Annual Tech Symposium</h3>
                                <p className="news-excerpt">Join us for our annual technology symposium featuring industry speakers, workshop sessions, and networking opportunities.</p>
                                <a href="/news/tech-symposium" className="btn btn-outline">Read More</a>
                            </div>
                        </div>
                        
                        <div className="news-item">
                            <div className="news-img">
                                <video controls autoPlay muted loop>
                                    <source src="/videos/data1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="news-content">
                                <div className="news-meta">
                                    <span className="news-category">Announcement</span>
                                    <span className="news-date">April 28, 2025</span>
                                </div>
                                <h3 className="news-title">New Industry Partnership</h3>
                                <p className="news-excerpt">We're excited to announce our new partnership with SoftTech Inc. to provide exclusive internship opportunities for our students.</p>
                                <a href="/news/industry-partnership" className="btn btn-outline">Read More</a>
                            </div>
                        </div>
                        
                        <div className="news-item">
                            <div className="news-img">
                                <video controls autoPlay muted loop>
                                    <source src="/videos/web1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="news-content">
                                <div className="news-meta">
                                    <span className="news-category">Event</span>
                                    <span className="news-date">May 22, 2025</span>
                                </div>
                                <h3 className="news-title">Spring Open House</h3>
                                <p className="news-excerpt">Visit our campus to learn about our programs, meet instructors, and explore our facilities during our Spring Open House event.</p>
                                <a href="/news/spring-open-house" className="btn btn-outline">Read More</a>
                            </div>
                        </div>
                        
                        <div className="news-item">
                            <div className="news-img">
                                <img src="/images/student-achievement.jpg" alt="Student Achievement" />
                            </div>
                            <div className="news-content">
                                <div className="news-meta">
                                    <span className="news-category">Achievement</span>
                                    <span className="news-date">April 15, 2025</span>
                                </div>
                                <h3 className="news-title">Students Win National Hackathon</h3>
                                <p className="news-excerpt">A team of our students took first place at the National Coding Challenge with their innovative healthcare application.</p>
                                <a href="/news/hackathon-winners" className="btn btn-outline">Read More</a>
                            </div>
                        </div>
                        
                        <div className="news-item">
                            <div className="news-img">
                                <img src="/images/new-course.jpg" alt="New Course Announcement" />
                            </div>
                            <div className="news-content">
                                <div className="news-meta">
                                    <span className="news-category">Announcement</span>
                                    <span className="news-date">March 30, 2025</span>
                                </div>
                                <h3 className="news-title">New Course: Quantum Computing Fundamentals</h3>
                                <p className="news-excerpt">We're launching a new specialized course on quantum computing basics and applications, starting next semester.</p>
                                <a href="/news/quantum-computing-course" className="btn btn-outline">Read More</a>
                            </div>
                        </div>
                        
                        <div className="news-item">
                            <div className="news-img">
                                <img src="/images/guest-lecture.jpg" alt="Guest Lecture" />
                            </div>
                            <div className="news-content">
                                <div className="news-meta">
                                    <span className="news-category">Event</span>
                                    <span className="news-date">June 5, 2025</span>
                                </div>
                                <h3 className="news-title">Guest Lecture: AI Ethics in Modern Society</h3>
                                <p className="news-excerpt">Join us for a special lecture by Dr. Mika Tanaka on the ethical implications of AI in healthcare and finance.</p>
                                <a href="/news/ai-ethics-lecture" className="btn btn-outline">Read More</a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Pagination */}
                    <div className="pagination">
                        <button className="pagination-btn active">1</button>
                        <button className="pagination-btn">2</button>
                        <button className="pagination-btn">3</button>
                        <button className="pagination-btn">
                            <span className="material-icons">chevron_right</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsPage;