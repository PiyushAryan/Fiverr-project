import React from 'react'
import Link from 'next/link';
import { Button } from "@/components/ui/button";



export default function Navbar() {
  return (
    <>
    <nav className="bg-[#120C18] p-4 pt-10 flex justify-between items-center">
      <ul className="flex space-x-4 mx-auto">
        <li>
          <Link href="/Stories" className="mx-4 bg-gradient-to-b from-gray-700 to-slate-50 bg-clip-text text-transparent hover:text-gray-700">
            Public Stories
          </Link>
        </li>
        <li>
          <Link href="/" className="mx-2 bg-gradient-to-b from-gray-700 to-slate-50 bg-clip-text text-transparent hover:text-gray-700">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/services" className="mx-2 bg-gradient-to-b from-gray-700 to-slate-50 bg-clip-text text-transparent hover:text-gray-700">
            Create Story
          </Link>
        </li>
        <li>
          <Link href="/contact" className="mx-2 bg-gradient-to-b from-gray-700 to-slate-50 bg-clip-text text-transparent hover:text-gray-700">
            Profile
          </Link>
        </li>
      </ul>
      <div className="flex space-x-2">
      <Button className= "bg-transparent bg-gradient-to-b from-gray-700 to-slate-50 bg-clip-text text-transparent" variant="outline">Login</Button>
      <Button className= "bg-transparent bg-gradient-to-b from-gray-700 to-slate-50 bg-clip-text text-transparent" variant="outline">Get Demo</Button>
      </div>
    </nav>
    </>
  )
}
