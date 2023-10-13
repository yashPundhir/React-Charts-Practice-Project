import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import categories from "../utils/constants";

ChartJS.register(ArcElement, Tooltip, Legend);

const labelsArr = [];
const dataArr = [];

function labelNames(categories) {
	for (const key in categories) {
		if (Object.hasOwnProperty.call(categories, key)) {
			labelsArr.push(key);
			dataArr.push(categories[key]);
		}
	}
}

labelNames(categories);

export function DoughnutChart() {
	const data = {
		labels: labelsArr,
		datasets: [
			{
				label: "# of Votes",
				data: dataArr,
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(249 ,168, 212,0.3)",
					"rgba(75, 192, 192, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(190 ,24 ,93, 1)",
					"rgba(75, 192, 192, 1)",
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
				<Doughnut data={data} />
			</div>
		</div>
	);
}
