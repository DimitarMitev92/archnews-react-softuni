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

    const token = await response.json();
    return token;
};