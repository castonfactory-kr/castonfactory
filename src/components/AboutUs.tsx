import styles from './AboutUs.module.css'

export default function AboutUs() {
    const values = [
        {
            title: "혁신",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            title: "품질",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore.",
        },
        {
            title: "신뢰",
            description: "Ut enim ad minim veniam, quis nostrud exercitation.",
        }
    ]

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>About Us</h2>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className={styles.description}>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>15+</div>
                                <div className={styles.statLabel}>Years Experience</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>200+</div>
                                <div className={styles.statLabel}>Projects</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>50+</div>
                                <div className={styles.statLabel}>Clients</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.values}>
                        <h3 className={styles.valuesTitle}>Our Values</h3>
                        <div className={styles.valuesList}>
                            {values.map((value, index) => (
                                <div key={index} className={styles.valueItem}>
                                    <div className={styles.valueIcon}>⬢</div>
                                    <div className={styles.valueContent}>
                                        <h4 className={styles.valueTitle}>{value.title}</h4>
                                        <p className={styles.valueDescription}>{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
