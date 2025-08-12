import React, { useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const AcademicsCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative h-[500px] perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of Card */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 h-full">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full flex flex-col">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Academic Background
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                Click to explore my educational journey, achievements, 
                and academic qualifications that shape my expertise.
              </p>
              <div className="text-cyan-400 font-medium">
                Click to flip →
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 h-full">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Education</h3>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="space-y-6 flex-grow overflow-y-auto">
                {/* Bachelor's Degree */}
                <div className="border-l-2 border-cyan-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <h4 className="text-lg font-semibold text-white">Bachelor of Technology</h4>
                  </div>
                  <p className="text-cyan-400 font-medium mb-1">Computer Science Engineering</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>2020 - 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>University Name</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">CGPA: 8.5/10</p>
                </div>

                {/* High School */}
                <div className="border-l-2 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-blue-400" />
                    <h4 className="text-lg font-semibold text-white">Higher Secondary</h4>
                  </div>
                  <p className="text-blue-400 font-medium mb-1">Science Stream (PCM)</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>2018 - 2020</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>School Name</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">Percentage: 85%</p>
                </div>

                {/* Certifications */}
                <div className="border-l-2 border-purple-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-purple-400" />
                    <h4 className="text-lg font-semibold text-white">Key Achievements</h4>
                  </div>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Dean's List (2022, 2023)</li>
                    <li>• Best Project Award</li>
                    <li>• Coding Competition Winner</li>
                  </ul>
                </div>
              </div>

              <div className="text-cyan-400 font-medium text-center mt-4">
                ← Click to flip back
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsCard;