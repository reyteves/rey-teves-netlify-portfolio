import React from 'react';
import { User } from 'lucide-react';

export default function Profile() {
  return (
    <section className="max-w-4xl mx-auto mb-12 p-8 bg-white rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
      <div className="flex items-center gap-4 mb-6">
        <User className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold text-gray-800">Profile</h2>
      </div>
      <p className="text-lg text-gray-600 leading-relaxed">
        Experienced Web Developer and Information Systems Analyst with a strong web development, data management, and customer service background. 
        Skilled in problem-solving, analytical thinking, and supporting technical and administrative functions. 
        Seeking a challenging role to leverage my diverse skill set in web development, data processing, and administrative support, 
        with proven adaptability in remote work environments.
      </p>
    </section>
  );
}