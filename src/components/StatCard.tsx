import React from "react";

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  return (
    <div className="flex flex-col items-center md:items-start py-8 md:py-0">
      <div className="text-4xl md:text-5xl font-normal mb-2">{number}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
};

export default StatCard;
