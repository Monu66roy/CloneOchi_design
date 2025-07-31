import { motion } from "motion/react";
import React from 'react';

const Marque = () => {
  return (
    <div data-scroll-section data-scroll data-scroll-speed={.1} className=' w-full py-10 bg-[#004D43] whitespace-nowrap overflow-hidden rounded-tl-3xl rounded-tr-3xl'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[17vw] uppercase leading-none font-["Founders_Grotesk"] pt-[4vw] -mb-[3vw] font-semibold'>We are Ochi </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[17vw] uppercase leading-none font-["Founders_Grotesk"] pt-[4vw] -mb-[3vw] font-semibold'>We are Ochi </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[17vw] uppercase leading-none font-["Founders_Grotesk"] pt-[4vw] -mb-[3vw] font-semibold'>We are Ochi </motion.h1>
        </div> 
    </div>
   )
}

export default Marque