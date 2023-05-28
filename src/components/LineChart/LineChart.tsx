import { Line } from "react-chartjs-2";
import "chart.js/auto";

type LineChartProps = {
  goalsData: {
    goals: {
      for: {
        total: {
          home: number;
          away: number;
          total: number;
        };
        average: {
          home: string;
          away: string;
          total: string;
        };
        minute: {
          "0-15": {
            total: number;
            percentage: string;
          };
          "16-30": {
            total: number;
            percentage: string;
          };
          "31-45": {
            total: number;
            percentage: string;
          };
          "46-60": {
            total: number;
            percentage: string;
          };
          "61-75": {
            total: number;
            percentage: string;
          };
          "76-90": {
            total: number;
            percentage: string;
          };
          "91-105": {
            total: number;
            percentage: string;
          };
          "106-120": {
            total: number;
            percentage: string;
          };
        };
      };
      against: {
        total: {
          home: number;
          away: number;
          total: number;
        };
        average: {
          home: string;
          away: string;
          total: string;
        };
        minute: {
          "0-15": {
            total: number;
            percentage: string;
          };
          "16-30": {
            total: number;
            percentage: string;
          };
          "31-45": {
            total: number;
            percentage: string;
          };
          "46-60": {
            total: number;
            percentage: string;
          };
          "61-75": {
            total: number;
            percentage: string;
          };
          "76-90": {
            total: number;
            percentage: string;
          };
          "91-105": {
            total: number;
            percentage: string;
          };
          "106-120": {
            total: number;
            percentage: string;
          };
        };
      };
    };
  };
};

const LineChart = ({ goalsData }: LineChartProps) => {
  const data = {
    labels: Object.keys(goalsData.goals.for.minute),
    datasets: [
      {
        label: "Goals For",
        data: Object.values(goalsData.goals.for.minute).map(item => item.total),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1
      },
      {
        label: "Goals Against",
        data: Object.values(goalsData.goals.against.minute).map(
          item => item.total
        ),
        fill: false,
        borderColor: "rgba(192,75,192,1)",
        tension: 0.1
      }
    ]
  };

  return <Line data={data} />;
};

export default LineChart;
