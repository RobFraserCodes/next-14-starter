import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { siteInfo } from '@/config/site-info'
import { cn } from '@/lib/utils'
import Header from '@/components/header'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: siteInfo.name,
    template: '%s | ' + siteInfo.name,
  },
  description: siteInfo.description,
  keywords: siteInfo.keywords,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable)}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
