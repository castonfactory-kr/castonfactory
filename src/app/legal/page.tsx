import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './legal.module.css'

export default function LegalPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>법적고지</h1>
                    <div className={styles.content}>
                        <section className={styles.section}>
                            <h2>1. 저작권 정보</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                본 웹사이트의 모든 콘텐츠는 저작권법에 의해 보호됩니다.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>2. 면책 조항</h2>
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>3. 링크된 사이트</h2>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                외부 링크에 대한 책임은 해당 사이트 운영자에게 있습니다.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>4. 상표권</h2>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                                본 웹사이트에 사용된 모든 상표는 각 소유자의 재산입니다.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>5. 준거법 및 관할</h2>
                            <p>
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                본 약관은 대한민국 법률에 따라 규율되고 해석됩니다.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>6. 연락처</h2>
                            <p>
                                법적 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다:
                            </p>
                            <ul>
                                <li>이메일: legal@castonfactory.com</li>
                                <li>전화: 02-1234-5678</li>
                                <li>주소: 서울특별시 강남구 테헤란로 123</li>
                            </ul>
                        </section>

                        <div className={styles.footer}>
                            <p>최종 수정일: {new Date().toLocaleDateString('ko-KR')}</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
