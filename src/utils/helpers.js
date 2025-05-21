// This file contains utility functions that can be used throughout the application.

// Function to format dates in a user-friendly way
export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

// Function to validate email format
export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

// Function to generate a unique ID
export const generateUniqueId = () => {
    return 'id-' + Math.random().toString(36).substr(2, 16);
};