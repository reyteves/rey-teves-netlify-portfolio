import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="max-w-4xl mx-auto mb-12 p-8 bg-white rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 text-center md:text-left">Rey Jesus Teves</h1>
          <h2 className="text-xl md:text-2xl text-blue-600 font-semibold text-center md:text-left">Web Developer & Information Systems Analyst</h2>
        </div>
        <div className="flex flex-col gap-3">
          <a href="tel:09479500754" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
            <Phone className="w-5 h-5" />
            <span>09479500754</span>
          </a>
          <a href="mailto:jesus.reyteves@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
            <Mail className="w-5 h-5" />
            <span>jesus.reyteves@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/rey-jesus-teves-62b393100" target="_blank" rel="noopener noreferrer" 
             className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </header>
  );
}