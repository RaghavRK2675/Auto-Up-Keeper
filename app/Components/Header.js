import React from 'react';

const Header = () => {
    return (
        <nav className='border-b border-white flex items-center justify-between h-20 pb-2 px-3'> {/* Added horizontal padding */}
            <div className='flex items-center'>
                <span className='text-white text-2xl pt-2 cursor-pointer'>&#9776;</span> {/* Menu icon */}
            </div>
            <div className='flex flex-col items-center flex-grow'> {/* Centering headings */}
                <h1 className='text-white text-xl text-center pl-8 cursor-pointer pt-1'>Auto-Up-Keeper</h1>
                <h1 className='text-white text-xs text-center pl-8 cursor-pointer'>A FIXATION TO VEXATIONS</h1>
            </div>
            <h1 className='text-white text-sm pt-2 cursor-pointer'>TUTORIAL</h1> {/* Right heading */}
            
        </nav>
    );
};

export default Header;
