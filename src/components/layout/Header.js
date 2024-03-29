import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <div>
            <header className='flex items-center justify-between'>
                <nav className='flex items-center gap-8 text-gray-500 font-semibold'>
                    <a className='text-primary font-semibold text-2xl' herf="">ST PIZZA</a>
                    <Link href={''}>Home</Link>
                    <Link href={''}>Menu</Link>
                    <Link href={''}>About</Link>
                    <Link href={''}>Contact</Link>
                </nav>
                <nav className="flex items-center gap-4 text-gray-500 font-semibold">
                    <Link href={'/login'}>Login</Link>
                    <Link href={'/register'} className='bg-primary rounded-full text-white px-8 py-2'>Register</Link>
                </nav>
            </header>
        </div>
    );
};

export default Header;