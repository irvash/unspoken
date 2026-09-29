'use client'

import { useEffect } from 'react'

/**
 * Waits 10 seconds after page load, then hides the element with id
 * "nl-badge-frame" by applying `display: none !important`.
 */
export default function NlBadgeHider() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Inject a style rule so the hiding wins over inline styles.
      const style = document.createElement('style')
      style.textContent = '#nl-badge-frame { display: none !important; }'
      document.head.appendChild(style)

      // Also set the inline style directly if the element already exists.
      const el = document.getElementById('nl-badge-frame')
      if (el) {
        el.style.setProperty('display', 'none', 'important')
      }
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return null
}
