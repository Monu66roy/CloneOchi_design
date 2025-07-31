import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Landing = () => {
    
  return (
    <div data-scroll-section data-scroll data-scroll-speed={-.3} className='bg-zinc-900 w-full h-screen border-t-1'>
        <div className='textstructure mt-30 px-20 '>
            {["We create","eye-opening","presentations"].map((item,index)=>{
                return (
                <div key={index} className="marker overflow-hidden">
                    <div className='w-fit flex items-center'>
                    {index === 1 && (
                        <motion.div initial={{width:0}} animate={{width:"7.8vw"}} transition={{ease:[0.76,0,0.24,1],duration:1.5}} className='rounded-md mr-[0.7vw] w-[7.8vw] h-[4.7vw] bg-[#CDEA68] top-1 relative'>
                            <img className='w-full object-cover h-full' src="https://mir-s3-cdn-cf.behance.net/user/276/d6cf91925253957.628fe2ddd3b7a.png" alt="" />    
                         </motion.div>)}
                        <h1 className="uppercase leading-[6.1vw] tracking-tight font-medium text-[6.5vw] font-['Founders Grotesk X-Condensed']">{item}</h1>
                    </div>
                </div>
                )
            })}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-45 flex justify-between items-center py-5 px-20'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=> <p className='text-me font-light tracking-tight leading-none' key= {index}>{item}</p>)}
            <div className='start flex justify-center items-center gap-2' >
                <div className='px-5 py-2 border-[1px] border-zinc-500 rounded-full text-[15px]'>
                    <p className='uppercase font-light text-sm'>start the project</p>
                </div>
                <div className='w-9 h-9 text-2xl rounded-full border-[1px] border-zinc-500 flex justify-center items-center text-md'>
                    <MdArrowOutward />
                </div>
            </div>
        </div>
    </div>
  )
}
export default Landing
