import React from "react";
import { Avatar } from "flowbite-react";
import avatar1 from "../assets/images/Avatar (1).png";
import avatar2 from "../assets/images/Avatar (2).png";
import avatar3 from "../assets/images/Avatar (3).png";
import avatar4 from "../assets/images/Avatar (4).png";
import avatar5 from "../assets/images/Avatar (5).png";
import avatar6 from "../assets/images/Avatar (6).png";
import avatar7 from "../assets/images/Avatar (7).png";
import avatar8 from "../assets/images/Avatar (8).png";
import avatar9 from "../assets/images/Avatar (9).png";
import avatar10 from "../assets/images/Avatar (10).png";
import avatar11 from "../assets/images/Avatar (11).png";
import avatar12 from "../assets/images/Avatar (12).png";
import avatar13 from "../assets/images/Avatar (13).png";
import avatar14 from "../assets/images/Avatar (14).png";

const OrdersCustomersHome = () => {
  const orders = [
    {
      id: "#878909",
      name: "Lorem",
      date: "23 Dec 2025",
      status: "Completed",
      total: "- $18.99",
      avatar: avatar1,
    },
    {
      id: "#878908",
      name: "Lorem",
      date: "22 Dec 2025",
      status: "Completed",
      total: "- $4.50",
      avatar: avatar2,
    },
    {
      id: "#878907",
      name: "Lorem",
      date: "23 Dec 2025",
      status: "Pending",
      total: "- $18.99",
      avatar: avatar3,
    },
    {
      id: "#878906",
      name: "Augue",
      date: "20 Dec 2025",
      status: "In Progress",
      total: "- $15.00",
      avatar: avatar4,
    },
    {
      id: "#878905",
      name: "Lorem",
      date: "19 Dec 2025",
      status: "Pending",
      total: "- $12.50",
      avatar: avatar5,
    },
    {
      id: "#878904",
      name: "Lorem",
      date: "18 Dec 2025",
      status: "Completed",
      total: "- $40.20",
      avatar: avatar6,
    },
    {
      id: "#878903",
      name: "Turpis",
      date: "17 Dec 2025",
      status: "Completed",
      total: "+ $88.00",
      avatar: avatar7,
    },
  ];

  const customers = [
    {
      name: "Phoenix Baker",
      handle: "@phoenix.baker",
      amount: "$24,840",
      pctChange: "8.2%",
      avatar: avatar8,
    },
    {
      name: "Lana Steiner",
      handle: "@lanasteiner",
      amount: "$24,840",
      pctChange: "24%",
      avatar: avatar9,
    },
    {
      name: "Demi Wilkinson",
      handle: "@demi_wilkinson",
      amount: "$24,840",
      pctChange: "9.4%",
      avatar: avatar10,
    },
    {
      name: "Candice Wu",
      handle: "@candicewu",
      amount: "$24,840",
      pctChange: "5.6%",
      avatar: avatar11,
    },
    {
      name: "Natali Craig",
      handle: "@nat.craig",
      amount: "$24,840",
      pctChange: "9.2%",
      avatar: avatar12,
    },
    {
      name: "Drew Cano",
      handle: "@drewc",
      amount: "$24,840",
      pctChange: "10.4%",
      avatar: avatar13,
    },
    {
      name: "Orlando Diggs",
      handle: "@orlando_diggs",
      amount: "$24,840",
      pctChange: "8.8%",
      avatar: avatar14,
    },
  ];

  const statusClasses = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-50 text-green-600 border border-green-100";
      case "Pending":
        return "bg-red-50 text-red-600 border border-red-100";
      case "In Progress":
        return "bg-yellow-50 text-yellow-600 border border-yellow-100";
      default:
        return "bg-gray-50 text-gray-600 border border-gray-100";
    }
  };

  return (
    <section className="p-6 bg-backgroundaccent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Section: Recent Orders */}
        <div className="lg:col-span-8 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800">
              Recent Orders
            </h3>
            <button className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition">
              View Details
            </button>
          </div>

          {/* Header */}
          <div className="hidden md:grid grid-cols-12 px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide bg-gray-50">
            <div className="col-span-5">Orders Info</div>
            <div className="col-span-2">Order ID</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1 text-right">Total</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-gray-100">
            {orders.map((o, i) => (
              <div
                key={i}
                className="px-4 md:px-6 py-4 md:py-5 flex md:grid md:grid-cols-12 items-center gap-4 transition 
             even:bg-gray-50 odd:bg-white hover:bg-gray-100"
              >
                <div className="col-span-5 flex items-center gap-4">
                  <Avatar
                    rounded
                    img={o.avatar}
                    alt={o.name}
                    className="w-12 h-12"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {o.name}
                    </p>
                    <p className="text-xs text-gray-500">Product description</p>
                  </div>
                </div>
                <div className="col-span-2 text-sm text-gray-600">{o.id}</div>
                <div className="col-span-2 text-sm text-gray-600">{o.date}</div>
                <div className="col-span-2">
                  <span
                    className={`px-3 py-1.5 text-xs font-medium rounded-full ${statusClasses(
                      o.status
                    )}`}
                  >
                    {o.status}
                  </span>
                </div>
                <div className="col-span-1 text-right text-sm font-semibold text-gray-800">
                  {o.total}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Customers */}
        <div className="lg:col-span-4 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800">Customers</h3>
            <p className="text-xs text-gray-500 mt-1">
              Sorted by total expenses
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            {customers.map((c, i) => (
              <div
                key={i}
                className="px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <Avatar
                    rounded
                    img={c.avatar}
                    alt={c.name}
                    className="w-11 h-11"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {c.name}
                    </p>
                    <p className="text-xs text-gray-500">{c.handle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    {c.amount}
                  </p>
                  <p className="text-xs text-green-600 font-medium flex items-center justify-end gap-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12l5 5 9-13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {c.pctChange}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrdersCustomersHome;
