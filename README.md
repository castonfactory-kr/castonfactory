# Cast on Factory - 나만의 피규어 제작 서비스

![Hero Section](https://i.imgur.com/your-hero-image.png) <!-- 이 부분은 실제 프로젝트 이미지 URL로 교체하는 것이 좋습니다 -->

## 📝 1. 프로젝트 개요

**Cast on Factory**는 생성형 AI를 활용하여 세상에 단 하나뿐인 나만의 피규어를 주문 제작하는 서비스의 웹사이트입니다. 사용자는 F&P(Figure & Photo booth) 서비스를 통해 자신의 특별한 순간을 3D 모델로 영원히 간직할 수 있습니다.

이 프로젝트는 Next.js를 기반으로 구축된 정적 웹사이트로, 서비스의 핵심 가치와 비즈니스 모델을 잠재 고객에게 소개하는 것을 목표로 합니다. 깔끔한 컴포넌트 기반 구조와 CSS Modules를 활용한 스타일링이 특징입니다.

---

## 🛠️ 2. 사용된 기술 (Tech Stack)

-   **프레임워크:** [Next.js](https://nextjs.org/) (v14+)
-   **UI 라이브러리:** [React](https://reactjs.org/) (v18+)
-   **언어:** [TypeScript](https://www.typescriptlang.org/)
-   **스타일링:** [CSS Modules](https://github.com/css-modules/css-modules), Global CSS
-   **배포:** (Vercel 또는 유사 플랫폼을 통해 배포될 것으로 예상)

---

## 🔍 3. 프로젝트 리뷰 및 개선점

이 프로젝트는 Next.js의 기본을 잘 활용하고 있지만, 더 높은 수준의 확장성과 유지보수성을 위해 다음과 같은 부분들을 개선할 수 있습니다.

#### 긍정적인 부분

-   **명확한 컴포넌트 분리:** `HeroSection`, `Portfolio` 등 기능 단위로 컴포넌트가 잘 분리되어 있어 코드의 가독성이 높습니다.
-   **App Router 활용:** Next.js 13+의 App Router를 사용하여 라우팅 구조가 직관적입니다. (`/`, `/contact`, `/legal` 등)
-   **CSS Modules:** 컴포넌트 레벨 스코프 스타일을 적용하여 클래스 이름 충돌 문제를 효과적으로 방지하고 있습니다.

#### 개선이 필요한 부분

1.  **하드코딩된 콘텐츠:**
    -   **문제점:** `HeroSection.tsx`나 `AboutUs.tsx` 등 대부분의 컴포넌트에 표시되는 텍스트(제목, 설명 등)가 JSX 내에 직접 하드코딩되어 있습니다. 이는 콘텐츠 수정 시 매번 코드를 직접 변경해야 하므로 유지보수가 비효율적입니다.
    -   **개선 방안:**
        -   **(단기)** 콘텐츠를 `src/constants/content.ts` 와 같은 별도의 파일로 분리하여 관리합니다.
        -   **(장기)** Strapi, Contentful과 같은 Headless CMS를 도입하여 비개발자도 쉽게 콘텐츠를 수정하고 관리할 수 있도록 시스템을 구축합니다.

2.  **재사용성 낮은 컴포넌트:**
    -   **문제점:** `HeroSection` 내의 버튼처럼 여러 곳에서 사용될 수 있는 UI 요소들이 특정 컴포넌트 내부에 종속되어 있습니다. 이로 인해 유사한 스타일의 버튼을 다른 곳에서 사용하려면 코드를 복사-붙여넣기 해야 합니다.
    -   **개선 방안:** `Button`, `Card`, `Title` 등 범용적으로 사용될 수 있는 UI 요소들을 `src/components/common` 디렉터리에 별도의 원자적(Atomic) 컴포넌트로 분리합니다. 이를 통해 일관된 디자인 시스템을 구축하고 코드 재사용성을 극대화할 수 있습니다.

3.  **미사용 상태 관리 로직:**
    -   **문제점:** `ThemeContext.tsx`와 `ClientProviders.tsx`가 존재하지만, 실제 다크/라이트 모드 전환과 같은 기능이 구현되어 있지 않습니다. 현재로서는 불필요한 코드입니다.
    -   **개선 방안:** 실제로 테마 전환 기능을 구현하거나, 만약 해당 기능이 기획에 없다면 관련 코드를 정리하여 프로젝트를 더 가볍게 만듭니다.

4.  **부족한 인터랙션:**
    -   **문제점:** 현재 웹사이트는 정적인 정보 제공에 그치고 있습니다. 특히 `/contact` 페이지의 "문의하기" 기능은 UI만 존재할 뿐, 실제 서버로 데이터를 전송하는 로직이 없습니다.
    -   **개선 방안:** Next.js의 **API Routes** 또는 **Server Actions**를 활용하여 문의 폼 데이터를 처리하는 백엔드 로직을 구현합니다. 이를 통해 사용자와의 상호작용을 강화하고 실제 비즈니스 리드를 수집할 수 있습니다.

---

## 🚀 4. Next.js 시작하기 튜토리얼 (For Developers)

이 프로젝트는 Next.js, 특히 App Router의 핵심 개념을 학습하기에 매우 좋은 예제입니다. 아래 튜토리얼을 따라 프로젝트 구조를 이해하고 첫 컴포넌트를 만들어보세요.

#### 1단계: 프로젝트 구조 이해하기

-   **`src/app/`**: 이 디렉터리는 Next.js의 **App Router**가 동작하는 핵심 공간입니다.
    -   **`layout.tsx`**: 모든 페이지에 공통으로 적용되는 최상위 레이아웃입니다. `<html>`, `<body>` 태그와 전역 Provider(`ClientProviders`)가 이곳에 위치합니다.
    -   **`page.tsx`**: 특정 경로의 메인 UI를 정의하는 파일입니다. 예를 들어, `src/app/page.tsx`는 웹사이트의 루트 경로(`/`)를, `src/app/contact/page.tsx`는 `/contact` 경로를 담당합니다.
    -   **`globals.css`**: 전역적으로 적용되는 CSS 파일입니다. 폰트, 기본 마진/패딩 리셋 등이 정의되어 있습니다.

#### 2단계: 컴포넌트와 페이지의 관계 파악하기

`src/app/page.tsx` 파일을 열어보세요.

```tsx
import Header from '@/components/Header'
// ... 다른 컴포넌트 import
export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                {/* ... 다른 섹션 컴포넌트들 */}
            </main>
            <Footer />
        </>
    )
}
```

이처럼 Next.js의 페이지는 여러 개의 독립적인 **컴포넌트**들을 조립하여 하나의 완전한 UI를 만들어냅니다. `src/components` 디렉터리에서 각 컴포넌트의 코드를 확인할 수 있습니다.

#### 3단계: CSS Modules로 스타일링하기

`src/components/HeroSection.tsx`와 `HeroSection.module.css`를 함께 살펴보세요.

-   **`HeroSection.tsx`**:
    ```tsx
    import styles from './HeroSection.module.css'

    <section id="home" className={styles.hero}>
        <h1 className={styles.title}>...</h1>
    </section>
    ```
-   **`HeroSection.module.css`**:
    ```css
    .hero {
      /* ... hero 섹션 스타일 ... */
    }
    .title {
      /* ... title 스타일 ... */
    }
    ```

`import styles from ...` 구문을 통해 CSS 파일을 객체처럼 불러오고, `className={styles.클래스이름}` 형태로 적용합니다. 이렇게 하면 CSS 클래스 이름이 컴파일 시점에 고유한 해시값으로 변경되어 다른 컴포넌트와의 스타일 충돌을 원천적으로 방지합니다.

#### 4단계: 나만의 첫 컴포넌트 만들기 (실습)

`HeroSection`에 있는 버튼들을 재사용 가능한 `Button` 컴포넌트로 만들어 봅시다.

1.  **파일 생성:** `src/components/common` 디렉터리를 만들고, 그 안에 `Button.tsx`와 `Button.module.css` 파일을 생성합니다.

2.  **`Button.tsx` 작성:**
    ```tsx
    import Link from 'next/link';
    import styles from './Button.module.css';

    interface ButtonProps {
        href: string;
        children: React.ReactNode;
        variant?: 'primary' | 'secondary';
    }

    export default function Button({ href, children, variant = 'primary' }: ButtonProps) {
        const buttonClassName = variant === 'primary' ? styles.primaryButton : styles.secondaryButton;

        return (
            <Link href={href} className={buttonClassName}>
                {children}
            </Link>
        );
    }
    ```

3.  **`Button.module.css` 작성:** (`HeroSection.module.css`에서 관련 스타일을 가져옵니다)
    ```css
    .primaryButton {
        /* 기존 primaryButton 스타일 */
    }
    .secondaryButton {
        /* 기존 secondaryButton 스타일 */
    }
    ```

4.  **`HeroSection.tsx` 수정:**
    -   `import Button from '@/components/common/Button';`를 추가합니다.
    -   기존 `<a>` 태그들을 새로 만든 `Button` 컴포넌트로 교체합니다.
        ```tsx
        <div className={styles.cta}>
            <Button href="#business" variant="primary">
                비즈니스 알아보기
            </Button>
            <Button href="/contact" variant="secondary">
                문의하기
            </Button>
        </div>
        ```

이제 `Button` 컴포넌트는 다른 어떤 곳에서도 쉽게 재사용할 수 있습니다. 이처럼 작은 단위로 컴포넌트를 분리하고 조립하는 것이 현대 프론트엔드 개발의 핵심입니다. 행운을 빕니다!
