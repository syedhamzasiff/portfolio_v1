import React from 'react'

export default function SectionHeading({
    children
}: {children: String}) {
  return (
    <div>
        <h2 className='text-3xl font-bold capitalize mb-4 text-center'>
            {children}
        </h2>
    </div>
  )
}
