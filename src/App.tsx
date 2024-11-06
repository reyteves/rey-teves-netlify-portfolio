import { Code, Database, Wrench, MessageSquare } from 'lucide-react';
import Header from './components/Header';
import Profile from './components/Profile';
import SkillCard from './components/SkillCard';
import WaveBackground from './components/WaveBackground';
import { useTheme } from './context/ThemeContext';

function App() {
  const { isDark } = useTheme();
  const skillSets = [
    {
      title: 'Development',
      Icon: Code,
      skills: [
        'Front-End: HTML, CSS, JavaScript',
        'Back-End: PHP, Python',
        'Frameworks: ReactJS, NextJS, CodeIgniter, Laravel',
        'Version Control: GitLab, GitHub'
      ]
    },
    {
      title: 'Data Management',
      Icon: Database,
      skills: [
        'Database Management',
        'Data Annotation',
        'High Accuracy',
        'Microsoft Office Suite'
      ]
    },
    {
      title: 'Technical Skills',
      Icon: Wrench,
      skills: [
        'Software Documentation',
        'Technical Writing',
        'Research & Analysis',
        'Linux'
      ]
    },
    {
      title: 'Soft Skills',
      Icon: MessageSquare,
      skills: [
        'Problem-solving',
        'Analytical Thinking',
        'Excellent Communication',
        'Attention to Detail',
        'Multitasking'
      ]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <WaveBackground />
      <div className={`relative z-10 min-h-screen p-6 scroll-smooth ${
        isDark ? 'bg-gray-900/50' : 'bg-white/50'
      }`}>
        <Header />
        <Profile />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillSets.map((skillSet, index) => (
            <SkillCard
              key={index}
              title={skillSet.title}
              Icon={skillSet.Icon}
              skills={skillSet.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;