import Link from 'next/link'
import React from 'react'
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';
const Footer = () => {
  return (
    <footer className='bg-slate-900 px-6  text-white'>
      <div className='gap-8 grid grid-cols-1 md:grid-cols-4 mx-auto max-w-7xl py-12'>
        {/* Logo + Social */}
        <div>
          <div className='flex justify-start items-center '>
            <img
              src='/ML-05.png'
              alt='Mockshark Logo'
              className='w-18 h-18 object-contain'
            />
            <h2 className=' font-bold text-cyan-400 text-2xl flex flex-col mt-[3px] '>
              Mock <span className='text-white mt-[-5px]'>Shark</span>
            </h2>
          </div>
       <div className='flex gap-2 text-xl ml-3'>
  <a href='https://x.com' target='_blank' rel='noopener noreferrer'>
    <Twitter className='w-6 h-6 text-white hover:text-white' />
  </a>
  <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
    <Instagram className='w-6 h-6 text-white hover:text-white' />
  </a>
  <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
    <Facebook className='w-6 h-6 text-white hover:text-white' />
  </a>
  <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
    <Linkedin className='w-6 h-6 text-white hover:text-white' />
  </a>
</div>

        </div>

        {/* Information */}
        <div>
          <h4 className='mb-2 font-bold'>Information</h4>
          <ul className='space-y-1 text-sm'>
            <li>
            <Link href="/">
                Home
              </Link>
            </li>
            <li>
             
              
              <Link href="/aboutus">
                About Us
              </Link>
            </li>
            <li>
             
               
              <Link href="/Bundle-Deals">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className='mb-2 font-bold'>Legal</h4>
          <ul className='space-y-1 text-sm'>
            <li>
             <Link href="/Terms-Conditions">
           
                Terms of Service
            
             </Link>
            </li>
            <li>
              <Link href='/Privacypolicy'>
            
                Privacy Policy
             
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className='mb-2 font-bold'>Support</h4>
          <ul className='space-y-1 text-sm'>
            <li>
              <Link href='/Help-Center'>
                Help Center
              </Link>
              
              
            </li>
            <li>
              
                
                <Link href="/faq">
                FAQs
              </Link>
              
            </li>
            <li>
             <Link href='/contact-us'>
             
                Contact Us
             
             </Link>

            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className='mt-10 flex justify-center items-center  border-slate-700 border-t text-gray-400 text-sm text-center'>
       <h1 className='p-6'> © 2025 MockShark.com. All rights reserved.</h1>
      </div>
    </footer>
  )
}

export default Footer
