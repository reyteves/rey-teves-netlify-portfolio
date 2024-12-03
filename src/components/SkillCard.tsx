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
        className={`
          p-8 rounded-2xl relative
          flex justify-center items-center overflow-hidden
          before:content-[''] before:absolute before:w-[calc(100%+4px)] 
          before:h-[calc(100%+4px)] before:bg-[conic-gradient(from_0deg,rgb(0,183,255),rgb(255,48,255),rgb(0,183,255))]
          before:animate-[spin-slow] before:z-[1]
          before:-left-[2px] before:-top-[2px] before:rounded-2xl
          after:content-[''] after:absolute after:bg-[#07182E]/80
          after:inset-[2px] after:rounded-2xl after:z-[2]
          bg-transparent
        `}
      >
        {/* Wave effects */}
        <div className="absolute w-[540px] h-[700px] opacity-60 -left-1/2 -top-[70%] bg-gradient-to-br from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-wave z-[1]"></div>
        <div className="absolute w-[540px] h-[700px] opacity-60 -left-1/2 top-[210px] bg-gradient-to-br from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-wave-slow z-[1]"></div>
        <div className="absolute w-[540px] h-[700px] opacity-60 -left-1/2 top-[210px] bg-gradient-to-br from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-wave-slower z-[1]"></div>

        {/* Content */}
        <div className="relative z-[3] w-full">
          <div className="flex items-center gap-4 mb-6">
            <Icon className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-white">
              {title}
            </h2>
          </div>
          <ul className="space-y-3">
            {skills.map((skill, index) => (
              <li key={index} className="text-gray-300 shadow-md">
                • {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}