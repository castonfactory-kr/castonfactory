'use client'

import Link from 'next/link'
import styles from './Header.module.css'
import { useTheme } from '@/contexts/ThemeContext'

export default function Header() {
    const { theme, toggleTheme } = useTheme()
    
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h1 className={styles.logoText}><Link href="/">CAST ON FACTORY</Link></h1>
                </div>
                <nav className={styles.nav}>
                    <Link href="/#home" className={styles.navLink}>Home</Link>
                    <Link href="/#business" className={styles.navLink}>Our Business</Link>
                    <Link href="/#portfolio" className={styles.navLink}>Portfolio</Link>
                    <Link href="/#about" className={styles.navLink}>About Us</Link>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                    <button 
                        onClick={toggleTheme} 
                        className={styles.themeToggle}
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                        )}
                    </button>
                </nav>
            </div>
        </header>
    )
}
