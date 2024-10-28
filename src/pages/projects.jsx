export default function Projects() {
    const projects = [
      { name: "Project 1", description: "Description of Project 1" },
      { name: "Project 2", description: "Description of Project 2" },
      { name: "Project 3", description: "Description of Project 3" }
    ];
  
    return (
      <section id="projects" className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }