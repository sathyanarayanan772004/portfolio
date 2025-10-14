import { useEffect, useRef, useState } from 'react';
import { Code, Database, Cloud, Brain, Wrench, TrendingUp } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'SQL', level: 85 }
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: [
      { name: 'Deep Learning', level: 85 },
      { name: 'YOLO', level: 80 },
      { name: 'Data Science', level: 85 },
      { name: 'Computer Vision', level: 75 }
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Web Development',
    icon: Code,
    skills: [
      { name: 'React', level: 85 },
      { name: 'Spring Boot', level: 75 },
      { name: 'Flask', level: 80 },
      { name: 'REST API', level: 85 }
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Database & Cloud',
    icon: Database,
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'SQL Database', level: 85 },
      { name: 'AWS', level: 70 },
      { name: 'RDBMS', level: 80 }
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Tools & Methodologies',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Agile', level: 75 },
      { name: 'DSA', level: 80 },
      { name: 'Power BI', level: 70 }
    ],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Interests',
    icon: TrendingUp,
    skills: [
      { name: 'Data Visualization', level: 75 },
      { name: 'Big Data', level: 70 },
      { name: 'AWS Services', level: 70 },
      { name: 'Problem Solving', level: 85 }
    ],
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleBars, setVisibleBars] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            const skillName = entry.target.getAttribute('data-skill');
            if (skillName) {
              setTimeout(() => {
                setVisibleBars((prev) => new Set(prev).add(skillName));
              }, 300);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.observe-animation');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={categoryIndex}
                className="observe-animation opacity-0"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all h-full transform hover:scale-105 hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const skillKey = `${categoryIndex}-${skillIndex}`;
                      const isVisible = visibleBars.has(skillKey);

                      return (
                        <div
                          key={skillIndex}
                          className="observe-animation"
                          data-skill={skillKey}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                            <span className="text-gray-400 text-xs">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{
                                width: isVisible ? `${skill.level}%` : '0%',
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="observe-animation opacity-0 mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Key Expertise</h3>
            <p className="text-gray-300 max-w-3xl">
              C++, Python, DSA, RDBMS, Agile, React, REST API, MySQL, AWS, Programming and Designing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
