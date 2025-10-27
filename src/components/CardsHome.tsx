import { Card } from "flowbite-react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface Metric {
  title: string;
  value: string;
  change: string;
  color: "green" | "red";
  changeText: string;
}

const metrics: Metric[] = [
  {
    title: "Total Sales",
    value: "$1,280",
    change: "+100% ",
    changeText: "vs last month",
    color: "green",
  },
  {
    title: "Total Orders",
    value: "1,400",
    change: "+100% ",
    changeText: "vs last month",
    color: "green",
  },
  {
    title: "Total Visitors",
    value: "150",
    change: "-100% ",
    changeText: "vs last month",
    color: "red",
  },
  {
    title: "Total Refund",
    value: "$91.42",
    change: "-100%",
    changeText: "vs last month",
    color: "red",
  },
];

const CardsHome = () => {
  return (
    <div className="p-6 bg-backgroundaccent min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {metrics.map((metric, index) => (
          <Card key={index} className="">
            <div className="flex flex-col ">
              <h3 className="text-sm font-medium text-[#181D27] mb-2">
                {metric.title}
              </h3>
              <p className="text-3xl font-bold text-gray-900 mb-2">
                {metric.value}
              </p>
              <p
                className={`text-sm flex items-center ${
                  metric.color === "green" ? "text-green-600" : "text-red-600"
                }`}
              >
                {metric.color === "green" ? (
                  <ArrowUp className="w-3 h-3 mr-1" />
                ) : (
                  <ArrowDown className="w-3 h-3 mr-1" />
                )}
                {metric.change}
                <span className="ml-1 text-gray-500">{metric.changeText}</span>
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardsHome;
