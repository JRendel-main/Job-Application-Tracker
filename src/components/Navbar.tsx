import React from 'react'
import Link from 'next/link'
import { BriefcaseIcon, UserRound } from 'lucide-react'
import { Button } from './ui/button'

const Navbar = () => {
return (
  <div className="flex justify-between items-center py-3 h-16 px-6 border-b bg-card sticky">
    <div className="flex items-center gap-2">
      <BriefcaseIcon className="w-6 h-6 text-primary" />
      <Link href="/">
        <p className="text-xl font-bold">Job Application Tracker</p>
      </Link>
    </div>
    <div className='text-primary font-medium'>
      Hello, User
    </div>
  </div>
);
}

export default Navbar
