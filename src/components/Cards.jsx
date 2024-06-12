import React from 'react';

function Cards() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-100 flex'>
      <div className='cardcontainer  ml-10 m-40 w-1/2 h-40vh flex items-center justify-center bg-[#004D43] mx-2 relative transition duration-300 ease-in-out transform hover:scale-105 rounded-xl relative'>
        <h1 className='text-yellow-300 text-8xl'>ochi</h1>
        <button className='absolute px-5 py-2 rounded border border-yellow-300 bg-transparent text-yellow-300 bottom-5 left-5 animate-bounce transition duration-300 ease-in-out transform hover:scale-110'>2019-2022</button>
      </div>
      
      <div className='cardcontainer ml-3 m-40 w-1/4 h-40vh flex flex-col justify-center items-center bg-slate-950 mx-2 transition duration-300 ease-in-out transform hover:scale-105 rounded-xl relative'>
        <h1 className='text-white text-6xl mb-4'>clutch</h1>
       
        <div className='flex justify-center mt-4'>
          {[...Array(5)].map((_, index) => (
            <svg key={index} className='w-6 h-6 text-yellow-500' fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M12 .587l3.668 7.568L24 9.423l-6 5.849 1.416 8.344L12 18.897l-7.416 3.719L6 15.272 0 9.423l8.332-1.268z'/>
            </svg>
          ))}
          
        </div>
        
      </div>
      <div className='cardcontainer mr-10 ml-3 m-40 w-1/4 h-40vh flex items-center justify-center bg-slate-950 mx-2 transition duration-300 ease-in-out transform hover:scale-105 rounded-xl relative'>
        <img
          className='w-[102px] h-[104px]'
          src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'
          alt='logo'
        />
      </div>
    </div>
  );
}

export default Cards;
