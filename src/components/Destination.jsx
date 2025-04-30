import React from 'react'

const Destination = () => {
  const topics = [
    "Motherhood Journeys",
    "Self-care for Moms",
    "Balancing Work and Family",
    "Pregnancy & Birth Stories"
  ];

  return (
    <div className="mt-6">
      <h3 className="text-xl font-medium mb-4">Featured Topics</h3>
      <div className="flex flex-col gap-3">
        {topics.map((topic, index) => (
          <div key={index} className="bg-black text-white p-3 flex items-center justify-center">
            <span className="font-serif">{topic}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
