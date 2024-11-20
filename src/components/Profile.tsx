import { User } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Profile() {
  const { isDark } = useTheme();
  
  return (
    <section className={`max-w-4xl mx-auto mb-12 p-8 rounded-2xl ${
      isDark 
        ? 'bg-gray-800 shadow-[20px_20px_60px_#1a1a1a,-20px_-20px_60px_#2c2c2c]' 
        : 'bg-white shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]'
    }`}>
      <div className="flex flex-col gap-8">
        {/* Hero Image */}
        <div className={`rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 ${
          isDark ? 'shadow-[0_0_30px_rgba(0,188,212,0.3)]' : 'shadow-[0_0_30px_rgba(0,96,100,0.2)]'
        }`}>
          <img
            src="https://res.cloudinary.com/dkn22bqth/image/upload/v1732109214/make-a-book-cover-titled---web-designs-by-rey-jesu_enopd1.png"
            alt="Web Designs by Rey Jesus Teves"
            className="w-full h-auto"
          />
        </div>

        {/* Profile Content */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <User className="w-8 h-8 text-blue-600" />
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Profile
            </h2>
          </div>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Experienced Web Developer and Information Systems Analyst with a strong web development, data management, and customer service background. 
            Skilled in problem-solving, analytical thinking, and supporting technical and administrative functions. 
            Seeking a challenging role to leverage my diverse skill set in web development, data processing, and administrative support, 
            with proven adaptability in remote work environments.
          </p>
        </div>
      </div>
    </section>
  );
}