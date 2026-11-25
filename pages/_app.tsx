import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { track } from '@vercel/analytics'
import '../styles/globals.css'

// Oswald (SIL Open Font License) — condensed display face matching the logo lettering.
// Self-hosted so builds don't depend on fetching from Google Fonts.
const heading = localFont({
  src: '../styles/fonts/Oswald-latin-variable.woff2',
  weight: '200 700',
  variable: '--font-heading',
  display: 'swap',
})

// One listener records clicks on any element tagged with data-track="..."
// (call, directions, order-takeout, order-delivery) as a Vercel Analytics event.
const useClickTracking = () => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>('[data-track]')
      if (el?.dataset.track) track('CTA Click', { action: el.dataset.track, path: window.location.pathname })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
}

function MyApp({ Component, pageProps }: AppProps) {
  useClickTracking()
  return (
    <div className={heading.variable}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  )
}

export default MyApp
