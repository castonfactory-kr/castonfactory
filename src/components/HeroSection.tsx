import styles from './HeroSection.module.css'

export default function HeroSection() {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <span className={styles.gradientText}>미래를 만드는</span>
                        <br />
                        혁신적인 제조 솔루션
                    </h1>
                    <p className={styles.subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className={styles.cta}>
                        <a href="#business" className={styles.primaryButton}>
                            비즈니스 알아보기
                        </a>
                        <a href="/contact" className={styles.secondaryButton}>
                            문의하기
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.backgroundGradient}></div>
        </section>
    )
}
