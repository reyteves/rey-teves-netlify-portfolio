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
    <section className={`p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
      isDark 
        ? 'bg-gray-800/80 shadow-[20px_20px_60px_#1a1a1a,-20px_-20px_60px_#2c2c2c]' 
        : 'bg-white/80 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]'
    }`}>
      <div className="flex items-start gap-6">
        <GraduationCap className="w-8 h-8 text-blue-600 mt-1" />
        <div>
          <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            {degree}
          </h3>
          <p className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
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