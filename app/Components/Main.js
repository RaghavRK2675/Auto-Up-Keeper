import React from 'react';

const Main = () => {
  return (
    <main className='flex items-center justify-center h-screen'> {/* Set height to fill the screen */}
      <div className='flex flex-col items-center'> {/* Stack items vertically */}
        <h1 className='text-center text-4xl mb-4 mt-32'>A website aiming to simplify car maintenance</h1> {/* Margin-bottom for spacing */}
        <button
          className="bg-black text-white px-9 py-2 font-bold border border-white mt-24 mb-20"> {/* Removed flex classes from button */}
          Discover
        </button>
        <br></br>
        <h1 className='align-text-bottom text-xl mt-10 mb-20'> Navigate through menu bar</h1> {/* Margin-bottom for spacing */}
      </div>
      
    </main>
  );
};

export default Main;
