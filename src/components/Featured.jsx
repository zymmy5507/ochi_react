import React from 'react';

function Featured() {
  return (
    <div  className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20 transition-transform duration-500 hover:scale-105'>
        <h1 className='text-8xl font-family-["Neue_Montreal"] tracking-tight'>Feature Projects</h1>
      </div>
      <div className='px-20 relative transition-transform duration-500 hover:scale-105'>
        <div className='cards w-full flex gap-10 mt-10'>
          <div className='headings'></div>
          <div className='cardcontainer w-1/2 h-[80vh] rounded-xl overflow-hidden relative'>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img
                className='w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:rotate-3 hover:animate-vibrate'
                src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'
                alt='Card Image'
              />
            </div>
            <div className='overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 hover:opacity-100'>
              {/* <h2 className='text-4xl font-bold text-white'>FYDE</h2> */}
            </div>
            <div className='overlay-text absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100 hover:scale-105 animate-bounce'>
              <h2 className='text-8xl font-bold text-yellow-400'>FYDE</h2>
            </div>
          </div>
          <div className='cardcontainer w-1/2 h-[100vh] rounded-xl relative'>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img
                className='w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:rotate-3 hover:animate-vibrate'
                src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'
                alt='Card Image'
              />
            </div>
            <div className='overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 hover:opacity-100'>
              {/* <h2 className='text-4xl font-bold text-white'>VISE</h2> */}
            </div>
            <div className='overlay-text absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100 hover:scale-105 animate-bounce'>
              <h2 className='text-8xl font-bold text-yellow-400'>VISE</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;