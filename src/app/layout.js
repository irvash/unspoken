import './globals.css'

export const metadata = {
  title: 'Unspoken Stories',
  description: 'A blog for the stories left untold',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
