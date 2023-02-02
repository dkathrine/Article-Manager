export const usePost = async (url, body) => {

    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        const response = await fetch(url, options);
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}