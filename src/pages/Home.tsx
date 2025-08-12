import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  GraduationCap,
  Building,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import AcademicsCard from '../components/AcademicsCard';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ankit Mishra
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Full Stack Developer & Problem Solver
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Crafting innovative digital solutions with cutting-edge
              technologies. Passionate about creating impactful applications
              that make a difference.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/kite-code03"
              className="group p-3 rounded-full bg-gray-800/50 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
              target='_blank'
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-mishra-ba49461b6/"
              className="group p-3 rounded-full bg-gray-800/50 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
              target='_blank'
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
            <a
              href="#"
              className="group p-3 rounded-full bg-gray-800/50 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Cards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Projects Card */}
            <Link to="/projects" className="group block">
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 h-[500px]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-full flex flex-col">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    Projects
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                    Explore my latest projects showcasing modern web
                    development, mobile applications, and innovative solutions.
                  </p>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 mt-auto">
                    <span className="font-medium">View Projects</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Academics Card */}
            <div className="group">
              <AcademicsCard />
            </div>

            {/* Job Simulations Card */}
            <Link to="/job-simulations" className="group block">
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 h-[500px]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-full flex flex-col">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    Job Simulations
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                    Professional certificates and job simulations completed
                    through platforms like Forage and industry programs.
                  </p>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 mt-auto">
                    <span className="font-medium">View Certificates</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Your Name. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
