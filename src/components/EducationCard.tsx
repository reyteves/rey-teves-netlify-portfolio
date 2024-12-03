import { GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface EducationCardProps {
  degree: string;
  school: string;
  status?: string;
}

export default function EducationCard({ degree, school, status }: EducationCardProps) {
  const { isDark } = useTheme();
  
  return (
    <section className={`
      p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 relative
      flex justify-center items-center overflow-hidden
      before:content-[''] before:absolute before:w-full 
      before:h-full before:bg-gradient-to-b before:from-[rgb(0,183,255)] 
      before:to-[rgb(255,48,255)] before:animate-[rotBGimg_8s_ease-in-out_infinite]
      before:inset-0 before:rounded-[20px]
      after:content-[''] after:absolute after:bg-[#07182E] 
      after:inset-[5px] after:rounded-[15px]
      ${isDark ? 'bg-[#07182E]' : 'bg-[#07182E]'}
    `}>
      <div className="flex items-start gap-6 relative z-[1] w-full">
        <GraduationCap className="w-8 h-8 text-blue-600 mt-1" />
        <div>
          <h3 className="text-2xl font-bold mb-2 text-white">
            {degree}
          </h3>
          <p className="text-lg font-medium text-gray-300">
            {school}
          </p>
          {status && (
            <span className="inline-block mt-3 px-4 py-1.5 text-sm font-medium rounded-full bg-blue-600 text-white">
              {status}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}