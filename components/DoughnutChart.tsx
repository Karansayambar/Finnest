"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { plugin } from "postcss";
ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Bank Accounts",
        data: [1234, 4567, 8901, 2345], // Example data, replace with actual account balances
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"], // Example colors, replace with actual account colors
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3", "Bank 4"], // Example labels, replace with actual account names
  };
  return (
    <Doughnut
      data={data}
      options={{ cutout: "60%", plugins: { legend: { display: false } } }}
    />
  );
};

export default DoughnutChart;
