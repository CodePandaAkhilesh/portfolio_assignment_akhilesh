import React from 'react';

const Header = () => (
  <header className="fixed w-full bg-white shadow z-50">
    <nav className="container mx-auto flex items-center justify-between py-4 px-6">
      <div className="text-2xl font-bold text-blue-700">Akhilesh Verma</div>
      <ul className="hidden md:flex space-x-8 font-medium">
        <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
        <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
        <li><a href="#skills" className="hover:text-blue-600 transition">Skills</a></li>
        <li><a href="#resume" className="hover:text-blue-600 transition">Resume</a></li>
        <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
      </ul>
      <div className="md:hidden">
        {/* Mobile menu button (to be implemented) */}
        <button className="text-blue-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </nav>
  </header>
);

export default Header; 