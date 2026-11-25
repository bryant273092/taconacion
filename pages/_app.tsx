import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import '../styles/globals.css'

// Oswald (SIL Open Font License) — condensed display face matching the logo lettering.
// Self-hosted so builds don't depend on fetching from Google Fonts.
const heading = localFont({
  src: '../styles/fonts/Oswald-latin-variable.woff2',
  weight: '200 700',
  variable: '--font-heading',
  display: 'swap',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={heading.variable}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
