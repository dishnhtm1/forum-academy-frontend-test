import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update with your server URL

// Function to get all courses
export const getCourses = async () => {
    try {
        const response = await axios.get(`${API_URL}/courses`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching courses: ' + error.message);
    }
};

// Function to get a specific course by ID
export const getCourseById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/courses/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching course: ' + error.message);
    }
};

// Function to create a new application
export const createApplication = async (applicationData) => {
    try {
        const response = await axios.post(`${API_URL}/applications`, applicationData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating application: ' + error.message);
    }
};

// Function to get news articles
export const getNews = async () => {
    try {
        const response = await axios.get(`${API_URL}/news`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching news: ' + error.message);
    }
};