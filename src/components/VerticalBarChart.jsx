import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

export function VerticalBarChart() {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "bottom",
			},
			title: {
				display: false,
				text: "Chart.js Bar Chart",
			},
		},
	};

	const data = {
		// labels,
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "Men's clothing",
				// data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
				data: [10, 20, 5, 15, 25, 30, 55],
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
			{
				label: "Women's clothing",
				// data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
				data: [17, 23, 8, 12, 28, 32, 44],
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};
	return (
		<div className="flex justify-center items-center mt-10">
			<div className="w-[800px]">
				<Bar options={options} data={data} />
			</div>
		</div>
	);
}
