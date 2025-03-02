import React from 'react';
import { ArrowRight } from 'lucide-react';

const NewsCard = ({ title, description, date, category, link }) => {
    return (
        <div className="w-full bg-white p-6 rounded-lg shadow-lg">

            <div className="flex items-center gap-2 mb-4">
                <span className="bg-custom-purple/20 text-custom-purple text-sm px-3 py-1 rounded-full">
                    {category}
                </span>
                <span className="text-gray-500 text-sm">
                    {date}
                </span>
            </div>

            <h3 className="text-xl font-bold mb-2">
                {title}
            </h3>
            <p className="text-gray-600">
                {description}
            </p>

            <a href={link} target='_blank' className="mt-4 text-custom-purple hover:underline text-sm flex items-center gap-1">
                En savoir plus 
                <ArrowRight className="w-4 h-4" />
            </a>
        </div>
    );
};

export default NewsCard;
