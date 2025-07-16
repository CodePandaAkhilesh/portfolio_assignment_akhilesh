import React from 'react';

const Contact = () => (
  <section id="contact" className="py-20 bg-blue-50">
    <div className="container mx-auto px-6 max-w-2xl text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Contact</h2>
      <div className="bg-white rounded-lg shadow p-8 inline-block">
        <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">Email:</span> <a href="mailto:av14021999@gmail.com" className="text-blue-600 hover:underline">av14021999@gmail.com</a></p>
        <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">Phone:</span> <a href="tel:+919336220495" className="text-blue-600 hover:underline">+91-9336220495</a></p>
        <p className="text-lg text-gray-700"><span className="font-semibold">Location:</span> Noida, India</p>
      </div>
    </div>
  </section>
);

export default Contact; 