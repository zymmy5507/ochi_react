import React from 'react';

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-2xl rounded-tr-3xl text-black transition-all duration-500 hover:scale-105'>
      <h1 className='font-["Neue_Montreal"] text-5xl leading-[1.2] tracking-tight transition-transform duration-500 hover:scale-110'>
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562] transition-all duration-500 hover:scale-105'>
        <div className='w-1/2 transition-transform duration-500 hover:scale-110'>
          <h1 className='text-5xl transition-transform duration-500 hover:scale-110'>
            Our approach
          </h1>
          <button className='flex gap-10 items-center px-10 py-4 mt-8 bg-zinc-900 rounded-full text-white transition-transform duration-500 hover:scale-110'>
            READ MORE
            <div className='w-2 h-2 bg-zinc-100 rounded-full transition-transform duration-500 hover:rotate-180'></div>
          </button>
        </div>
        <div className='w-1/2 h-[70vh] rounded-3xl bg-[#b0c859] overflow-hidden transition-transform duration-500 hover:scale-110'>
          <img
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="Image Description"
          />
        </div>
      </div>
    </div>
  );
}

export default About;