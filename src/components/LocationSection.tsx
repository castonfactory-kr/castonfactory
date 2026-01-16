import styles from './LocationSection.module.css'

export default function LocationSection() {
    return (
        <section className={styles.location}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Location</h2>
                    <p className={styles.subtitle}>Find us at our office</p>
                </div>
                <div className={styles.grid}>
                    <div className={styles.mapPlaceholder}>
                        <div className={styles.mapContent}>
                            <div className={styles.mapIcon}>📍</div>
                            <p className={styles.mapText}>지도 위치</p>
                            <p className={styles.mapSubtext}>실제 지도는 Google Maps API 또는 Naver Maps API를 연동하여 표시할 수 있습니다.</p>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.infoCard}>
                            <h3 className={styles.infoTitle}>본사 주소</h3>
                            <p className={styles.infoText}>
                                서울특별시 강남구 테헤란로 123<br />
                                Castonfactory 빌딩 10층
                            </p>
                        </div>
                        <div className={styles.infoCard}>
                            <h3 className={styles.infoTitle}>연락처</h3>
                            <p className={styles.infoText}>
                                Tel: 02-1234-5678<br />
                                Fax: 02-1234-5679<br />
                                Email: info@castonfactory.com
                            </p>
                        </div>
                        <div className={styles.infoCard}>
                            <h3 className={styles.infoTitle}>근무 시간</h3>
                            <p className={styles.infoText}>
                                월 - 금: 09:00 - 18:00<br />
                                토, 일: 휴무<br />
                                점심시간: 12:00 - 13:00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
