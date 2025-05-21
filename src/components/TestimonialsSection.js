import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import '../styles/TestimonialsSection.css';

const testimonials = [
    {
        quote: "The Full-Stack Web Development course completely transformed my career. The hands-on projects and supportive instructors gave me the confidence to build real-world applications and land my dream job.",
        author: "Yuki Tanaka",
        position: "Web Developer at TechCorp",
        avatar: "/images/testimonials/yuki.jpg",
        course: "Full-Stack Web Development"
    },
    {
        quote: "The Data Science program provided exactly what I needed to transition from my previous career. The curriculum was challenging but rewarding, and the career support helped me connect with employers in the field.",
        author: "David Chen",
        position: "Data Analyst at Global Analytics",
        avatar: "/images/testimonials/david.jpg",
        course: "Data Science & Analytics"
    },
    {
        quote: "As an international student, I appreciated the supportive environment and practical approach to learning. The cybersecurity course prepared me well for industry certifications and gave me valuable hands-on experience.",
        author: "Emily Rodriguez",
        position: "Security Specialist at SecureNet",
        avatar: "/images/testimonials/emily.jpg",
        course: "Cybersecurity"
    },
    {
        quote: "The AI & Machine Learning program exceeded my expectations. The curriculum was cutting-edge and the projects allowed me to build a strong portfolio that impressed recruiters.",
        author: "Michael Johnson",
        position: "ML Engineer at InnovAI",
        avatar: "/images/testimonials/michael.jpg",
        course: "AI & Machine Learning"
    },
    {
        quote: "Switching to tech seemed impossible until I joined the UX/UI Design program. The mentorship and practical assignments helped me build confidence and a stellar portfolio.",
        author: "Sarah Williams",
        position: "UX Designer at CreativeHub",
        avatar: "/images/testimonials/sarah.jpg",
        course: "UX/UI Design"
    }
];

const TestimonialsSection = () => {
    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2 style={{ color: "#333", fontWeight: "700", position: "relative", marginBottom: "1.5rem" }}>
                        Student Success Stories
                    </h2>
                    <p>Hear from our graduates who have successfully launched their careers in the tech industry.</p>
                </div>
                
                <div className="testimonials-swiper-container">
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 30,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{ 
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        loop={true}
                        className="testimonials-swiper"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial-card">
                                    <div className="quote-icon">
                                        <i className="fas fa-quote-left"></i>
                                    </div>
                                    <div className="testimonial-body">
                                        <p className="testimonial-text">{testimonial.quote}</p>
                                        <div className="course-tag">{testimonial.course}</div>
                                    </div>
                                    <div className="testimonial-author">
                                        <div className="testimonial-avatar">
                                            <img src={testimonial.avatar || "/images/placeholder-avatar.jpg"} alt={testimonial.author} />
                                        </div>
                                        <div className="author-info">
                                            <h4>{testimonial.author}</h4>
                                            <p>{testimonial.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;