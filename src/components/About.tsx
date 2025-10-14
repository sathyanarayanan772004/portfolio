import { useEffect, useRef } from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="about" ref={sectionRef} className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="observe-animation opacity-0">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                B.Tech student in Artificial Intelligence and Data Science with strong skills in Python, AI, and deep learning.
                I'm passionate about solving real-world problems through data-driven solutions and building impactful applications
                that make a difference.
              </p>
            </div>
          </div>

          <div className="observe-animation opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Personal Details</h3>
              <div className="space-y-3 text-gray-300">
                <p><span className="font-semibold text-gray-200">DOB:</span> July 7, 2004</p>
                <p><span className="font-semibold text-gray-200">Languages:</span> English, Tamil</p>
                <p><span className="font-semibold text-gray-200">Location:</span> Thiruthuraipoondi, Tamil Nadu</p>
              </div>
            </div>
          </div>
        </div>

        <div className="observe-animation opacity-0 mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-blue-400">Education</h3>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-500 transition-all transform hover:scale-102 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">B.Tech. AI and Data Science</h4>
                  <p className="text-gray-300 mb-1">Sri Krishna College of Technology, Coimbatore</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      2022 - 2026
                    </span>
                    <span className="flex items-center gap-1">
                      <Award size={14} />
                      CGPA: 6.64/10
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <GraduationCap className="text-blue-400" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">12th Grade</h4>
                    <p className="text-gray-300 text-sm mb-1">St. Antony's Matric Hr. Sec. School</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>2022</span>
                      <span className="flex items-center gap-1">
                        <Award size={14} />
                        77%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <GraduationCap className="text-blue-400" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">10th Grade</h4>
                    <p className="text-gray-300 text-sm mb-1">St. Antony's Matric Hr. Sec. School</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>2020</span>
                      <span className="flex items-center gap-1">
                        <Award size={14} />
                        84.6%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="observe-animation opacity-0">
          <h3 className="text-3xl font-bold mb-8 text-center text-cyan-400">Internship Experience</h3>
          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition-all transform hover:scale-102 hover:shadow-xl hover:shadow-cyan-500/20">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Core Engineering Intern</h4>
                <p className="text-cyan-400 font-semibold">Brainery Spot Technology</p>
              </div>
              <span className="text-gray-400 flex items-center gap-2 mt-2 md:mt-0">
                <Calendar size={16} />
                June - July 2024
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Full-stack web development experience working with React, Node.js, MySQL, REST APIs, Git, and AWS deployment.
              Successfully completed a comprehensive capstone project demonstrating end-to-end application development skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
