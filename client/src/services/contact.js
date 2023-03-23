//TODO:FIXXXXXXXXXXXXX
const baseUrl = 'http://localhost:3030/jsonstore';

export const contact = async (name, email, phoneNumber, message) => {
    const response = await fetch(`${baseUrl}/messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            message: message,
        })
    });

    const result = await response.json();
    return result;
};