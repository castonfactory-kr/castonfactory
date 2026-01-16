'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light')

    useEffect(() => {
        // 저장된 테마 또는 시스템 설정 가져오기 (기본값: light)
        const savedTheme = localStorage.getItem('theme') as Theme | null
        
        if (savedTheme) {
            setTheme(savedTheme)
            document.documentElement.setAttribute('data-theme', savedTheme)
        } else {
            // 시스템 설정을 확인하되, 읽을 수 없으면 light로 기본 설정
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            const initialTheme = prefersDark ? 'dark' : 'light'
            setTheme(initialTheme)
            document.documentElement.setAttribute('data-theme', initialTheme)
        }
    }, [])

    useEffect(() => {
        // HTML 요소에 data-theme 속성 설정
        document.documentElement.setAttribute('data-theme', theme)
        // localStorage에 저장
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
