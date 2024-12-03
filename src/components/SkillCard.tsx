import React from 'react';
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
    <div className="perspective-1000">
      <section
        className={`relative p-8 rounded-2xl backdrop-blur-sm overflow-hidden ${
          isDark
            ? 'bg-gray-800/80'
            : 'bg-white/80'
        }`}
      >
        {/* Wave effects */}
        <div className="absolute w-[540px] h-[700px] opacity-60 -left-1/2 -top-[70%] bg-gradient-to-br from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-wave"></div>
        <div className="absolute w-[540px] h-[700px] opacity-60 -left-1/2 top-[210px] bg-gradient-to-br from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-wave-slow"></div>
        <div className="absolute w-[540px] h-[700px] opacity-60 -left-1/2 top-[210px] bg-gradient-to-br from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-wave-slower"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <Icon className="w-8 h-8 text-blue-600" />
            <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
              {title}
            </h2>
          </div>
          <ul className="space-y-3">
            {skills.map((skill, index) => (
              <li key={index} className={`${isDark ? 'text-gray-300' : 'text-gray-600'} shadow-md`}>
                • {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}