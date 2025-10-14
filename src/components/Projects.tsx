import { useEffect, useRef, useState } from 'react';
import { Eye, Calendar, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Real-Time ASL Recognition System',
    status: 'Ongoing',
    description: 'Developing a real-time ASL recognition system using YOLO for gesture detection, Flask UI for interaction, and SQL database for storage. Enhances accessibility between signers and non-signers.',
    technologies: ['Deep Learning', 'YOLO', 'Flask', 'SQL', 'Python'],
    color: 'from-blue-500 to-cyan-500',
    icon: '🤟'
  },
  {
    title: 'Gym Fitness and Progress Tracker',
    status: 'Sep 2024',
    description: 'Team project for comprehensive workout logging, progress monitoring, and personalized fitness tracking. Built with modern web technologies for optimal user experience.',
    technologies: ['ReactJS', 'Spring Boot', 'SQL', 'REST API'],
    color: 'from-purple-500 to-pink-500',
    icon: '💪'
  }
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
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
    <section id="projects" ref={sectionRef} className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="observe-animation opacity-0 group"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden transition-all duration-500 hover:border-transparent hover:shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className="relative p-8 h-full flex flex-col">
                  <div className="text-6xl mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                    {project.icon}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    {hoveredIndex === index && (
                      <Eye className="text-blue-400 animate-pulse" size={24} />
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
                    <Calendar size={14} />
                    <span>{project.status}</span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-blue-400 rounded-full text-sm border border-gray-600 hover:border-blue-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span>View Details</span>
                    <ExternalLink size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="observe-animation opacity-0 mt-16 text-center">
          <a
            href="https://github.com/sathyanarayanan772004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <span>View More on GitHub</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
