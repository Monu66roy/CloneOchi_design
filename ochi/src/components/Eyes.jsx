import React, { useEffect, useRef, useState } from 'react'

const Eyes = () => {
  const [rotL, setRotL] = useState(0)
  const [rotR, setRotR] = useState(0)
  const [offL, setOffL] = useState({ x: 0, y: 0, px: 0, py: 0 })
  const [offR, setOffR] = useState({ x: 0, y: 0, px: 0, py: 0 })

  const leftEyeRef = useRef(null)
  const rightEyeRef = useRef(null)
  const leftIrisRef = useRef(null)
  const rightIrisRef = useRef(null)

  useEffect(() => {
    const clampVecToRadius = (x, y, maxR) => {
      const len = Math.hypot(x, y)
      if (len === 0 || len <= maxR) return { x, y }
      const s = maxR / len
      return { x: x * s, y: y * s }
    }

    const calcForEye = (eyeEl, irisEl, mouseX, mouseY) => {
      const eyeRect = eyeEl.getBoundingClientRect()
      const irisRect = irisEl.getBoundingClientRect()

      const eyeCx = eyeRect.left + eyeRect.width / 2
      const eyeCy = eyeRect.top + eyeRect.height / 2

      const dx = mouseX - eyeCx
      const dy = mouseY - eyeCy
      const ang = Math.atan2(dy, dx)
      const angDeg = (ang * 180) / Math.PI

      const eyeR = eyeRect.width / 2
      const irisR = irisRect.width / 2
      const pupilSizePx = 32
      const pupilR = pupilSizePx / 2

      const hardIrisMax = Math.max(0, eyeR - irisR - 2)

      const softIrisMax = eyeR * 0.08
      const irisMax = Math.min(hardIrisMax, softIrisMax)

      const irisDesired = clampVecToRadius(Math.cos(ang) * irisMax, Math.sin(ang) * irisMax, irisMax)

      const pupilMax = Math.max(0, irisR - pupilR - 2)

      const pupilSoft = irisR * 0.35
      const pupilClamp = Math.min(pupilMax, pupilSoft)
      const pupilDesired = clampVecToRadius(Math.cos(ang) * pupilClamp, Math.sin(ang) * pupilClamp, pupilClamp)

      return { angDeg, irisDesired, pupilDesired }
    }

    let rafId = null
    const onMove = (e) => {
      const mx = e.clientX
      const my = e.clientY
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        if (leftEyeRef.current && leftIrisRef.current) {
          const { angDeg, irisDesired, pupilDesired } = calcForEye(leftEyeRef.current, leftIrisRef.current, mx, my)
          setRotL(angDeg - 180)
          setOffL({ x: irisDesired.x, y: irisDesired.y, px: pupilDesired.x, py: pupilDesired.y })
        }
        if (rightEyeRef.current && rightIrisRef.current) {
          const { angDeg, irisDesired, pupilDesired } = calcForEye(rightEyeRef.current, rightIrisRef.current, mx, my)
          setRotR(angDeg - 180)
          setOffR({ x: irisDesired.x, y: irisDesired.y, px: pupilDesired.x, py: pupilDesired.y })
        }
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div
        data-scroll-section
        data-scroll
        data-scroll-speed={-.7}
        className='relative bg-cover bg-center w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'
      >
        <div className='flex gap-10 items-center justify-center absolute top-1/2 -translate-x-[50%] -translate-y-[50%] left-1/2'>
          <div
            ref={leftEyeRef}
            className='relative flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white overflow-hidden'
          >
            <span className='pointer-events-none absolute inset-0 flex items-center justify-center text-2xl z-10 text-black select-none'>
              Play
            </span>

            <div
              ref={leftIrisRef}
              className='absolute w-2/3 h-2/3 rounded-full flex items-center justify-center bg-black overflow-hidden transition-transform duration-120 ease-out will-change-transform z-0'
              style={{ transform: `translate(${offL.x}px, ${offL.y}px)` }}
            >
              <div
                className='relative transition-transform duration-120 ease-out will-change-transform'
                style={{
                  transform: `translate(${offL.px}px, ${offL.py}px) rotate(${rotL}deg)`,
                  transformOrigin: 'center center',
                }}
              >
                <div className='w-8 h-8 bg-white rounded-full shadow-sm'></div>
              </div>
            </div>
          </div>

          <div
            ref={rightEyeRef}
            className='relative flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white overflow-hidden'
          >
            <span className='pointer-events-none absolute inset-0 flex items-center justify-center text-2xl z-100 text-black select-none'>
              Play
            </span>

            <div
              ref={rightIrisRef}
              className='absolute w-2/3 h-2/3 rounded-full flex items-center justify-center bg-black overflow-hidden transition-transform duration-120 ease-out will-change-transform z-0'
              style={{ transform: `translate(${offR.x}px, ${offR.y}px)` }}
            >
              <div
                className='relative transition-transform duration-120 ease-out will-change-transform'
                style={{
                  transform: `translate(${offR.px}px, ${offR.py}px) rotate(${rotR}deg)`,
                  transformOrigin: 'center center',
                }}
              >
                <div className='w-8 h-8 bg-white rounded-full shadow-sm'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes
