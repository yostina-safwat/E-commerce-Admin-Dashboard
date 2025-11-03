import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ChartsHome: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState("12 months");

  // === Revenue Data ===
  const revenueSeries = [
    {
      name: "Revenue",
      data: [120, 140, 160, 180, 190, 200, 210, 220, 225, 230, 240, 245],
    },
  ];

  const revenueOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "line",
      height: 280,
      toolbar: { show: false },
      zoom: { enabled: false },
      sparkline: { enabled: false },
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#ef4444"], // red
    },
    markers: {
      size: 0,
      colors: ["#ef4444"],
      strokeColors: "#ef4444",
      strokeWidth: 2,
      hover: { size: 7 },
    },
    grid: {
      borderColor: "#f3f4f6",
      strokeDashArray: 3,
      row: { opacity: 0 },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: { colors: "#6b7280", fontSize: "12px" },
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      theme: "light",
      marker: { show: false },
      custom: ({ series, seriesIndex, dataPointIndex, w }) => {
        const value = series[seriesIndex][dataPointIndex];
        const month = w.globals.labels[dataPointIndex];
        return `
          <div style="
            background: white;
            border: 1px solid #e5e7eb;
            padding: 6px 8px;
            border-radius: 6px;
            text-align: center;
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
          ">
            <div style="font-weight:600; color:#111827;">$${value.toFixed(
              2
            )}</div>
            <div style="font-size:12px; color:#6b7280;">${month} 24, 2025</div>
          </div>`;
      },
    },
  };

  // === Order Status Chart ===
  const orderStatusSeries = [20, 35, 10, 12, 5.25, 17.75];
  const orderStatusOptions: ApexCharts.ApexOptions = {
    chart: { type: "donut" },
    labels: [
      "Pending",
      "Processing",
      "Completed",
      "Canceled",
      "Failed",
      "Returned",
    ],
    colors: ["#7A5AF8", "#0BA5EC", "#16B364", "#FF8D7A", "#E9483C", "#E9EAEB"],
    legend: { show: false },
    plotOptions: {
      pie: { donut: { size: "65%" } },
    },
    dataLabels: { enabled: false },
    tooltip: {
      y: { formatter: (val) => `${val}%` },
    },
  };

  return (
    <div className="p-6 bg-backgroundaccent">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* === Revenue Chart === */}
        <div className="lg:col-span-2 w-full bg-white dark:bg-gray-800 rounded-xl shadow p-5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h5 className="text-sm text-gray-500">Revenue</h5>
              <h3 className="text-2xl font-semibold">$8,422.60</h3>
              <p className="text-sm text-green-600">↑ 3.2% vs last 30 days</p>
            </div>

            <div className="flex space-x-2">
              {["12 months", "30 days", "7 days", "24 hours"].map((label) => (
                <button
                  key={label}
                  onClick={() => setSelectedRange(label)}
                  className={`px-2 py-1 rounded-md text-sm ${
                    selectedRange === label
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <ReactApexChart
            options={revenueOptions}
            series={revenueSeries}
            type="line"
            height={260}
          />
        </div>

        {/* === Order Status === */}
        <div className="lg:col-span-1 w-full bg-white dark:bg-gray-800 rounded-xl shadow p-5 flex flex-col items-center justify-center">
          <h5 className="text-sm text-gray-500 mb-3">Order by status</h5>

          <ReactApexChart
            options={orderStatusOptions}
            series={orderStatusSeries}
            type="donut"
            height={260}
          />

          <ul className="mt-4 text-sm space-y-1 text-gray-700">
            <li>
              <span className="text-[#7A5AF8]">●</span> Pending: 20%
            </li>
            <li>
              <span className="text-[#0BA5EC]">●</span> Processing: 35%
            </li>
            <li>
              <span className="text-[#16B364]">●</span> Completed: 10%
            </li>
            <li>
              <span className="text-[#FF8D7A]">●</span> Canceled: 12%
            </li>
            <li>
              <span className="text-[#E9483C]">●</span> Failed: 5.25%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChartsHome;
