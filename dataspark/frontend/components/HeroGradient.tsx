import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function HeroGradient({ children, className = '' }: Props) {
  return (
    <div className={`relative p-px rounded-xl overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
      <div className="relative bg-white dark:bg-gray-900 p-10 rounded-lg">
        {children}
      </div>
    </div>
  )
}
