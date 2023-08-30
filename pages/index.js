import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSpring, animated as a } from 'react-spring'
import Head from 'next/head'


const StyledGame = styled.div`
    .quest {
        margin-bottom: 0px;
        margin-top: 70px;
        text-align: center;
        color: #595758;
            }
    .score {
            display: flex;
            margin: 0;
            flex-direction: row;
            text-align: center;
            .current{
                flex: 1;
            }
            .best{
                flex: 1;
                text-align: center
            }
        }
    .card{
        flex : 2
    }
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 320px;
    margin: 0 auto;
    `


function Card() {

    const profiles = [
        {
            name: 'Haerin',
            photo: [
                'https://kprofiles.com/wp-content/uploads/2022/07/E07DA562-7178-455D-A3A7-73E764B80405-515x800.jpeg',
                'https://homecookedtheory.com/wp-content/uploads/2023/08/Haerin-New-Jeans.jpg',
                'https://en.kepoper.com/wp-content/uploads/2022/08/newjeans-haerin-profile.jpg',
                'https://kpopsingers.com/wp-content/uploads/2023/06/Haerin-1-600x600.webp'
            ],
            id: 1
        },
        {
            name: 'Minji',
            photo: [
                'https://kpopping.com/documents/9f/3/800/220812-MINJI-NEW-JEANS-documents-1.jpeg',
                'https://pbs.twimg.com/media/De0nfCIXkAA79p-?format=jpg&name=medium',
                'https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/e35/130577671_188620226267781_1516117882362091309_n.jpg?tp=1\u0026_nc_ht=instagram.fbdo9-1.fna.fbcdn.net\u0026_nc_cat=109\u0026_nc_ohc=7kpzVRGtQGkAX9QTzCs\u0026oh=fd745281fd52a5cc1472d1868e4a8d0a\u0026oe=606D0890'
            ],
            id: 2
        },
        {
            name: 'Hanni',
            photo: [
                'https://media.kbizoom.com/media/2022/08/09133619/hanni-newjeans-18082022-6.jpeg',
            ],
            id: 3
        },
        {
            name: 'Danielle',
            photo: [
                'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2023/01/14/2445820495.png'
            ],
            id: 4
        }

    ]
    const [randomize, setRandomize] = useState(false)
    const [sprofiles, setSprofiles] = useState([])
    const [score, setScore] = useState(0)
    const [flipped, set] = useState(false)
    const [randomItem, setRandomItem] = useState({})
    const [bestScore, setBestScore] = useState(0)


    useEffect(() => {
        const sprofiles = profiles
            .map((a) => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value)

        const randomItem = profiles[Math.floor(Math.random() * profiles.length)];

        setSprofiles(sprofiles)
        setRandomItem(randomItem)
        score >= bestScore ? setBestScore(() => score) : setBestScore(a => a)

    }, [randomize])

    useEffect(() => {
        score >= bestScore ? setBestScore(() => score) : setBestScore(a => a)

    }, [score])





    console.log(sprofiles)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
        <StyledGame>
            <Head>
                <title>Lovelyza &#x1F970; </title>
            </Head>
            <h2 className="quest"> Which one is {randomItem.name}?</h2>
            <div className="card">
                {sprofiles.map((member, index) =>
                    <StyledCard
                        key={index} top={index <= 1 ? '50px' : '220px'}
                        right={index % 2 != 0 ? '160px' : '20px'}
                        photo={member.photo[Math.floor(Math.random() * member.photo.length)]}
                        onClick={() => {

                            member.name == randomItem.name ? setScore(score => score + 100) : setScore(score => score - 50),
                                set(state => !state),
                                setTimeout(() => { set(state => !state), setRandomize(randomize => !randomize) }, 1500)
                        }} >
                        <a.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
                        <a.div className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
                    </StyledCard>
                )}

            </div>
            <div className="score">
                <p className="current">score<br />{score}</p>
                <p className="best">best<br />{bestScore}</p>
            </div>
        </StyledGame>
    )
}

const StyledCard = styled.div`
    position: relative;
        
    
      .c {
        position: absolute;
        top: ${props => props.top};
        right: ${props => props.right};
        border: solid;
        border-color: #f1f2f6;
        border-width: 10px;
        box-sizing: border-box;
        max-width: 130px;
        max-height: 150px;
        width: 250px;
        height: 250px;
        cursor: pointer;
        will-change: transform, opacity;
        border-radius: 10px;
      }

        .front,
        .back,
        .top {
          background-size: cover;
        }

        .back {
          background-image: url('https://i.pinimg.com/originals/3a/1b/6d/3a1b6da5adaf9371d8b7e56b30d4fef3.png');
          background-position: 50% 50%;
          
        }
        
        .front {
          background-image: url(${props => props.photo});
          
          
        }

        .top{
            background-image: url(${props => props.photo});
        }
  `
export default Card


