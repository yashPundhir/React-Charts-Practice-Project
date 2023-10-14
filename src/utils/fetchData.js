async function fetchData() {
	try {
		const response = await fetch(
			"https://randomuser.me/api/?nat=us,dk,fr,gb,in,ua,au,br&results=100"
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error; // Propagate the error to the caller
	}
}

export default fetchData;
