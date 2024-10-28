import Link from 'react-router-dom'; // react-scroll
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Blog() {
  const blogPosts = [
    {
      title: "Getting Started with React Hooks",
      excerpt: "Learn how to use React Hooks to simplify your components and manage state more effectively.",
      date: "2023-06-15",
      author: "Jane Doe",
      slug: "getting-started-with-react-hooks"
    },
    {
      title: "Building Responsive Layouts with Tailwind CSS",
      excerpt: "Discover how to create beautiful, responsive layouts quickly and easily using Tailwind CSS.",
      date: "2023-05-28",
      author: "John Smith",
      slug: "building-responsive-layouts-with-tailwind-css"
    },
    {
      title: "Optimizing Performance in Next.js Applications",
      excerpt: "Explore techniques to improve the performance of your Next.js applications for a better user experience.",
      date: "2023-05-10",
      author: "Alice Johnson",
      slug: "optimizing-performance-in-nextjs-applications"
    },
    {
      title: "Introduction to TypeScript for JavaScript Developers",
      excerpt: "Learn the basics of TypeScript and how it can help you write more robust JavaScript code.",
      date: "2023-04-22",
      author: "Bob Wilson",
      slug: "introduction-to-typescript-for-javascript-developers"
    }
  ];

  return (
    <section id="blog" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <Link href={`/blog/${post.slug}`} passHref>
                  <Button variant="link" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" passHref>
            <Button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              View All Posts
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}