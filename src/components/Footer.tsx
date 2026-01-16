import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.links}>
                        <a href="/privacy" className={styles.link}>개인정보처리방침</a>
                        <span className={styles.divider}>|</span>
                        <a href="/legal" className={styles.link}>법적고지</a>
                        <span className={styles.divider}>|</span>
                        <a href="/contact" className={styles.link}>Contact Us</a>
                    </div>
                    <div className={styles.copyright}>
                        <p>&copy; {new Date().getFullYear()} Castonfactory. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
