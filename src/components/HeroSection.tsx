import styles from './HeroSection.module.css'

export default function HeroSection() {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <span className={styles.gradientText}>세상에 단 하나뿐인</span>
                        <br />
                        나만의 피규어
                    </h1>
                    <p className={styles.subtitle}>
                        생성형 AI를 이용한 피규어 주문제작 포토부스,<br />
                        F&P와 함께 특별한 순간을 3D로 영원히 간직하세요.
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
