import React from "react";
import CircularCounter from "./CircularCounter";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "2rem",
      }}
    >
      <div className=" bg-gradient-to-t from-slate-500 via-slate-400 to-white bg-clip-text text-transparent text-5xl sm:text-6xl font-bold z-10 mb-10">
        MY SKILLS
      </div>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          flexWrap: "wrap",
           width : "100%"
        }}
      >
        <CircularCounter target={70} color="#facc15" designation="UX Design" />
        <CircularCounter target={95} color="#fbbf24" designation="Web Developer" />
        <CircularCounter target={80} color="#f59e0b" designation="Logo Designing" />
        <CircularCounter target={100} color="#eab308" designation="Ecommerce" />
      </div>
    </div>
  );
};

export default Dashboard;
