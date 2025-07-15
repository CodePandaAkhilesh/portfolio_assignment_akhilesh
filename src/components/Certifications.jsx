import React from 'react';

const certifications = [
  'Decode C++ with DSA – PW Skills',
  'Complete Web Dev – CodeHelp',
  'C++ Problem Solving – CodeChef (1 & 2)',
];

const Certifications = () => (
  <section id="certifications" className="py-20 bg-white">
    <div className="container mx-auto px-6 max-w-3xl">
      <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">Certifications</h2>
      <ul className="space-y-4">
        {certifications.map((cert, idx) => (
          <li key={idx} className="bg-blue-50 rounded-lg shadow p-4 text-gray-800 text-lg">
            {cert}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Certifications; 