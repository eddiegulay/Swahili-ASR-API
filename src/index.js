async function query(filename) {
	const data = fs.readFileSync(filename);
	const response = await fetch(
		"https://api-inference.huggingface.co/models/eddiegulay/Whisperer_Mozilla_Sw_2000",
		{
			headers: { Authorization: access_token },
			method: "POST",
			body: data,
		}
	);
	const result = await response.json();
	return result;
}

query("sample1.flac").then((response) => {
	console.log(JSON.stringify(response));
});