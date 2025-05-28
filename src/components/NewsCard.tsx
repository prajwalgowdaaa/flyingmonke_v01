import React from "react";

interface NewsCardProps {
  title: string;
  date: string;
  href: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, href }) => {
  return (
    <a href={href} className="block group p-6 border-t border-gray-200 hover:bg-gray-50 transition-colors">
      <div className="text-sm text-gray-500 mb-2">{date}</div>
      <h3 className="text-lg font-medium group-hover:underline">{title}</h3>
    </a>
  );
};

export default NewsCard;
