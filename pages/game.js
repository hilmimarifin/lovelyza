import React, {useState} from 'react'
import styled from 'styled-components'
import { useSpring, animated as a } from 'react-spring'

const Game = () => {
    const profiles = [
        {
            name : 'jisoo',
            photo: 'https://kpopping.com/documents/3f/0/800/D-3F0VnU8AAjlHF.webp',
            id: 1
        },
        {
            name : 'yein',
            photo: 'https://static.asiachan.com/Jung.Yein.600.195523.jpg',
            id: 2
        },
        {
            name : 'sujong',
            photo: 'https://static.asiachan.com/Ryu.Sujeong.600.136193.jpg',
            id: 3
        },
        {
            name : 'kei',
            photo: 'https://i.pinimg.com/originals/c1/50/8c/c1508cfa479f8d7c86d5f8376380d58e.jpg',
            id: 4
        }
         
    ]

    const sprofiles = profiles
      .map((a) => ({sort: Math.random(), value: a}))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)



    const randomItem = profiles[Math.floor(Math.random()*profiles.length)];
    console.log(randomItem)
    return (
        <StyledGame>
            <h2>Which one is {randomItem.name}?</h2>
            {sprofiles.map((member,index) => 
                <Card 
                    key={member.id}
                    photo={member.photo}
                    top={index <= 1 ? '100px' : '300px'}
                    right={index % 2 != 0 ? '160px':'20px'}
                />)}
        </StyledGame>
    )
}

const StyledGame = styled.div`
    min-height: 100vh;
    max-width: 320px;
    margin: 0 auto;
    border-style: solid;
    `


function Card({top, right, photo}) {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
      <StyledCard top={top} right={right} photo={photo} onClick={() => set(state => !state)}>
          <a.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
          <a.div className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
      </StyledCard>
    )
  }

  const StyledCard = styled.div`
    position: relative;
    
      .c {
        position: absolute;
        top: ${props => props.top};
        right: ${props => props.right};
        border: solid;
        max-width: 130px;
        max-height: 150px;
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
          background-image: url('https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop');
        }
        
        .front {
          background-image: url(${props => props.photo});
        }
  `
export default Game
