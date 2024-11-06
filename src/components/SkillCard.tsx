// import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SkillCardProps {
  title: string;
  Icon: LucideIcon;
  skills: string[];
}

export default function SkillCard({ title, Icon, skills }: SkillCardProps) {
  const { isDark } = useTheme();
  
  return (
    <section className={`p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
      isDark 
        ? 'bg-gray-800/80 shadow-[20px_20px_60px_#1a1a1a,-20px_-20px_60px_#2c2c2c]' 
        : 'bg-white/80 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]'
    }`}>
      <div className="flex items-center gap-4 mb-6">
        <Icon className="w-8 h-8 text-blue-600" />
        <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </h2>
      </div>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className={isDark ? 'text-gray-300' : 'text-gray-600'}>
            • {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}