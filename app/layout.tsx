import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'José Miguel Cardozo — Dev Full-Stack',
  description:
    'Portfólio de José Miguel Cardozo, Desenvolvedor Full-Stack Júnior especializado em React, Next.js, Node.js, NestJS e integrações com IA.',
  keywords: [
    'Desenvolvedor Full-Stack',
    'React',
    'Next.js',
    'Node.js',
    'NestJS',
    'TypeScript',
    'José Miguel Cardozo',
  ],
  authors: [{ name: 'José Miguel Cardozo' }],
  openGraph: {
    title: 'José Miguel Cardozo — Dev Full-Stack',
    description:
      'Portfólio com projetos reais em React, Next.js, NestJS, Java/Spring, Docker, AWS e IA.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
