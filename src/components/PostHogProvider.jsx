// src/components/PostHogProvider.jsx
'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

// Manual pageview capture so SPA (App Router) navigations are tracked accurately.
function PageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!pathname || !posthog.__loaded) return
    let url = window.origin + pathname
    if (searchParams?.toString()) url += `?${searchParams.toString()}`
    posthog.capture('$pageview', { $current_url: url })
  }, [pathname, searchParams])

  return null
}

export default function PostHogProvider({ children }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    if (key && !posthog.__loaded) {
      posthog.init(key, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        capture_pageview: false, // handled manually in <PageView />
        capture_pageleave: true,
        person_profiles: 'identified_only',
      })
    }
  }, [])

  return (
    <PHProvider client={posthog}>
      {children}
      <Suspense fallback={null}>
        <PageView />
      </Suspense>
    </PHProvider>
  )
}
