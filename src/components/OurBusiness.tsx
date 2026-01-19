import styles from './OurBusiness.module.css'

export default function OurBusiness() {
    const services = [
        {
            title: "3D 변환 솔루션",
            description: "부스에서 촬영된 2D 이미지를 즉시 3D 데이터로 변환합니다. 클라우드 기반의 신속한 프로세스로 촬영부터 제작까지의 시간을 획기적으로 단축합니다.",
            icon: "⚡"
        },
        {
            title: "AI 캐릭터 필터",
            description: "실사 이미지에 AI 기술을 더해 나만의 캐릭터를 생성합니다. 단순한 인물 피규어를 넘어, 사용자의 개성이 담긴 아트토이를 현장에서 디자인하세요.",
            icon: "🤖"
        },
        {
            title: "브랜드 콜라보레이션",
            description: "기업 로고와 아이덴티티를 부스 디자인과 피규어 베이스에 적용할 수 있습니다. 소비자와 즐겁게 교감하는 새로운 마케팅 채널이 되어드립니다.",
            icon: "🤝"
        }
    ]

    return (
        <section id="business" className={styles.business}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Business</h2>
                    <p className={styles.subtitle}>
                        F&P 부스는 사진만 찍고 끝나는 경험을 넘어, 만드는 즐거움과 소유하는 기쁨을 제공합니다.<br/>
                        가장 빠르고 혁신적인 기술로 서브컬처와 대중을 연결합니다.
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
