import React from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';
import { motion } from 'framer-motion';

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-52 px-4 md:px-20'>
        {["WE CREATE", "EYE OPENING", "PRESENTATION"].map((item, index) => (
          <motion.div
            className='masker'
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <div className='w-fit flex items-end overflow-hidden'>
              <motion.h1
                className="uppercase text-4xl md:text-7xl leading-tight md:leading-[5vw] tracking-tighter font-['Founders_Grotesk'] font-bold"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                {item}
              </motion.h1>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="border-t-[1px] border-zinc-800 mt-20 flex flex-col md:flex-row justify-between items-center py-5 px-4 md:px-20"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <motion.p
            key={index}
            className="text-sm md:text-md font-light tracking-tight leading-none mb-4 md:mb-0"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 + 1.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            {item}
          </motion.p>
        ))}
        <motion.div
          className="start flex items-center gap-5"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.div
            className="px-5 py-2 border-[1px] border-zinc-300 font-light text-sm md:text-md uppercase rounded-full"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            transition={{ duration: 0.3 }}
          >
            start the project
          </motion.div>
          <motion.div
            className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full"
            whileHover={{ rotate: 90, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="rotate-[25deg]">
              <FaArrowUpLong />
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default LandingPage;
