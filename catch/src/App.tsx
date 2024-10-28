import { animated, useSpring } from '@react-spring/web'
import { useState } from 'react'

import "./alert.css";

function Test() {
  const [springs, api] = useSpring(() => ({
      from: { x: 0, y: 0},
      config: { mass: 10, tension: 300, friction: 40 },
      
  }))
  const [count, setCount] = useState(0);
  const [slow, setSlow] = useState([0, 0]);
  const [fast, setFast] = useState([0, 0]);

  const handleClick = () => {
      setFast([Math.round(Math.random() * 1000), Math.round(Math.random() * 800)])

      api.start({
        from: {
          x: slow[0],
          y: slow[1],
        },
        to: {
          x: fast[0],
          y: fast[1],
        },
      })

      setSlow(fast)
      setCount(count + 1);
      return;
  }

  return (
      <>
          <h1>{count}</h1>
          <animated.div
              onClick={handleClick}
              style={{
              width: 80,
              height: 80,
              background: '#ff6d6d',
              borderRadius: 8,
              ...springs,
              }}>
          </animated.div>
      </>
  )
}

export default Test;