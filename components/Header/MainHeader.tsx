import Link from 'next/link';
import css from './main-header.module.css';

const MainHeader = () => {
    return (
        <header className={css.header}>
            <div className="container">
                <nav className={css.nav}>
                    <Link href="/logo">
                        <div className="logo">Logo</div>
                    </Link>

                    <ul className={css.ul}>
                        <li>Resume</li>
                        <li>Pricing</li>
                    </ul>
                    <ul>
                        <li>
                            <Link href={'/login'}>login</Link>
                        </li>
                        <li>
                            <Link href={'/dashboard'}>dashboard</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default MainHeader;
