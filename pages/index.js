import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import styled from 'styled-components'


function Card() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <StyledCard onClick={() => set(state => !state)}>
        <a.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
        <a.div className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
    </StyledCard>
  )
}

const Cards = () =>{
  return(
    <StyledCards>
        <Card/>
        <Card/>
    </StyledCards>
  )
}
  const StyledCards = styled.div`
      display:flex;
      flex-direction: row;
    `

  const StyledCard = styled.div`
    
      .c {
        
        border: solid;
        max-width: 500px;
        max-height: 500px;
        width: 250px;
        height: 250px;
        cursor: pointer;
        will-change: transform, opacity;
      }

        .front,
        .back {
          background-size: cover;
        }

        .back {
          background-image: url(https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop);
        }

        .front {
          background-image: url(https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop);
        }
  `

export default Cards
