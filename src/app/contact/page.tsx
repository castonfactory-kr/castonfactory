import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './contact.module.css'

export default function ContactPage() {
    const faqs = [
        {
            question: "제품 문의는 어떻게 하나요?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 이메일 또는 전화로 문의하실 수 있습니다."
        },
        {
            question: "견적 요청은 어떻게 진행되나요?",
            answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 온라인 양식을 작성하시거나 직접 연락 주시면 됩니다."
        },
        {
            question: "A/S 및 기술 지원은 어떻게 받을 수 있나요?",
            answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco. 고객 지원팀이 연중무휴로 대기하고 있습니다."
        },
        {
            question: "납품 기간은 얼마나 소요되나요?",
            answer: "Duis aute irure dolor in reprehenderit in voluptate velit. 제품에 따라 2-4주 정도 소요됩니다."
        },
        {
            question: "해외 배송도 가능한가요?",
            answer: "Excepteur sint occaecat cupidatat non proident. 전 세계 배송이 가능하며 물류 파트너와 협력하고 있습니다."
        }
    ]

    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <h1 className={styles.title}>Contact Us</h1>
                        <p className={styles.subtitle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. We're here to help!
                        </p>
                    </div>
                </section>

                <section className={styles.contactSection}>
                    <div className={styles.container}>
                        <div className={styles.grid}>
                            <div className={styles.contactInfo}>
                                <h2 className={styles.sectionTitle}>고객지원 연락처</h2>
                                <div className={styles.contactCards}>
                                    <div className={styles.contactCard}>
                                        <div className={styles.contactIcon}>📧</div>
                                        <h3 className={styles.contactCardTitle}>Email</h3>
                                        <p className={styles.contactCardText}>support@castonfactory.com</p>
                                    </div>
                                    <div className={styles.contactCard}>
                                        <div className={styles.contactIcon}>📞</div>
                                        <h3 className={styles.contactCardTitle}>Phone</h3>
                                        <p className={styles.contactCardText}>02-1234-5678</p>
                                    </div>
                                    <div className={styles.contactCard}>
                                        <div className={styles.contactIcon}>💬</div>
                                        <h3 className={styles.contactCardTitle}>Live Chat</h3>
                                        <p className={styles.contactCardText}>월-금 09:00-18:00</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.faqSection}>
                                <h2 className={styles.sectionTitle}>FAQ - 자주 묻는 질문</h2>
                                <div className={styles.faqList}>
                                    {faqs.map((faq, index) => (
                                        <details key={index} className={styles.faqItem}>
                                            <summary className={styles.faqQuestion}>{faq.question}</summary>
                                            <p className={styles.faqAnswer}>{faq.answer}</p>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
