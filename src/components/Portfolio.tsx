import styles from './Portfolio.module.css'

export default function Portfolio() {
    const projects = [
        {
            title: "프로젝트 A",
            category: "제조 자동화",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            title: "프로젝트 B",
            category: "스마트 팩토리",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore.",
        },
        {
            title: "프로젝트 C",
            category: "품질 관리 시스템",
            description: "Ut enim ad minim veniam, quis nostrud exercitation.",
        },
        {
            title: "프로젝트 D",
            category: "IoT 솔루션",
            description: "Duis aute irure dolor in reprehenderit in voluptate.",
        },
        {
            title: "프로젝트 E",
            category: "AI 분석",
            description: "Excepteur sint occaecat cupidatat non proident.",
        },
        {
            title: "프로젝트 F",
            category: "로봇 자동화",
            description: "Sunt in culpa qui officia deserunt mollit anim.",
        }
    ]

    return (
        <section id="portfolio" className={styles.portfolio}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Portfolio</h2>
                    <p className={styles.subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore our successful projects and achievements.
                    </p>
                </div>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardContent}>
                                <span className={styles.category}>{project.category}</span>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>
                            </div>
                            <div className={styles.overlay}>
                                <button className={styles.viewButton}>자세히 보기 →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
