import React from 'react';

const skills = {
  Languages: ['C++', 'C', 'Python', 'JavaScript', 'HTML', 'CSS'],
  Frameworks: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  Tools: ['Postman', 'VS Code', 'IntelliJ', 'Git', 'GitHub'],
};

const Skills = () => (
  <section id="skills" className="py-20 bg-blue-50">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{category}</h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills; 