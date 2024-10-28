import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header className="bg-blue-600 text-white py-4">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Your Name</h1>
                        <nav>
                            <ul className="flex space-x-4">
                                <li><Link to="/about" className="hover:text-blue-200 transition duration-300">About</Link></li>
                                <li><Link to="/projects" className="hover:text-blue-200 transition duration-300">Projects</Link></li>
                                <li><Link to="/contact" className="hover:text-blue-200 transition duration-300">Contact</Link></li>
                                <li><Link to="/skills" className="hover:text-blue-200 transition duration-300">Skills</Link></li>
                                <li><Link to="/experience" className="hover:text-blue-200 transition duration-300">Experience</Link></li>
                                <li><Link to="/education" className="hover:text-blue-200 transition duration-300">Education</Link></li>
                                <li><Link to="/testimonials" className="hover:text-blue-200 transition duration-300">Testimonials</Link></li>
                                <li><Link to="/blog" className="hover:text-blue-200 transition duration-300">Blog</Link></li>
                                <li><Link to="/socials" className="hover:text-blue-200 transition duration-300">Socials</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
