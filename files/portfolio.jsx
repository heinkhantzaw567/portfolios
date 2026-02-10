import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, ChevronRight, Code, Briefcase, GraduationCap, Wrench } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "ShiftLock",
      date: "Nov 2025",
      tech: ["Django REST", "React", "PostgreSQL", "IndexedDB", "Nginx", "Tailscale"],
      description: "Offline-first POS and attendance system for small businesses",
      highlights: [
        "Device-bound authentication with role-based access control",
        "IndexedDB-backed local queues for offline data persistence",
        "Tailscale zero-trust network with private Nginx bindings"
      ]
    },
    {
      title: "Healthwise",
      date: "Aug 2025",
      tech: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "APIs"],
      description: "AI-powered skincare recommendation system",
      highlights: [
        "Opt-in face analysis for skin type assessment",
        "ChatGPT API integration for personalized recommendations",
        "Google Maps API integration for nearby store locations"
      ]
    },
    {
      title: "Moody TV",
      date: "Jan 2025",
      tech: ["Django", "SQLite", "Python", "JavaScript"],
      description: "AI-powered movie recommendation platform",
      highlights: [
        "Emotion detection through facial expression analysis",
        "ChatGPT API for personalized movie suggestions",
        "Interactive web interface for seamless user experience"
      ]
    },
    {
      title: "AI Recipe Generator",
      date: "Jun 2024",
      tech: ["Streamlit", "Python", "ChatGPT API", "Claude API"],
      description: "Collaborative hackathon project for AI Hacks",
      highlights: [
        "Customized recipe generation using multiple AI APIs",
        "Ingredient filtering based on user preferences",
        "Integrated add-to-cart feature within Streamlit app"
      ]
    }
  ];

  const experience = [
    {
      title: "Front-End Developer",
      company: "Checklick",
      location: "Toronto, ON",
      date: "Apr 2025 – Jun 2025",
      achievements: [
        "Developed responsive UIs with React.js and Tailwind CSS",
        "Converted Zeplin designs into reusable, scalable components",
        "Integrated APIs to improve application interactivity"
      ]
    },
    {
      title: "QA Analyst Intern",
      company: "Standard Carbon Inc.",
      location: "Toronto, ON",
      date: "Mar 2025 – May 2025",
      achievements: [
        "Built secure AI platform for carbon footprint calculation",
        "Automated testing with Playwright for dashboard functionality",
        "Created test cases and documented defects for quality assurance"
      ]
    }
  ];

  const skills = {
    languages: ["Python", "Java", "C", "SQL", "JavaScript", "TypeScript", "Shell", "Haskell", "Rust", "Prolog", "Elixir"],
    frameworks: ["Django", "React", "React Native", "Bootstrap", "Tailwind CSS"],
    databases: ["PostgreSQL", "MongoDB", "SQLite"],
    tools: ["Git", "Nginx", "Tailscale", "Linux (Ubuntu)", "Playwright", "IndexedDB", "WireGuard", "Let's Encrypt"],
    libraries: ["Pandas", "NumPy", "OpenCV"]
  };

  const navigation = [
    { id: 'about', label: 'About', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Wrench }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-sans overflow-x-hidden">
      {/* Animated background effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-emerald-500/5 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grain texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        backgroundRepeat: 'repeat'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:px-12">
        {/* Header */}
        <header className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-8 border-b border-slate-800/50">
            <div>
              <h1 className="text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent tracking-tight leading-tight">
                Hein Khant Zaw
              </h1>
              <p className="text-xl lg:text-2xl text-slate-400 font-light tracking-wide mb-6">
                Full-Stack Developer & AI Enthusiast
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="mailto:heinkhant.zaw@torontomu.ca" className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-800 rounded-full transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/50">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300">Email</span>
                </a>
                <a href="https://linkedin.com/in/heinkhantzaw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-800 rounded-full transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/50">
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300">LinkedIn</span>
                </a>
                <a href="https://github.com/heinkhantzaw567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-800 rounded-full transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/50">
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300">GitHub</span>
                </a>
              </div>
            </div>
            <div className="text-slate-400 text-sm lg:text-right">
              <p className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                Toronto Metropolitan University
              </p>
              <p className="text-slate-500">Computer Science • CGPA: 3.7</p>
              <p className="text-slate-600 mt-1">Toronto, ON • 647 892 2735</p>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="flex flex-wrap gap-3">
            {navigation.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`group flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-300 border border-cyan-500/50'
                      : 'bg-slate-800/30 text-slate-400 hover:text-slate-300 border border-slate-700/30 hover:border-slate-600/50'
                  }`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Content Sections */}
        <main className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* About Section */}
          {activeSection === 'about' && (
            <section className="space-y-8 animate-fadeIn">
              <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 shadow-2xl">
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">About Me</h2>
                <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                  <p>
                    I'm a passionate Computer Science student at Toronto Metropolitan University with a strong foundation in full-stack development and artificial intelligence. With a <span className="text-cyan-400 font-semibold">3.7 CGPA</span>, I've developed expertise in building scalable, user-centric applications that solve real-world problems.
                  </p>
                  <p>
                    My experience spans across frontend development with <span className="text-emerald-400 font-semibold">React.js</span> and <span className="text-emerald-400 font-semibold">Next.js</span>, backend systems using <span className="text-emerald-400 font-semibold">Django</span>, and quality assurance with modern testing frameworks. I'm particularly interested in creating <span className="text-cyan-400 font-semibold">AI-powered solutions</span> and offline-first applications that prioritize user experience and reliability.
                  </p>
                  <p>
                    When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and pushing the boundaries of what's possible with web technologies.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Experience Section */}
          {activeSection === 'experience' && (
            <section className="space-y-6 animate-fadeIn">
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">Professional Experience</h2>
              {experience.map((job, idx) => (
                <div 
                  key={idx} 
                  className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 shadow-2xl hover:border-cyan-500/30 transition-all duration-300 hover:shadow-cyan-500/5"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-300 mb-2">{job.title}</h3>
                      <p className="text-lg text-emerald-400 font-medium">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400 text-sm mb-1">{job.date}</p>
                      <p className="text-slate-500 text-sm">{job.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-slate-300">
                        <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <section className="space-y-6 animate-fadeIn">
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">Featured Projects</h2>
              <div className="grid lg:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                  <div 
                    key={idx} 
                    className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 shadow-2xl hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald-500/5 group"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors">{project.title}</h3>
                      <span className="text-xs text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full">{project.date}</span>
                    </div>
                    <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex gap-2 text-sm text-slate-300">
                            <ChevronRight className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-slate-800/80 text-cyan-300 rounded-full border border-slate-700/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <section className="space-y-6 animate-fadeIn">
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">Technical Skills</h2>
              <div className="grid lg:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, items], idx) => (
                  <div 
                    key={category} 
                    className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 shadow-2xl"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <h3 className="text-xl font-bold text-cyan-300 mb-6 capitalize flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-emerald-400" />
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-4 py-2 bg-slate-900/50 text-slate-300 rounded-lg text-sm border border-slate-700/50 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>

        {/* Footer */}
        <footer className={`mt-20 pt-8 border-t border-slate-800/50 text-center text-slate-500 text-sm transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p>© 2025 Hein Khant Zaw. Built with React & Tailwind CSS.</p>
          <p className="mt-2">Designed & developed with <span className="text-red-400">❤</span> in Toronto</p>
        </footer>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}