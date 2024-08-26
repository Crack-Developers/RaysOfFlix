import React from 'react';

const facts = [
  {
    icon: 'flaticon-worker',
    number: 18,
    text: 'Expert Workers',
  },
  {
    icon: 'flaticon-building',
    number: 80,
    text: 'Happy Clients',
  },
  {
    icon: 'flaticon-address',
    number: 100,
    text: 'Completed Projects',
  },
  {
    icon: 'flaticon-crane',
    number: 8,
    text: 'Running Projects',
  },
];

const Facts = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/2 bg-fprimary text-white p-8">
            <div className="flex flex-wrap">
              {facts.slice(0, 2).map((fact, index) => (
                <div key={index} className="w-1/2 flex flex-col items-center">
                  <div className="text-6xl mb-4">
                    <i className={fact.icon}></i>
                  </div>
                  <h2 className="text-4xl font-bold mb-2">{fact.number}</h2>
                  <p className="text-lg uppercase">{fact.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 bg-fsecondary text-fprimary p-8">
            <div className="flex flex-wrap">
              {facts.slice(2).map((fact, index) => (
                <div key={index} className="w-1/2 flex flex-col items-center">
                  <div className="text-6xl mb-4">
                    <i className={fact.icon}></i>
                  </div>
                  <h2 className="text-4xl font-bold mb-2">{fact.number}</h2>
                  <p className="text-lg uppercase">{fact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
