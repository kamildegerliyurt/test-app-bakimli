// api.js
export const loginUserAPI = async (email, password) => {
    const response = await fetch('https://yourapi.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
};

export const registerUserAPI = async (email, password) => {
    const response = await fetch('https://yourapi.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
};
