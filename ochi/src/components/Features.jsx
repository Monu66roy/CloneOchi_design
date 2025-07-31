import { motion, useAnimate, useAnimation } from 'framer-motion'
import { Power4 } from 'gsap';
import React from 'react';

const Features = () => {
    const cards = [useAnimation(),useAnimation()];

    const hoverhandeler = (index)=>{
        cards[index].start({ y: "0%" });
        cards[1 - index].start({ y: "120%" });
    }

    const handelHoverEnd = (index)=>{
        cards[index].start({ y: "120%" });
    }

  return (
    <div className='w-full py-10' >
        <div className='w-full px-20 border-b-[1px] pb-10 border-zinc-700'>
            <p className='text-6xl font-["Neue_Montreal"] tracking-tight' >Featured Project</p>
        </div>
        <div className="cards w-full flex gap-10 mt-10 px-15">
            <motion.div onHoverStart={()=>{hoverhandeler(0)}} onHoverEnd={()=>handelHoverEnd(0)} className='relative cardContiner w-1/2 h-[80vh]  rounded-sm'>
            <h1 className='left-[50%] flex overflow-hidden -transalte-x-[1/2] top-1/2 -translate-y-1/2 z-40 absolute uppercase font-semibold font-["founders_Grotesk"] text-9xl text-[#CDEA68]'>
            {"Salience Labs".split("").map((item,index)=>{
                return(
                    <motion.span
                      initial={{ y:"120%" }}
                      animate={cards[0]}
                      transition={{ ease:[0.22,1,0.36,1], delay:index*.04 }}
                      style={{ willChange: 'transform' }}
                      key={index}
                      className='inline-block'
                    >
                      {item}
                    </motion.span>
                )
            })}
            </h1>
                <div className='w-full h-full rounded-sm'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
                </div>
            </motion.div>
            <motion.div onHoverStart={()=>{hoverhandeler(1)}} onHoverEnd={()=>handelHoverEnd(1)} className=' relative cardContiner w-1/2 h-[80vh]  rounded-sm'>
            <h1 className=' right-0 flex overflow-hidden transalte-x-[1/2] top-1/2 -translate-y-1/2 z-40 absolute uppercase font-semibold font-["founders_Grotesk"] text-9xl text-[#CDEA68]'>
            {"Cardboard Spaceship".split("").map((item,index)=>{
                return(
                   <motion.span
                     initial={{ y:"120%" }}
                     animate={cards[1]}
                     transition={{ ease:[0.22,1,0.36,1], delay:index*.04 }}
                     style={{ willChange: 'transform' }}
                     key={index}
                     className='inline-block'
                   >
                     {item}
                   </motion.span>
                )
            })}
            </h1>
                <div className='w-full h-full rounded-sm'>
                    <img className='w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Features
