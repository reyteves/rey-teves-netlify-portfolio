import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { TypeAnimation } from 'react-type-animation';

export default function BannerQuote() {
  const { isDark } = useTheme();

  return (
    <div className="perspective-1000">
      <section
        className={`
          p-8 rounded-2xl relative
          flex justify-center items-center overflow-hidden
          before:content-[""] before:absolute before:w-[calc(100%+4px)] 
          before:h-[calc(100%+4px)] before:bg-[conic-gradient(from_0deg,rgb(0,183,255),rgb(255,48,255),rgb(0,183,255))]
          before:animate-[spin-slow] before:z-[1]
          before:-left-[2px] before:-top-[2px] before:rounded-2xl
          after:content-[""] after:absolute after:bg-[#07182E]/80
          after:inset-[2px] after:rounded-2xl after:z-[2]
          bg-transparent
        `}
      >
        {/* Wave effects */}
        <div className="absolute w-[540px] h-[700px] opacity-60 -left-1/2 -top-[70%] bg-gradient-to-br from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-wave z-[1]"></div>
        <div className="absolute w-[540px] h-[700px] opacity-60 -left-1/2 top-[210px] bg-gradient-to-br from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-wave-slow z-[1]"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <TypeAnimation
            sequence={[
              '"I create customized and unique websites that evolve and improve with every update."',
              2000,
              '"I build modern and responsive web experiences."',
              2000,
              '"In addition to web development, I can also do technical writing, software documentation, and data entry tasks."',
              2000,
              '"I am creative and logical."',
              2000,
              '"If you are looking for someone skilled with HTML, CSS, and JavaScript, familiar with GitHub and GitLab, and has other technical skills, contact me on LinkedIn"',
              2000,
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
            className="text-white text-lg font-medium leading-relaxed min-h-[4rem]"
          />
        </div>
      </section>
    </div>
  );
}
