import React from 'react';
import { Award, Calendar, ExternalLink, Download, Building, CheckCircle } from 'lucide-react';

const JobSimulations = () => {
  const simulations = [
    {
      id: 1,
      title: "Software Engineer Virtual Experience",
      company: "JP Morgan Chase & Co.",
      platform: "Forage",
      description: "Completed a comprehensive software engineering simulation involving React development, Python data analysis, and financial technology solutions.",
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "5-6 hours",
      date: "December 2024",
      skills: ["React", "Python", "Financial Technology", "Data Visualization"],
      certificate: "#",
      status: "Completed"
    },
    {
      id: 2,
      title: "Technology Virtual Experience Program",
      company: "Accenture",
      platform: "Forage",
      description: "Participated in technology consulting simulation focusing on architecture design, data analytics, and project management methodologies.",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "4-5 hours",
      date: "November 2024",
      skills: ["System Architecture", "Data Analytics", "Project Management", "Consulting"],
      certificate: "#",
      status: "Completed"
    },
    {
      id: 3,
      title: "Cybersecurity Virtual Job Simulation",
      company: "Mastercard",
      platform: "Forage",
      description: "Engaged in cybersecurity challenges including threat analysis, security protocol design, and incident response procedures.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "4 hours",
      date: "October 2024",
      skills: ["Cybersecurity", "Threat Analysis", "Security Protocols", "Risk Assessment"],
      certificate: "#",
      status: "Completed"
    },
    {
      id: 4,
      title: "Data Science Virtual Internship",
      company: "British Airways",
      platform: "Forage",
      description: "Completed data science tasks including web scraping, data analysis, and predictive modeling for customer behavior insights.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "6 hours",
      date: "September 2024",
      skills: ["Data Science", "Web Scraping", "Python", "Machine Learning"],
      certificate: "#",
      status: "Completed"
    },
    {
      id: 5,
      title: "Cloud Computing Fundamentals",
      company: "Amazon Web Services",
      platform: "AWS Training",
      description: "Comprehensive training on cloud computing concepts, AWS services, and infrastructure management best practices.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "10 hours",
      date: "August 2024",
      skills: ["AWS", "Cloud Computing", "Infrastructure", "DevOps"],
      certificate: "#",
      status: "Completed"
    },
    {
      id: 6,
      title: "Full-Stack Development Bootcamp",
      company: "Meta",
      platform: "Coursera",
      description: "Intensive full-stack development program covering modern web development frameworks, databases, and deployment strategies.",
      image: "https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "40 hours",
      date: "July 2024",
      skills: ["React", "Node.js", "MongoDB", "Full-Stack Development"],
      certificate: "#",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
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
              Job Simulations
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional development through industry simulations and virtual internships 
            from leading companies and platforms.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">{simulations.length}</div>
              <div className="text-sm text-gray-400">Completed Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">75+</div>
              <div className="text-sm text-gray-400">Hours Invested</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">6</div>
              <div className="text-sm text-gray-400">Certificates Earned</div>
            </div>
          </div>
        </div>

        {/* Simulations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {simulations.map((simulation) => (
            <div
              key={simulation.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Header Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={simulation.image}
                  alt={simulation.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(simulation.status)} flex items-center gap-1`}>
                  <CheckCircle className="w-3 h-3" />
                  {simulation.status}
                </div>

                {/* Company Info */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2 text-white">
                    <Building className="w-4 h-4" />
                    <span className="text-sm font-medium">{simulation.company}</span>
                  </div>
                  <div className="text-xs text-gray-300 mt-1">{simulation.platform}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                    {simulation.title}
                  </h3>
                  <div className="ml-4 shrink-0">
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <span>{simulation.date}</span>
                    </div>
                    <div className="text-xs text-cyan-400 mt-1">{simulation.duration}</div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {simulation.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Skills Gained:</h4>
                  <div className="flex flex-wrap gap-2">
                    {simulation.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={simulation.certificate}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-lg transition-all duration-200 text-sm font-medium"
                  >
                    <Award className="w-4 h-4" />
                    View Certificate
                  </a>
                  <a
                    href={simulation.certificate}
                    className="px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Key Skills Developed
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Full-Stack Development",
                "Cloud Computing",
                "Data Science",
                "Cybersecurity",
                "System Architecture",
                "Project Management",
                "Financial Technology",
                "Machine Learning"
              ].map((skill) => (
                <div
                  key={skill}
                  className="p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-lg text-center hover:bg-cyan-500/10 transition-colors duration-200"
                >
                  <div className="text-sm font-medium text-cyan-400">{skill}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Collaborate?
            </h2>
            <p className="text-gray-300 mb-6 max-w-md">
              These simulations have prepared me for real-world challenges. 
              Let's discuss how I can contribute to your team.
            </p>
            <a
              href="mailto:your-email@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-lg transition-all duration-200 font-medium"
            >
              Contact Me
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSimulations;