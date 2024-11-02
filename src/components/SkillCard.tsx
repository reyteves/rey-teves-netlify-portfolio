import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  Icon: LucideIcon;
  skills: string[];
}

export default function SkillCard({ title, Icon, skills }: SkillCardProps) {
  return (
    <section className="p-8 bg-white rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
      <div className="flex items-center gap-4 mb-6">
        <Icon className="w-8 h-8 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-600">• {skill}</li>
        ))}
      </ul>
    </section>
  );
}