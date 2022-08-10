import React, {useEffect, useState,  useRef} from 'react'
import './Cursor.css'

function Cursor({isMousein}) {
  const [isTouchScreen, setIsTouchScreen] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const cursor = useRef()
  const cursorPoint = useRef()
  const mobileCursor = useRef()

  useEffect(() => {
    
    let scrollHeight = window.scrollY
    let cursorY = 0

    window.addEventListener('touchstart', ()=>{
      setIsTouchScreen(true)
      setIsTouch(true)
    })
    window.addEventListener('touchend', ()=>{
      setIsTouch(false)
    })
    window.addEventListener('mousemove',()=>{
      setIsTouchScreen(false)
    })
    
    function funMousemove (e) {
      cursorY = e.clientY
      cursor.current.style.top = e.pageY + 'px'
      cursor.current.style.left = e.clientX + 'px'
      cursorPoint.current.style.top = e.pageY + 'px'
      cursorPoint.current.style.left = e.clientX + 'px'
    }
    function funOnScroll(){
      scrollHeight = window.scrollY;
      cursor.current.style.top = cursorY + scrollHeight+ 'px'
      cursorPoint.current.style.top = cursorY + scrollHeight+'px'
    }

    function funTouchmove(e){
      mobileCursor.current.style.top = e.touches[0].pageY + 'px'
      mobileCursor.current.style.left = e.touches[0].clientX + 'px'
    }
    function funTouchstart(e){
      mobileCursor.current.style.top = e.touches[0].pageY + 'px'
      mobileCursor.current.style.left = e.touches[0].clientX + 'px'
    }

    // for touch devices
    window.addEventListener('touchstart', funTouchstart)
    window.addEventListener('touchmove', funTouchmove)

    
    if(!isTouchScreen){
      // for no touch devices
      window.addEventListener("mousemove", funMousemove)
      window.addEventListener("scroll", funOnScroll);

      // cursor animation on link hover 
      if(isMousein){
        cursor.current.classList.add('link-grow')
        cursorPoint.current.classList.add('cp-toggle')
      } else{
        cursor.current.classList.remove('link-grow')
        cursorPoint.current.classList.remove('cp-toggle')
      }
    }
    return(() => {
      window.removeEventListener("mousemove", funMousemove)
      window.removeEventListener("scroll", funOnScroll)
      window.removeEventListener('touchstart', funTouchstart)
      window.removeEventListener('touchmove', funTouchmove)
    })
  }, [isTouchScreen, isMousein])
  
  // Render cursor acc. to device
  if (isTouchScreen){
    if(isTouch){
      return(
        <>
          <div ref={mobileCursor} className="mobileCursor"></div>
        </>
      )
    }
  } else{
    return(
      <>
        <div ref={cursor} className="cursor"></div>
        <div ref={cursorPoint} className="cursor-point"></div>
      </>
    )
  }
}


export default Cursor