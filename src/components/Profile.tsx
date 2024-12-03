import { User } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Profile() {
  const { isDark } = useTheme();
  
  return (
    <section className={`
      max-w-4xl mx-auto mb-12 relative
      flex justify-center items-center overflow-hidden rounded-[20px]
      before:content-[''] before:absolute before:w-[150px] 
      before:h-[140%] before:bg-gradient-to-b before:from-[rgb(0,183,255)] 
      before:to-[rgb(255,48,255)] before:animate-[rotBGimg_8s_ease-in-out_infinite]
      after:content-[''] after:absolute after:bg-[#07182E] 
      after:inset-[5px] after:rounded-[15px]
      ${isDark ? 'bg-[#07182E]' : 'bg-[#07182E]'}
    `}>
      <div className="flex flex-col gap-8 p-8 relative z-[1] w-full">
        {/* Hero Image */}
        <div className="rounded-lg overflow-hidden">
          <div className="max-w-full mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
            <img
              src="https://res.cloudinary.com/dkn22bqth/image/upload/v1732109214/make-a-book-cover-titled---web-designs-by-rey-jesu_enopd1.png"
              alt="Web Designs by Rey Jesus Teves"
              className="w-full h-auto object-contain"
            />
          </div>
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