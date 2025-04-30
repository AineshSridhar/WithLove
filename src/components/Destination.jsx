import React from 'react'

const Destination = () => {
    const locations = [
      "Tokyo",
      "Rome",
      "San Francisco",
      "San Jose"
    ];
    
    return (
      <div className="mt-6">
        <h3 className="text-xl font-medium mb-4">Destinations</h3>
        <div className="flex flex-col gap-3">
          {locations.map((location, index) => (
            <div key={index} className="bg-black text-white p-3 flex items-center justify-center">
              <div className="w-12 h-px bg-white mr-4"></div>
              <span className="font-serif">{location}</span>
            </div>
          ))}
          <button className="bg-black text-white p-3 text-center">
            Read more
          </button>
        </div>
      </div>
    );
  };
  

export default Destination
