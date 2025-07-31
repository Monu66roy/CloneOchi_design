import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <div className='w-full p-15 bg-[#CDEA68] b rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-[3.6vw] w-[90%] leading-[4.5vw] tracking-tight'>
          Ochi is a strategic presentation agency for forward-thinking businesses that need to <u>raise funds,</u> <u>sell products,</u> <u>explain complex ideas,</u> and <u>hire great people</u>.
        </h1>
      </div>

      <div className='w-full h-[60vh] p-15 text-black bg-[#CDEA68] border-t-[1px] border-[#adc74e] border-b-[1px] justify-between flex '>
        <p>What you cam expect:</p>

        <div className='w-[20%] flex flex-col gap-20 ml-110 relative'>
          <p>
            We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
          </p>
        </div>

        {/* fixed: divn -> div */}
        <div className="flex flex-col mr-40 mt-35 text-[18px]">
          <p>S:</p>
          {["Instagram","Behance","Facebook","Linkedin"].map((item,index)=>(
            <a key={index} href="#">{item}</a>
          ))}
        </div>
      </div>

      <div className=' gap-5 flex px-15 w-full h-[80vh] bg-[#CDEA68]  border-[#d8f865] border-t-[1px]'>
        <div className='w-1/2'>
          <h1 className='text-black text-[3.8vw] mt-[1vw]'>Our Approach:</h1>

          {/* Animated Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className='cursor-pointer gap-5 justify-center items-center flex mt-5 px-8 py-4 bg-zinc-900 rounded-full text-white'
            style={{ willChange: 'transform' }}
          >
            <span>Read More</span>
            <motion.div
              className='w-4 h-4 bg-white rounded-full'
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              style={{ willChange: 'transform' }}
            />
          </motion.button>
        </div>

        {/* Animated Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
          className=' overflow-hidden rounded-[0.5vw] mt-[1.2vw] w-1/2 h-[70vh] '
          style={{ willChange: 'transform' }}
        >
          <motion.img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            style={{ willChange: 'transform' }}
          />
        </motion.div>
      </div>
    </>
  )
}

export default About
