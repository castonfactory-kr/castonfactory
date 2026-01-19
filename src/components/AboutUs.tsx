import styles from './AboutUs.module.css'

export default function AboutUs() {
    const values = [
        {
            title: "공정의 신속화",
            description: "2D 이미지를 3D로 즉시 변환하고 클라우드 데이터 처리를 통해 작업 시간과 비용을 획기적으로 절감합니다.",
        },
        {
            title: "AI가 만드는 나",
            description: "단순 피규어를 넘어, AI 필터를 통해 나를 닮은 매력적인 캐릭터 피규어를 생성합니다.",
        },
        {
            title: "무한한 확장성",
            description: "브랜드 아이덴티티를 담은 부스 디자인과 콜라보레이션으로 강력한 바이럴 마케팅 효과를 창출합니다.",
        }
    ]

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Why F&P Booth?</h2>
                        <p className={styles.description}>
                            <strong>"왜 피규어 산업은 멈춰있을까?"</strong><br/>
                            대학에서 조소를 전공하고 피규어 업계에서 일하며 늘 품었던 의문이었습니다. 
                            변화하는 트렌드에 대응하기 힘들었던 기존 피규어 시장의 한계를 넘기 위해, 
                            4~5년 전부터 대중화된 포토부스 문화와 피규어 산업의 접점을 찾았습니다.
                        </p>
                        <p className={styles.description}>
                            F&P(Figure & Poto) 부스는 <strong>AI 기술과 3D 모델링 자동화</strong>를 통해 
                            추가적인 장비 없이 포토부스 이용만으로도 누구나 쉽고 빠르고 저렴하게 자신만의 피규어를 제작할 수 있는 
                            솔루션을 제공합니다. '취향'이 존중받는 시대, 우리는 서브컬처를 코어컬처로 
                            이끌며 새로운 즐거움을 창조합니다.
                        </p>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>180%</div>
                                <div className={styles.statLabel}>전년대비 성장률</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>300+</div>
                                <div className={styles.statLabel}>피규어 제작 경험</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>20억+</div>
                                <div className={styles.statLabel}>모기업 연매출</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.values}>
                        <h3 className={styles.valuesTitle}>Core Values</h3>
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
