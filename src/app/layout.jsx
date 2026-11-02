import '../styles/typography.css'
import './globals.css'
import '../components/PortfolioApp.css'

const title = 'Jia-Jin Chen | Unity 遊戲開發作品集'
const description = 'Jia-Jin Chen 的遊戲開發作品集，展示 Unity、C#、2D 與 3D 遊戲專案及開發職責。'

export const metadata = {
  title,
  description,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'zh_TW',
    siteName: 'Jia-Jin Chen 的個人作品集',
  },
  twitter: { card: 'summary', title, description },
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  )
}
