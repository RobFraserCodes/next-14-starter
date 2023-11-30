import React from 'react'
import { siteInfo } from '@/config/site-info'
import { BeakerIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function Logo() {
  return (
    <>
        <Link href='/' className='flex'>
            <BeakerIcon className='h-8 w-8' />
            {siteInfo.name}
        </Link>
        <h1>Hello World</h1>
    </>
  )
}
