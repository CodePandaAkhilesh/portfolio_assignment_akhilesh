import React from 'react';

const Hero = () => (
  <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24" id="hero">
    <img
      src="/akhilesh.jpeg" // Placeholder, user will upload
      alt="Akhilesh Verma"
      className="w-36 h-36 rounded-full shadow-lg object-cover mb-6 border-4 border-blue-200"
    />
    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
      Hi, I'm Akhilesh Verma – <span className="text-blue-600">Software Developer & AI Enthusiast</span>
    </h1>
    <a
      href="/Akhilesh_RESUME.pdf"
      download
      className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-lg font-semibold"
    >
      Download Resume
    </a>
  </section>
);

export default Hero; 