import React, { useRef, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { Snowflakes, Center, Peeled, Quote, Snowboard, SocialMedia } from './components'


const App = () => {
  const boardRef = useRef()
  const tiltRef = useRef()

  useEffect(() => {
    // componentDidMount
    VanillaTilt.init(boardRef.current, {
      'mouse-event-element': tiltRef.current,
      easing: "cubic-bezier(.13,.98,.52,.09)",
      speed: 1500,
      perspective: 190,
      reverse: true,
    })
  }, [])
  
  return (
    <Snowflakes innerRef={tiltRef}>
      <SocialMedia />
      <Center>
        <Peeled phrase='Alex Cory' color='#1B2735' />
        <Quote>Knowledge is Powder</Quote>
        <Snowboard innerRef={boardRef} />
      </Center>
    </Snowflakes>
  )
}


export default App;
