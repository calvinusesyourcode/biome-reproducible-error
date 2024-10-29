import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'biome reproducible error',
  description: 'biome reproducible error',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black antialiased h-[100svh] w-[100svw] overflow-clip font-[family-name:var(--font-geist-sans)]`}>
        {children}
      </body>
    </html>
  )
}
