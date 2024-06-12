import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  const textVariants = {
    animate: {
      x: [0, -7000],
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 40,
        ease: 'linear',
      },
    },
  };

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full h-[50vh] rounded-tl-3xl rounded-tr-3xl bg-[#004D43] flex justify-center items-center overflow-hidden'>
      <motion.div
        className='text border-t-2 border-b-2 border-zinc-300 flex justify-center items-center gap-10 whitespace-nowrap py-10 px-4'
        variants={textVariants}
        animate='animate'
      >
        <h1 className='text-[15vw] leading-none font-["Founders_Grotesk_X_Cond"] uppercase font-extrabold'>
          We are ochi
        </h1>
        <h1 className='text-[15vw] leading-none font-["Founders_Grotesk_X_Cond"] uppercase font-extrabold'>
          We are ochi
        </h1>
        <h1 className='text-[15vw] leading-none font-["Founders_Grotesk_X_Cond"] uppercase font-extrabold'>
          We are ochi
        </h1>
        <h1 className='text-[15vw] leading-none font-["Founders_Grotesk_X_Cond"] uppercase font-extrabold'>
          We are ochi
        </h1>
        <h1 className='text-[15vw] leading-none font-["Founders_Grotesk_X_Cond"] uppercase font-extrabold'>
          We are ochi
        </h1>
        <h1 className='text-[15vw] leading-none font-["Founders_Grotesk_X_Cond"] uppercase font-extrabold'>
          We are ochi
        </h1>
        <h1 className='text-[15vw] leading-none font-["Founders_Grotesk_X_Cond"] uppercase font-extrabold'>
          We are ochi
        </h1>
      </motion.div>
    </div>
  );
}

export default Marquee;