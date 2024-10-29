'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    console.log('Loaded.')
  }, [])

  return <div>Hello World</div>
}
