export default function Education() {
  const educationList = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      year: "2015 - 2019",
      description: "Focused on software engineering and web development."
    },
    {
      degree: "Master of Science in Web Engineering",
      institution: "Digital Institute",
      year: "2020 - 2022",
      description: "Specialized in modern web technologies and user experience design."
    }
  ];

  return (
    <section id="education" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Education</h2>
        <div className="space-y-6">
          {educationList.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
              <p className="mt-2 text-gray-700">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}