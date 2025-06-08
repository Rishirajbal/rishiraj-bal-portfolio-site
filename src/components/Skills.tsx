
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C/C++", "JavaScript", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI & Machine Learning",
      skills: ["ANN", "CNN", "Reinforcement Learning", "Deep Learning", "Quantum ML", "Computer Vision"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Web & Databases",
      skills: ["HTML", "CSS", "React", "MySQL", "Oracle SQL", "Flask"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools & Platforms",
      skills: ["Docker", "Unity", "Arduino", "GitHub", "Power BI", "Tableau"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Cloud & Development",
      skills: ["Google Cloud Platform", "Ubuntu", "VS Code", "Visual Studio"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Blockchain & Crypto",
      skills: ["Solidity", "Circom", "ZK-SNARKs", "Smart Contracts", "Web3"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-white/5 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="mb-4">
                <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="p-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg text-center hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300 transform hover:scale-105 border border-gray-600/30 hover:border-blue-500/50"
                  >
                    <span className="text-sm text-gray-300 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Visualization */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Core Competencies
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { skill: "Machine Learning", level: 90 },
              { skill: "Python", level: 95 },
              { skill: "Blockchain", level: 85 },
              { skill: "Game Development", level: 80 }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="2"
                    />
                    <path
                      d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray={`${item.level}, 100`}
                      className="animate-pulse"
                    />
                    <defs>
                      <linearGradient id="gradient">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">{item.level}%</span>
                  </div>
                </div>
                <h4 className="text-white font-medium">{item.skill}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
