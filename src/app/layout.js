import './globals.css'
import NlBadgeHider from './NlBadgeHider'

export const metadata = {
  title: 'Unspoken Stories',
  description: 'A blog for the stories left untold',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <NlBadgeHider />
      </body>
    </html>
  )
}
