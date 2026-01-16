import type { Metadata } from 'next'
import './globals.css'
import ClientProviders from '@/components/ClientProviders'

export const metadata: Metadata = {
    title: 'Cast on Factory - Innovation in Manufacturing',
    description: 'Welcome to Cast on Factory, where innovation meets precision in manufacturing excellence.',
    keywords: 'castonfactory, manufacturing, innovation, business, industry',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <body>
                <ClientProviders>
                    {children}
                </ClientProviders>
            </body>
        </html>
    )
}

