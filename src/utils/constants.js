/* eslint-disable no-inner-declarations */
import fetchData from "./fetchData.js";

async function processAndExportData() {
	try {
		const apiData = await fetchData();

		const categories = {};

		const barGraph = {
			male: {},
			female: {},
		};

		function sortdata(data) {
			data.forEach((item) => {
				if (item.nat in categories) {
					categories[item.nat] = categories[item.nat] + 1;
				} else {
					categories[item.nat] = 1;
				}
			});
		}

		function sortBarGraphData(data) {
			data.forEach((item) => {
				if (item.gender === "male") {
					if (item.nat in barGraph.male) {
						barGraph.male[item.nat] = barGraph.male[item.nat] + 1;
					} else {
						barGraph.male[item.nat] = 1;
					}
				}
				if (item.gender === "female") {
					if (item.nat in barGraph.female) {
						barGraph.female[item.nat] = barGraph.female[item.nat] + 1;
					} else {
						barGraph.female[item.nat] = 1;
					}
				}
			});
		}

		sortdata(apiData.results);

		sortBarGraphData(apiData.results);

		const keys = Object.keys(barGraph.male);

		keys.sort();

		const sortedBarGraph = {
			male: {},
			female: {},
		};

		for (const key of keys) {
			sortedBarGraph.male[key] = barGraph.male[key];
		}

		const keys2 = Object.keys(barGraph.female);

		keys2.sort();

		for (const key of keys2) {
			sortedBarGraph.female[key] = barGraph.female[key];
		}

		return {
			categories,
			sortedBarGraph,
		};
	} catch (error) {
		console.error("Error processing data:", error);
		throw error;
	}
}

export default processAndExportData;

// const apiData = fetchData();

// const categories = {};

// const barGraph = {
// 	male: {},
// 	female: {},
// };

// function sortdata(data) {
// 	data.forEach((item) => {
// 		if (item.nat in categories) {
// 			categories[item.nat] = categories[item.nat] + 1;
// 		} else {
// 			categories[item.nat] = 1;
// 		}
// 	});
// }
// sortdata(apiData.results);

// function sortBarGraphData(data) {
// 	data.forEach((item) => {
// 		if (item.gender === "male") {
// 			if (item.nat in barGraph.male) {
// 				barGraph.male[item.nat] = barGraph.male[item.nat] + 1;
// 			} else {
// 				barGraph.male[item.nat] = 1;
// 			}
// 		}
// 		if (item.gender === "female") {
// 			if (item.nat in barGraph.female) {
// 				barGraph.female[item.nat] = barGraph.female[item.nat] + 1;
// 			} else {
// 				barGraph.female[item.nat] = 1;
// 			}
// 		}
// 	});
// }
// sortBarGraphData(apiData.results);

// const keys = Object.keys(barGraph.male);

// keys.sort();

// export const sortedBarGraph = {
// 	male: {},
// 	female: {},
// };

// for (const key of keys) {
// 	sortedBarGraph.male[key] = barGraph.male[key];
// }

// const keys2 = Object.keys(barGraph.female);

// keys2.sort();

// for (const key of keys2) {
// 	sortedBarGraph.female[key] = barGraph.female[key];
// }

// export default categories;
