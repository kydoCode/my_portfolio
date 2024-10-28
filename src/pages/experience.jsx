export default function Experience() {
  const experiences = [
    {
      position: "Senior Web Developer",
      company: "Tech Innovations Inc.",
      period: "2020 - Present",
      responsibilities: [
        "Lead a team of 5 developers in creating responsive web applications",
        "Implemented CI/CD pipelines, improving deployment efficiency by 40%",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      position: "Full Stack Developer",
      company: "Digital Solutions LLC",
      period: "2017 - 2020",
      responsibilities: [
        "Developed and maintained multiple client websites using React and Node.js",
        "Optimized database queries, reducing load times by 30%",
        "Collaborated with UX designers to implement intuitive user interfaces"
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Professional Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4 ml-2">
              <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
              <ul className="list-disc list-inside text-gray-700">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
