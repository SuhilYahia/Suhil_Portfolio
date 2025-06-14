import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Forsa Jadiduh – Recruitment Management System",
      description:"is an e-recruitment platform that connects graduates with job opportunities and strengthens communication between employers and educational institutions.",
      features: [
        "Account management",
        "Real-time notifications",
        "Job search engine",
        "Graduate identification",
        "Interaction between companies and the college"
      ],
      role: "Developed the user interface using React, and contributed to backend development using ASP.NET."
    },
    {
      title: "E-Learning Platform – Recruitment Management System",
      description: "An online platform for delivering lessons and organizing educational content, allowing interaction between students and teachers through a clean and user-friendly interface.",
      technologies: ["HTML", "CSS", "JavaScript", "Python"]
    },
    {
      title: "Coffee App",
      description: "A simple web application for browsing coffee menus and placing orders from local cafes, with a fully responsive design and smooth user experience.",
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section className="py-16 bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2C3E50] dark:text-[#596d79] mb-16 relative">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#eaeaea] dark:bg-[#23272f] rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-[#2C3E50] dark:group-hover:text-[#596d79] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">{project.description}</p>
              {project.role && (
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  <span className="font-semibold">Role:</span> {project.role}
                </p>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies && project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-[#2C3E50]/10 to-[#2C3E50]/20 dark:from-[#596d79]/10 dark:to-[#596d79]/20 text-[#2C3E50] dark:text-[#596d79] rounded-full text-sm font-medium transition-all duration-300 group-hover:from-[#2C3E50]/20 group-hover:to-[#2C3E50]/30 dark:group-hover:from-[#596d79]/20 dark:group-hover:to-[#596d79]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
             {project.title.includes("Forsa Jadiduh") && (
                 <button
                  onClick={() => navigate('/details_project/forsahjadiduh')}
                  className="mt-4 px-4 py-2 bg-[#2C3E50] text-white rounded-md hover:bg-[#1a252f] transition-all duration-300"
                >
                  View Project Details
                </button>
              )}

             {project.title.includes("E-Learning Platform") && (
                 <button
                  onClick={() => navigate('/details_project/E-Learning Platform')}
                  className="mt-4 px-4 py-2 bg-[#2C3E50] text-white rounded-md hover:bg-[#1a252f] transition-all duration-300"
                >
                  View Project Details
                  </button>
                
              )}

              {project.title.includes("Coffee App") && (
                <button
                  onClick={() => navigate('/details_project/coffee')}
                  className="mt-4 px-4 py-2 bg-[#2C3E50] text-white rounded-md hover:bg-[#1a252f] transition-all duration-300"
                >
                  View Project Details
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;