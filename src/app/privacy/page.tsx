import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './privacy.module.css'

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>개인정보처리방침</h1>
                    <div className={styles.content}>
                        <section className={styles.section}>
                            <h2>1. 개인정보의 수집 및 이용목적</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>2. 수집하는 개인정보의 항목</h2>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Sed do eiusmod tempor incididunt</li>
                                <li>Ut labore et dolore magna aliqua</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>3. 개인정보의 보유 및 이용기간</h2>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>4. 개인정보의 제3자 제공</h2>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                                qui ratione voluptatem sequi nesciunt.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>5. 개인정보의 파기절차 및 방법</h2>
                            <p>
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                                sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </p>
                        </section>

                        <div className={styles.footer}>
                            <p>시행일자: 2024년 1월 1일</p>
                            <p>마지막 업데이트: {new Date().toLocaleDateString('ko-KR')}</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
