import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => (
  <footer className="bg-white border-t py-6 mt-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
      <div className="text-gray-500 text-sm mb-2 md:mb-0">&copy; {new Date().getFullYear()} Akhilesh Verma. All rights reserved.</div>
      <SocialLinks />
    </div>
  </footer>
);

export default Footer; 