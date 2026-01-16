import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h1 className={styles.logoText}>CASTONFACTORY</h1>
                </div>
                <nav className={styles.nav}>
                    <a href="#home" className={styles.navLink}>Home</a>
                    <a href="#business" className={styles.navLink}>Our Business</a>
                    <a href="#portfolio" className={styles.navLink}>Portfolio</a>
                    <a href="#about" className={styles.navLink}>About Us</a>
                    <a href="/contact" className={styles.navLink}>Contact</a>
                </nav>
            </div>
        </header>
    )
}
