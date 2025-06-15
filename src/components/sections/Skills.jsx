import React from 'react';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML,CSS', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'React', level: 'Advanced' },
      { name: 'Bootstrap, Tailwind', level: 'Intermediate' },
      { name: 'Figma prototyping', level: 'Advanced' },
      { name: 'UI/UX principles', level: 'Intermediate' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'ASP.NET Core (C#)', level: 'Advanced' },
      { name: ' Python', level: 'Intermediate' },
      { name: 'Java ', level: 'Intermediate' },
      { name: 'PHP', level: 'Advanced' },
      { name: 'C#', level: 'Advanced' },
    ],
  },

  // {
  //   category: 'API Integration',
  //   items: [
  //     { name: '00000', level: 'Good' },
  //     { name: '00000', level: 'Good' },
  //     { name: '00000', level: 'Good' },
  //     { name: '00000', level: 'Good' },
  //     { name: '00000', level: 'Good' },
  //     { name: '00000', level: 'Good' },
  //   ],
  // },
  {
    category: 'Databases',
    items: [
      { name: 'SQL Server', level: 'Advanced' },
      { name: 'MySQL', level: 'Intermediate' },
 
    ],
  },

];

const Skills = () => {
  // Function to convert skill level to percentage
  const getLevelPercentage = (level) => {
    switch (level.toLowerCase()) {
      case 'advanced':
        return '90%';
      case 'intermediate':
        return '70%';
      case 'beginner':
        return '40%';
      default:
        return '50%';
    }
  };

  return (
    <section className="py-16 bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2C3E50] dark:text-[#596d79] mb-16 relative">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <div key={idx} className="bg-[#eaeaea] dark:bg-[#23272f] rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{group.category}</h3>
              <ul className="space-y-3">
                {group.items.map((item, i) => (
                  <li key={i} className="flex flex-col gap-1">
                    <div className="flex justify-between items-center text-gray-700 dark:text-gray-200">
                      <span>{item.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">{item.level}</span>
                    </div>
                    <div className="w-full h-2 bg-[#2C3E50]/5 dark:bg-[#2C3E50]/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out
                          bg-[#2C3E50] dark:bg-[#bdc3c7]"
                        style={{ 
                          width: getLevelPercentage(item.level),
                          animation: 'slideIn 1s ease-out'
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 