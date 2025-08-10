import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className=' p-2'>
        <div className=' p-3 flex flex-row-reverse justify-between items-center border-b'>
            <div className='flex flex-row-reverse p-2 gap-x-5 items-center '>
                <Link href={'/'} className='lg:hidden bg-myYellow p-1 rounded-full'>Use app</Link>
                {/* <Link href={'/'} className='hidden lg:block'>hh</Link> */}
                <Link href={'/'}>Sing in</Link>
                <Link href={'/'} className='hidden lg:block'>Watchlist</Link>
                <button>3</button>
            </div>
            <div className='flex flex-row-reverse lg:flex-row gap-x-2.5 items-center'>
                <Link href={'/'} className='bg-myYellow p-2 rounded-full font-bold'>IMDb</Link>
                <Link href={'/'}>menu</Link>
            </div>
        </div>
    </div>
  )
}

export default Header