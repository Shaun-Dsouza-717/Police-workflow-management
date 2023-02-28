import React from 'react';
// import { Pie, Arc } from "react-chartjs-2";
import { PieChart, Pie, Cell } from "recharts";

const PieChartComp = () => {
      const data = [
        { name: "Geeksforgeeks", students: 400, fill: "#7F5E5E" },
        { name: "Technical scripter", students: 700, fill: "#D72424" },
        { name: "Geek-i-knack", students: 200, fill: "#35F94F" },
        { name: "Geek-o-mania", students: 1000, fill: "#2121EC" },
      ];
  return (
      <PieChart width={700} height={700}>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" >Hello</text>
      <Pie
              data={data}
              dataKey="students"
              nameKey="name"
              outerRadius={250}
              label
      >
        {data.map((entry, index) => (
            <Cell key={index} fill={entry.fill} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartComp;