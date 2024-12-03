// import React from 'react';
import { Linkedin, Mail, Phone, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <header className={`
      max-w-4xl mx-auto mb-12 relative
      flex justify-center items-center overflow-hidden rounded-[20px]
      before:content-[''] before:absolute before:w-full 
      before:h-full before:bg-gradient-to-b before:from-[rgb(0,183,255)] 
      before:to-[rgb(255,48,255)] before:animate-[rotBGimg_8s_ease-in-out_infinite]
      before:inset-0 before:rounded-[20px]
      after:content-[''] after:absolute after:bg-[#07182E] 
      after:inset-[5px] after:rounded-[15px]
      ${isDark ? 'bg-[#07182E]' : 'bg-[#07182E]'}
    `}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 relative z-[1] w-full">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center md:text-left text-white">
            Rey Jesus Teves
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-600 font-semibold text-center md:text-left">
            Web Developer & Information Systems Analyst
          </h2>
        </div>
        <div className="flex gap-4 items-start">
          <button
            onClick={toggleTheme}
            className={`h-[56px] w-[28px] relative rounded-full p-[2px] transition-colors duration-500 ${
              isDark 
                ? 'bg-gray-700' 
                : 'bg-gray-200'
            }`}
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <div
              className={`absolute w-[24px] h-[24px] rounded-full transform transition-transform duration-500 flex items-center justify-center ${
                isDark
                  ? 'top-[2px] bg-gray-800 shadow-[0_0_10px_rgba(147,197,253,0.3)]'
                  : 'top-[30px] bg-white shadow-[0_0_10px_rgba(250,204,21,0.3)]'
              } hover:scale-105`}
            >
              {isDark ? (
                <Moon className="w-3.5 h-3.5 text-blue-200" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-yellow-400" />
              )}
            </div>
          </button>
          <div className="flex flex-col gap-3">
            <a href="tel:09479500754" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
              <Phone className="w-5 h-5" />
              <span>09479500754</span>
            </a>
            <a href="mailto:jesus.reyteves@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
              <span>jesus.reyteves@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/rey-jesus-teves-62b393100" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}