export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["React", "Vue.js", "HTML5", "CSS3", "JavaScript"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD"] },
    { category: "Tools", items: ["Git", "Webpack", "Babel", "Jest"] }
  ];

  return (
    <section id="skills" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillSet, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{skillSet.category}</h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}