import React, { useState } from 'react';

const ApplicationForm = ({ step, onNext, onBack, formData }) => {
    // State for each step's form data
    const [personalData, setPersonalData] = useState(formData.personalInfo || {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        address: '',
    });
    
    const [educationData, setEducationData] = useState(formData.educationInfo || {
        highestEducation: '',
        schoolName: '',
        fieldOfStudy: '',
        graduationYear: '',
        currentEmployment: '',
        techExperience: 'none',
    });
    
    const [courseData, setCourseData] = useState(formData.courseSelection || {
        program: '',
        startDate: '',
        format: '',
        heardAboutUs: '',
    });
    
    const [additionalData, setAdditionalData] = useState(formData.additionalInfo || {
        goals: '',
        whyThisProgram: '',
        challenges: '',
        extraInfo: '',
        agreeToTerms: false,
    });
    
    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        let currentStepData;
        switch(step) {
            case 0:
                currentStepData = personalData;
                break;
            case 1:
                currentStepData = educationData;
                break;
            case 2:
                currentStepData = courseData;
                break;
            case 3:
                currentStepData = additionalData;
                break;
            default:
                currentStepData = {};
        }
        
        onNext(currentStepData);
    };
    
    // Render different form based on current step
    const renderStepContent = () => {
        switch(step) {
            case 0:
                return (
                    <div className="form-step">
                        <h2>Personal Information</h2>
                        <p className="form-intro">Please provide your basic contact information.</p>
                        
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input 
                                    type="text" 
                                    id="firstName" 
                                    value={personalData.firstName}
                                    onChange={(e) => setPersonalData({...personalData, firstName: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input 
                                    type="text" 
                                    id="lastName" 
                                    value={personalData.lastName}
                                    onChange={(e) => setPersonalData({...personalData, lastName: e.target.value})}
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    value={personalData.email}
                                    onChange={(e) => setPersonalData({...personalData, email: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    value={personalData.phone}
                                    onChange={(e) => setPersonalData({...personalData, phone: e.target.value})}
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="dateOfBirth">Date of Birth</label>
                                <input 
                                    type="date" 
                                    id="dateOfBirth" 
                                    value={personalData.dateOfBirth}
                                    onChange={(e) => setPersonalData({...personalData, dateOfBirth: e.target.value})}
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <textarea 
                                id="address" 
                                rows="3" 
                                value={personalData.address}
                                onChange={(e) => setPersonalData({...personalData, address: e.target.value})}
                                required
                            ></textarea>
                        </div>
                    </div>
                );
                
            case 1:
                return (
                    <div className="form-step">
                        <h2>Educational Background</h2>
                        <p className="form-intro">Tell us about your educational and professional experience.</p>
                        
                        <div className="form-group">
                            <label htmlFor="highestEducation">Highest Level of Education</label>
                            <select 
                                id="highestEducation" 
                                value={educationData.highestEducation}
                                onChange={(e) => setEducationData({...educationData, highestEducation: e.target.value})}
                                required
                            >
                                <option value="">Select option</option>
                                <option value="high-school">High School</option>
                                <option value="associates">Associate's Degree</option>
                                <option value="bachelors">Bachelor's Degree</option>
                                <option value="masters">Master's Degree</option>
                                <option value="phd">Ph.D. or Doctorate</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="schoolName">School/University Name</label>
                                <input 
                                    type="text" 
                                    id="schoolName" 
                                    value={educationData.schoolName}
                                    onChange={(e) => setEducationData({...educationData, schoolName: e.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="graduationYear">Graduation Year</label>
                                <input 
                                    type="text" 
                                    id="graduationYear" 
                                    value={educationData.graduationYear}
                                    onChange={(e) => setEducationData({...educationData, graduationYear: e.target.value})}
                                />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="fieldOfStudy">Field of Study</label>
                            <input 
                                type="text" 
                                id="fieldOfStudy" 
                                value={educationData.fieldOfStudy}
                                onChange={(e) => setEducationData({...educationData, fieldOfStudy: e.target.value})}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="currentEmployment">Current Employment</label>
                            <input 
                                type="text" 
                                id="currentEmployment" 
                                placeholder="Company name and position" 
                                value={educationData.currentEmployment}
                                onChange={(e) => setEducationData({...educationData, currentEmployment: e.target.value})}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label>Technical Experience Level</label>
                            <div className="radio-group">
                                <div className="radio-option">
                                    <input 
                                        type="radio" 
                                        id="techNone" 
                                        name="techExperience" 
                                        value="none" 
                                        checked={educationData.techExperience === 'none'}
                                        onChange={(e) => setEducationData({...educationData, techExperience: e.target.value})}
                                    />
                                    <label htmlFor="techNone">None</label>
                                </div>
                                <div className="radio-option">
                                    <input 
                                        type="radio" 
                                        id="techBeginner" 
                                        name="techExperience" 
                                        value="beginner" 
                                        checked={educationData.techExperience === 'beginner'}
                                        onChange={(e) => setEducationData({...educationData, techExperience: e.target.value})}
                                    />
                                    <label htmlFor="techBeginner">Beginner</label>
                                </div>
                                <div className="radio-option">
                                    <input 
                                        type="radio" 
                                        id="techIntermediate" 
                                        name="techExperience" 
                                        value="intermediate" 
                                        checked={educationData.techExperience === 'intermediate'}
                                        onChange={(e) => setEducationData({...educationData, techExperience: e.target.value})}
                                    />
                                    <label htmlFor="techIntermediate">Intermediate</label>
                                </div>
                                <div className="radio-option">
                                    <input 
                                        type="radio" 
                                        id="techAdvanced" 
                                        name="techExperience" 
                                        value="advanced" 
                                        checked={educationData.techExperience === 'advanced'}
                                        onChange={(e) => setEducationData({...educationData, techExperience: e.target.value})}
                                    />
                                    <label htmlFor="techAdvanced">Advanced</label>
                                </div>
                            </div>
                        </div>
                    </div>
                );
                
            case 2:
                return (
                    <div className="form-step">
                        <h2>Program Selection</h2>
                        <p className="form-intro">Choose your preferred program and start date.</p>
                        
                        <div className="form-group">
                            <label htmlFor="program">Program of Interest</label>
                            <select 
                                id="program" 
                                value={courseData.program}
                                onChange={(e) => setCourseData({...courseData, program: e.target.value})}
                                required
                            >
                                <option value="">Select a program</option>
                                <option value="web-development">Full-Stack Web Development</option>
                                <option value="data-science">Data Science & Analytics</option>
                                <option value="cybersecurity">Cybersecurity Specialist</option>
                                <option value="cloud-computing">Cloud Computing & DevOps</option>
                                <option value="ai-ml">AI & Machine Learning</option>
                                <option value="mobile-dev">Mobile App Development</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="startDate">Preferred Start Date</label>
                            <select 
                                id="startDate" 
                                value={courseData.startDate}
                                onChange={(e) => setCourseData({...courseData, startDate: e.target.value})}
                                required
                            >
                                <option value="">Select a start date</option>
                                <option value="june-2025">June 2025</option>
                                <option value="september-2025">September 2025</option>
                                <option value="january-2026">January 2026</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label>Preferred Format</label>
                            <div className="radio-group">
                                <div className="radio-option">
                                    <input 
                                        type="radio" 
                                        id="formatFulltime" 
                                        name="format" 
                                        value="fulltime" 
                                        checked={courseData.format === 'fulltime'}
                                        onChange={(e) => setCourseData({...courseData, format: e.target.value})}
                                        required
                                    />
                                    <label htmlFor="formatFulltime">Full-time (Mon-Fri, 9am-5pm)</label>
                                </div>
                                <div className="radio-option">
                                    <input 
                                        type="radio" 
                                        id="formatParttime" 
                                        name="format" 
                                        value="parttime" 
                                        checked={courseData.format === 'parttime'}
                                        onChange={(e) => setCourseData({...courseData, format: e.target.value})}
                                    />
                                    <label htmlFor="formatParttime">Part-time (Evenings & Weekends)</label>
                                </div>
                                <div className="radio-option">
                                    <input 
                                        type="radio" 
                                        id="formatFlexible" 
                                        name="format" 
                                        value="flexible" 
                                        checked={courseData.format === 'flexible'}
                                        onChange={(e) => setCourseData({...courseData, format: e.target.value})}
                                    />
                                    <label htmlFor="formatFlexible">Flexible (Online with mentorship)</label>
                                </div>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="heardAboutUs">How did you hear about us?</label>
                            <select 
                                id="heardAboutUs" 
                                value={courseData.heardAboutUs}
                                onChange={(e) => setCourseData({...courseData, heardAboutUs: e.target.value})}
                            >
                                <option value="">Select an option</option>
                                <option value="social-media">Social Media</option>
                                <option value="search-engine">Search Engine</option>
                                <option value="friend-referral">Friend/Family Referral</option>
                                <option value="alumni">Academy Alumni</option>
                                <option value="event">Event or Workshop</option>
                                <option value="advertisement">Advertisement</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                );
                
            case 3:
                return (
                    <div className="form-step">
                        <h2>Additional Information</h2>
                        <p className="form-intro">Help us understand your goals and motivations.</p>
                        
                        <div className="form-group">
                            <label htmlFor="goals">What are your career goals after completing this program?</label>
                            <textarea 
                                id="goals" 
                                rows="3" 
                                value={additionalData.goals}
                                onChange={(e) => setAdditionalData({...additionalData, goals: e.target.value})}
                                required
                            ></textarea>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="whyThisProgram">Why are you interested in this specific program?</label>
                            <textarea 
                                id="whyThisProgram" 
                                rows="3" 
                                value={additionalData.whyThisProgram}
                                onChange={(e) => setAdditionalData({...additionalData, whyThisProgram: e.target.value})}
                                required
                            ></textarea>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="challenges">What challenges do you expect to face during the program?</label>
                            <textarea 
                                id="challenges" 
                                rows="3" 
                                value={additionalData.challenges}
                                onChange={(e) => setAdditionalData({...additionalData, challenges: e.target.value})}
                            ></textarea>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="extraInfo">Any additional information you'd like us to know?</label>
                            <textarea 
                                id="extraInfo" 
                                rows="3" 
                                value={additionalData.extraInfo}
                                onChange={(e) => setAdditionalData({...additionalData, extraInfo: e.target.value})}
                            ></textarea>
                        </div>
                        
                        <div className="form-group checkbox-group">
                            <input 
                                type="checkbox" 
                                id="agreeToTerms" 
                                checked={additionalData.agreeToTerms}
                                onChange={(e) => setAdditionalData({...additionalData, agreeToTerms: e.target.checked})}
                                required
                            />
                            <label htmlFor="agreeToTerms">I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> and <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</label>
                        </div>
                    </div>
                );
                
            default:
                return <div>Unknown step</div>;
        }
    };
    
    return (
        <div className="application-form">
            <form onSubmit={handleSubmit}>
                {renderStepContent()}
                
                <div className="form-buttons">
                    {step > 0 && (
                        <button 
                            type="button" 
                            className="btn btn-outline" 
                            onClick={onBack}
                        >
                            Back
                        </button>
                    )}
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                    >
                        {step === 3 ? 'Submit Application' : 'Next Step'}
                    </button>
                </div>
            </form>
            
            <style jsx>{`
                .application-form {
                    width: 100%;
                }
                
                .form-step h2 {
                    margin-bottom: 0.5rem;
                    color: var(--dark, #1e293b);
                }
                
                .form-intro {
                    color: var(--secondary, #64748b);
                    margin-bottom: 2rem;
                }
                
                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                
                .form-group {
                    margin-bottom: 1.5rem;
                }
                
                .form-group label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                    color: var(--dark, #1e293b);
                }
                
                .form-group input[type="text"],
                .form-group input[type="email"],
                .form-group input[type="tel"],
                .form-group input[type="date"],
                .form-group select,
                .form-group textarea {
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #e2e8f0;
                    border-radius: 4px;
                    font-size: 1rem;
                    transition: border-color 0.3s;
                }
                
                .form-group input:focus,
                .form-group select:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: var(--primary, #2563eb);
                    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
                }
                
                .radio-group, .checkbox-group {
                    display: flex;
                    gap: 0.5rem;
                }
                
                .radio-group {
                    flex-wrap: wrap;
                }
                
                .radio-option {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-right: 1.5rem;
                }
                
                .checkbox-group {
                    align-items: flex-start;
                }
                
                .checkbox-group input {
                    margin-top: 0.25rem;
                }
                
                .form-buttons {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 2.5rem;
                }
                
                @media (max-width: 768px) {
                    .form-row {
                        grid-template-columns: 1fr;
                        gap: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default ApplicationForm;