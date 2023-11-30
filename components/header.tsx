"use client";

import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { mainNavigation } from '@/config/site-info'
import Logo from './logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="">
      <Logo />
      Hello World
    </header>
  )
}
