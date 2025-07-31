import React from 'react'

const Cards = () => {
  return (
    <div className='group flex px-32 items-center gap-5 w-full h-screen bg-zinc-900 [perspective:1200px] group-hover:[&_.card]:scale-95 group-hover:[&_.card]:brightness-90'>
      <div className='cardcontainer h-[50vh] w-1/2'>
        <div className='card group/card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center overflow-hidden transform-gpu transition-all duration-300 ease-out hover:!scale-105 hover:-translate-y-1 hover:brightness-100 hover:!z-10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]' >
          <span className='pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover/card:translate-x-full' />
          <img className='w-32 transition-transform duration-300 ease-out group-hover/card:scale-110' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button  className='absolute left-7 bottom-7 px-5 py-1 rounded-full border-[2px] text-white/90 border-white/30 backdrop-blur-[1px] transition-all duration-300 ease-out translate-y-3 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100' > &copy;2019-2022 </button>
        </div>
      </div>
      <div className='cardcontainer w-1/2 flex gap-5 h-[50vh]'>
        <div  className='card group/card relative rounded-xl w-1/2 h-full bg-[#00221d] flex items-center justify-center overflow-hidden transform-gpu transition-all duration-300 ease-out hover:!scale-105 hover:-translate-y-1 hover:brightness-100 hover:!z-10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]' >
          <span className='pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover/card:translate-x-full' />
          <img className='w-28 transition-transform duration-300 ease-out group-hover/card:scale-110' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute left-7 bottom-7 px-5 py-1 rounded-full border-[2px] text-white/90 border-white/30 backdrop-blur-[1px] transition-all duration-300 ease-out translate-y-3 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100' > &copy;2019-2022 </button>
        </div>
        <div className='card group/card relative rounded-xl w-1/2 h-full bg-[#00221d] flex items-center justify-center overflow-hidden transform-gpu transition-all duration-300 ease-out hover:!scale-105 hover:-translate-y-1 hover:brightness-100 hover:!z-10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]' >
          <span className='pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover/card:translate-x-full' />
          <img className='w-28 transition-transform duration-300 ease-out group-hover/card:scale-110' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute left-7 bottom-7 px-5 py-1 rounded-full border-[2px] text-white/90 border-white/30 backdrop-blur-[1px] transition-all duration-300 ease-out translate-y-3 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100' > &copy;2019-2022 </button>
        </div>
      </div>
    </div>
  )
}

export default Cards
