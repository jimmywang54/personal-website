import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './CardStyles.css'

const slides = [
  { id: 0, url: process.env.PUBLIC_URL + '/images/IMG_1.jpg' },
  { id: 1, url: process.env.PUBLIC_URL + '/images/IMG_2.jpg' },
  { id: 2, url: process.env.PUBLIC_URL + '/images/IMG_3.jpg' },
  { id: 3, url: process.env.PUBLIC_URL + '/images/IMG_4.jpg' },
  { id: 4, url: process.env.PUBLIC_URL + '/images/IMG_5.jpg' },
  { id: 5, url: process.env.PUBLIC_URL + '/images/IMG_6.jpg' },
]

const Card = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % slides.length), 5000), [])
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="cards-place"
    //   style={{ ...props, backgroundImage: `url(${item.url})` }}
     style={{ ...props, backgroundImage: `url(${item.url})` }}
    />
  ))
}

export default Card;
