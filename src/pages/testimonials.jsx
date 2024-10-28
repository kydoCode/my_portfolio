export default function Testimonials() {
  const testimonials = [
    {
      quote: "Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills are top-notch.",
      author: "Jane Doe",
      position: "CEO, Tech Innovators"
    },
    {
      quote: "I was impressed by the clean, efficient code and the ability to deliver the project ahead of schedule. Highly recommended!",
      author: "John Smith",
      position: "CTO, Digital Solutions Inc."
    },
    {
      quote: "The web application developed exceeded our expectations. It's user-friendly, fast, and exactly what we needed.",
      author: "Emily Johnson",
      position: "Marketing Director, E-commerce Giants"
    }
  ];

  return (
    <section id="testimonials" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}