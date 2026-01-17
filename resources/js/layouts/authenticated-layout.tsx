import React from 'react'

import Header from '@/components/heading'

type LayoutProps = {
    children: React.ReactNode
    name: string
}

export default function AuthLayout({children, name}:LayoutProps) {
    return (
        <div>
            <Header name={name}/>
            <main className='px-25 pt-25 pb-10'>
                {children}
            </main>
        </div>
    )
}
