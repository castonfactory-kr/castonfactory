import styles from './LocationSection.module.css'

export default function LocationSection() {
    return (
        <section className={styles.location}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Location & Contact</h2>
                    <p className={styles.subtitle}>F&P 부스를 경험하고 싶으시다면 언제든 방문해 주세요.</p>
                </div>
                <div className={styles.grid}>
                    <div className={styles.mapPlaceholder}>
                        <div className={styles.mapContent}>
                            <div className={styles.mapIcon}>📍</div>
                            <p className={styles.mapText}>오시는 길</p>
                            <p className={styles.mapSubtext}>서울 성동구 연무장길 (성수동)<br/>Cast on Factory 본사 및 쇼룸</p>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.infoCard}>
                            <h3 className={styles.infoTitle}>본사 주소</h3>
                            <p className={styles.infoText}>
                                서울특별시 성동구 연무장길 00<br />
                                Cast on Factory 빌딩 3층
                            </p>
                        </div>
                        <div className={styles.infoCard}>
                            <h3 className={styles.infoTitle}>연락처</h3>
                            <p className={styles.infoText}>
                                Tel: 02-1234-5678<br />
                                Email: contact@castonfactory.com
                            </p>
                        </div>
                        <div className={styles.infoCard}>
                            <h3 className={styles.infoTitle}>운영 시간</h3>
                            <p className={styles.infoText}>
                                평일: 10:00 - 19:00<br />
                                점심시간: 12:00 - 13:00<br />
                                주말 및 공휴일: 휴무
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
