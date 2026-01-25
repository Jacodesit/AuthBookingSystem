import React from 'react'

import Header from '@/components/heading'

type LayoutProps = {
    children: React.ReactNode
    name: string
}

export default function AuthLayout({children, name}:LayoutProps) {
    return (
        <div className=''>
            <Header name={name}/>
            <main className='px-10 pt-10 pb-10 lg:px-25 lg:pt-25 lg:pb-17'>
                {children}
            </main>
        </div>
    )
}
