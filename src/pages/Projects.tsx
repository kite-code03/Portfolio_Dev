import React from 'react';
import { Github, ExternalLink, Calendar, Code, Database, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      category: "Full Stack",
      date: "2024",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A modern task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      category: "Frontend",
      date: "2024",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, historical data visualization, and responsive design.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Chart.js", "Weather API", "CSS Grid"],
      category: "Frontend",
      date: "2023",
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "REST API Service",
      description: "Scalable REST API with authentication, rate limiting, and comprehensive documentation. Built with Express.js and PostgreSQL.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker"],
      category: "Backend",
      date: "2023",
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "AI Chat Assistant",
      description: "Intelligent chat assistant powered by machine learning, featuring natural language processing and context-aware responses.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "TensorFlow", "Flask", "NLP", "OpenAI"],
      category: "AI/ML",
      date: "2024",
      github: "#",
      live: "#"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return <Code className="w-5 h-5" />;
      case 'Frontend':
        return <Code className="w-5 h-5" />;
      case 'Backend':
        return <Database className="w-5 h-5" />;
      case 'Mobile':
        return <Smartphone className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Frontend':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'Backend':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Mobile':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'AI/ML':
        return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in web development, 
            mobile apps, and innovative solutions using modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)} flex items-center gap-1`}>
                  {getCategoryIcon(project.category)}
                  {project.category}
                </div>

                {/* Links Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-cyan-500/20 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-cyan-500/20 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium bg-gray-500/10 text-gray-400 rounded-md border border-gray-500/20">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-lg transition-all duration-200 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-gray-300 mb-6 max-w-md">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <a
              href="mailto:your-email@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-lg transition-all duration-200 font-medium"
            >
              Get In Touch
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;