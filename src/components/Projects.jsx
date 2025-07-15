import React from 'react';

const projects = [
  {
    title: 'WebCrafter-GenAI',
    description: 'AI website generator using React and Gemini API',
    github: 'https://github.com/CodePandaAkhilesh/WebCrafter-GenAI',
  },
  {
    title: 'ReviseMate',
    description: 'AI-powered exam buddy using React and Gemini API',
    github: 'https://github.com/CodePandaAkhilesh/ReviseMate',
  },
  {
    title: 'LeetCode Metrics App',
    description: 'Stats dashboard with HTML, CSS, JS, Fetch API',
    github: 'https://github.com/CodePandaAkhilesh/LeetCode-Metrics-App',
  },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-white">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-blue-50 rounded-lg shadow p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4 flex-1">{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">GitHub &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects; 