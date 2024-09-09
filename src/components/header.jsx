import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="">Contact</Link></li>
                    <li><Link to="">Projects</Link></li>
                    <li><Link to="">Skills</Link></li>
                    <li><Link to="">Experience</Link></li>
                    <li><Link to="">Education</Link></li>
                    <li><Link to="">Testimonials</Link></li>
                    <li><Link to="">Blog</Link></li>
                    <li><Link to="">Socials</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}