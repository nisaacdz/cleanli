import './navbar.css';
import Link from "next/link";

export function Navigation({ selected }: { selected: number }) {
    const navPages = [
        {
            dir: 'home',
            display: 'Home'
        },
        {
            dir: 'about',
            display: 'About Us'
        },
        {
            dir: 'gallery',
            display: 'Gallery'
        },
        {
            dir: 'admin',
            display: 'Jobs'
        },
        {
            dir: 'dashboard',
            display: 'Dashboard'
        },
    ];
    return (
        <div id='navigation'>
            <div id='nav-bar'>
                <p id='nav-title'>cleanli</p>
                <div id='nav-group'>
                    {navPages.map((navPage, idx) => (
                        <Link href={`/${navPage.dir}`} className={selected === idx ? 'activeTab' : 'inactiveTab'} key={idx}>
                            {navPage.display}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
