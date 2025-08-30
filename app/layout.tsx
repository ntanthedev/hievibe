import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HiveVibe - Smarter Hiring, Faster Connections',
  description: 'The next-generation recruitment platform designed to make hiring and job-hunting faster, smarter, and less stressful.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-inter">{children}</body>
    </html>
  )
}
