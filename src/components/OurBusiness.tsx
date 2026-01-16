import styles from './OurBusiness.module.css'

export default function OurBusiness() {
    const services = [
        {
            title: "제조 솔루션",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
            icon: "🏭"
        },
        {
            title: "기술 혁신",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            icon: "🔬"
        },
        {
            title: "품질 관리",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
            icon: "✓"
        },
        {
            title: "글로벌 네트워크",
            description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
            icon: "🌐"
        }
    ]

    return (
        <section id="business" className={styles.business}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Business</h2>
                    <p className={styles.subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
