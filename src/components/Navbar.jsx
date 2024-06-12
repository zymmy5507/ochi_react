import React from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <motion.div
      className="fixed z-[999] w-full px-20 py-8 font-['Neue_Montreal'] flex justify-between items-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">
        <motion.svg
          width="72"
          height="30"
          viewBox="0 0 72 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          {/* Example of SVG paths for a simple logo */}
          <path d="M5 5h20v20H5z" fill="#000" />
          <path d="M40 5h20v20H40z" fill="#000" />
        </motion.svg>
      </div>
      <div className="links flex gap-10">
        {["Service", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <motion.a
            key={index}
            className={`text-lg capitalize font-light ${index === 4 && "ml-32"}`}
            whileHover={{
              scale: 1.1,
              textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
              color: '#FF5722', // Change color on hover
            }}
            transition={{ duration: 0.3 }}
          >
            {item}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export default Navbar;
