import { Code, Database, Wrench, MessageSquare, GraduationCap } from 'lucide-react';
import Header from './components/Header';
import Profile from './components/Profile';
import SkillCard from './components/SkillCard';
import EducationCard from './components/EducationCard';
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
        
        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {skillSets.map((skillSet, index) => (
            <SkillCard
              key={index}
              title={skillSet.title}
              Icon={skillSet.Icon}
              skills={skillSet.skills}
            />
          ))}
        </div>

        {/* Education Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className={`p-8 rounded-2xl mb-8 ${
            isDark 
              ? 'bg-gray-800 shadow-[20px_20px_60px_#1a1a1a,-20px_-20px_60px_#2c2c2c]' 
              : 'bg-white shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]'
          }`}>
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                Education
              </h2>
            </div>
            <div className="space-y-6">
              <EducationCard
                degree="Master of Information Technology"
                school="AMA Online Education"
                status="In Progress"
              />
              <EducationCard
                degree="Bachelor of Science in Information Technology"
                school="Polytechnic University of the Philippines"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;