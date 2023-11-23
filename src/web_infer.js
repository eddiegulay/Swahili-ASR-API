async function query(filename) {
    const data = new FormData();
    data.append('file', filename);

    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/eddiegulay/Whisperer_Mozilla_Sw_2000",
            {
                method: "POST",
                body: data,
                headers: {
                    Authorization: access_token,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error:', error);
        return { error: 'Failed to process audio.' };
    }
}

async function processAudio() {
    const inputElement = document.getElementById('audioFileInput');
    const outputElement = document.getElementById('output');

    if (!inputElement.files.length) {
        outputElement.textContent = 'Please select an audio file.';
        return;
    }

    const audioFile = inputElement.files[0];

    try {
        const result = await query(audioFile);
        outputElement.textContent = JSON.stringify(result, null, 2);
    } catch (error) {
        outputElement.textContent = `Error: ${error.message}`;
    }
}
