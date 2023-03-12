const baseUrl = `http://localhost:3030/users`;

export const register = async (fullName, username, email, password) => {
    const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: fullName,
            username: username,
            email: email,
            password: password,
        })
    });

    const result = await response.json();
    return result.accessToken;
};

export const login = async (email, password) => {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });
    const result = await response.json();
    return result.accessToken;
};