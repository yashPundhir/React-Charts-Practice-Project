import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";

import processAndExportData from "../utils/constants.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart() {
	const [labelsArr, setLabelsArr] = useState([]);
	const [dataArr, setDataArr] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			const { categories } = await processAndExportData();
			const labels = [];
			const data = [];

			for (const key in categories) {
				if (Object.hasOwnProperty.call(categories, key)) {
					labels.push(key);
					data.push(categories[key]);
				}
			}

			setLabelsArr(labels);
			setDataArr(data);
			setIsLoading(false);
		}

		fetchData();
	}, []);

	const data = {
		labels: labelsArr,
		datasets: [
			{
				label: "# of Citizens",
				data: dataArr,
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(190 ,24 ,93, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(69,206,48,0.2)",
					"rgba(88,103,118,0.2)",
					"rgba(187,44,217,0.2)",
					"rgba(234,119,115,0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(190 ,24 ,93, 1)",
					"rgba(75, 192, 192, 1)",
					"#45CE30",
					"#586776",
					"#BB2CD9",
					"#EA7773",
				],
				borderWidth: 1.5,
			},
			// {
			// 	label: "# of Votes",
			// 	data: [10, 10, 20, 38, 25, 30, 22],
			// 	backgroundColor: [
			// 		"rgba(255, 99, 132, 0.2)",
			// 		"rgba(54, 162, 235, 0.2)",
			// 		"rgba(255, 206, 86, 0.2)",
			// 		"rgba(75, 192, 192, 0.2)",
			// 		"rgba(153, 102, 255, 0.2)",
			// 		"rgba(255, 159, 64, 0.2)",
			// 		"#b7ffa6",
			// 	],
			// 	borderColor: [
			// 		"rgba(255, 99, 132, 1)",
			// 		"rgba(54, 162, 235, 1)",
			// 		"rgba(255, 206, 86, 1)",
			// 		"rgba(75, 192, 192, 1)",
			// 		"rgba(153, 102, 255, 1)",
			// 		"rgba(255, 159, 64, 1)",
			// 		"#49fc1e",
			// 	],
			// 	borderWidth: 1,
			// },
		],
	};
	return (
		<div className="flex justify-center items-center">
			<div className="w-[400px] border-4 p-5">
				{isLoading ? (
					<p className="text-4xl text-red-400">Loading Data, Please Wait...</p>
				) : (
					<Doughnut data={data} />
				)}
			</div>
		</div>
	);
}
