import React, {useState, useEffect} from 'react'
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
            name : 'Jisoo',
            photo: ['https://kpopping.com/documents/3f/0/800/D-3F0VnU8AAjlHF.webp',
                    'https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/e35/148381788_1860614217428671_5958427332731232876_n.jpg?tp=1\u0026_nc_ht=instagram.fbdo9-1.fna.fbcdn.net\u0026_nc_cat=107\u0026_nc_ohc=IW22mukHkPAAX95zs34\u0026oh=ae1728706e03d5e3ccc595c29a819bc8\u0026oe=606A2AAD',
                    'https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/e35/136749754_158846349353298_820950532850000035_n.jpg?tp=1\u0026_nc_ht=instagram.fbdo9-1.fna.fbcdn.net\u0026_nc_cat=106\u0026_nc_ohc=mjTG-iyELqYAX9OAeF8\u0026oh=5a37cfec7ef86cce6c1ffaaeeba72ed1\u0026oe=606C4248',
                    'https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/154427728_177018173960363_8882615868780733975_n.jpg?tp=1&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=YAgtkZ_QWbMAX9rpueF&ccb=7-4&oh=e8259f28e01e46afa97ec2f145252c6e&oe=607DF0D1&_nc_sid=83d603'],
            id: 1
        },
        {
            name : 'Yein',
            photo: ['https://static.asiachan.com/Jung.Yein.600.195523.jpg',
            'https://pbs.twimg.com/media/De0nfCIXkAA79p-?format=jpg&name=medium',
            'https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/e35/130577671_188620226267781_1516117882362091309_n.jpg?tp=1\u0026_nc_ht=instagram.fbdo9-1.fna.fbcdn.net\u0026_nc_cat=109\u0026_nc_ohc=7kpzVRGtQGkAX9QTzCs\u0026oh=fd745281fd52a5cc1472d1868e4a8d0a\u0026oe=606D0890'],
            id: 2
        },
        {
            name : 'Ijaaaque',
            photo: ['https://pbs.twimg.com/media/EuChVxNVgAEvBNj?format=jpg&name=large',
                    'https://pbs.twimg.com/media/Etuc1LpVIAM4-aD?format=jpg&name=large',
                    'https://pbs.twimg.com/media/Etuc1qsVcAAIVvW?format=jpg&name=large',
                    'https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/e35/62524291_338750407019453_1248800803803702121_n.jpg?tp=1\u0026_nc_ht=instagram.fbdo9-1.fna.fbcdn.net\u0026_nc_cat=105\u0026_nc_ohc=06nFDWvZqFMAX_lUrR0\u0026oh=15e5a8b6b43a7cb0c2eb326d8fd37885\u0026oe=606CFC7A',
                    'https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/e35/64901712_1226480184199111_2024631034276859965_n.jpg?tp=1\u0026_nc_ht=instagram.fbdo9-1.fna.fbcdn.net\u0026_nc_cat=107\u0026_nc_ohc=p7nnIbzaHOQAX9KRpRg\u0026oh=94bbe2b4d94263af0166b4489634a0a9\u0026oe=606A6390'],
            id: 3
        },
        {
            name : 'Kei',
            photo: ['https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/e35/133542300_411704050260845_5808128824671248260_n.jpg?tp=1\u0026_nc_ht=instagram.fbdo9-1.fna.fbcdn.net\u0026_nc_cat=105\u0026_nc_ohc=pzqniCJ0Hy4AX_EqNdp\u0026oh=20f1624c9796f8bd47fffacd661034b0\u0026oe=606BA837',
                    'https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/e35/142725705_463459757996633_8951581208422275822_n.jpg?tp=1\u0026_nc_ht=instagram.fbdo9-1.fna.fbcdn.net\u0026_nc_cat=105\u0026_nc_ohc=amn7oFpAW4UAX-kbNCe\u0026oh=d1c0d3a9b71f6813117e3df220a82dc7\u0026oe=606D1B7A',
                    'https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/e35/153732541_431788758039335_181763034737103615_n.jpg?tp=1\u0026_nc_ht=instagram.fbdo9-1.fna.fbcdn.net\u0026_nc_cat=111\u0026_nc_ohc=jcIH0jI7g5AAX8VSHvK\u0026oh=04a041cb88b0886f1b811b20d77304a7\u0026oe=6069B7F1',
                    'https://ncache.ilbe.com/files/attach/new/20200210/4255758/806286519/11232574594/983b8c48af57df54267083e289f33f47_11232574707.jpg'],
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
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)

        const randomItem = profiles[Math.floor(Math.random()*profiles.length)];
        
        setSprofiles(sprofiles)
        setRandomItem(randomItem)
        score >= bestScore ? setBestScore(()=> score) : setBestScore(a=>a)
        
    }, [randomize])

    useEffect(() => {
        score >= bestScore ? setBestScore(()=> score) : setBestScore(a=>a)
        
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
            <h2 className="quest"> Mana si {randomItem.name} hayooo</h2>
            <div className="card">
                {sprofiles.map((member,index) => 
                    <StyledCard
                        key={index} top={index <= 1 ? '50px' : '220px'}
                        right={index % 2 != 0 ? '160px':'20px'}
                        photo={member.photo[Math.floor(Math.random()*member.photo.length)]} 
                        onClick={() => {

                            member.name == randomItem.name ? setScore(score => score+100) : setScore(score => score-50),  
                            set(state => !state),
                            setTimeout(()=> {set(state => !state), setRandomize(randomize => !randomize)},1000)
                            }} >
                        <a.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
                        <a.div className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
                    </StyledCard>    
                )}

            </div>
            <div className="score">
                <p className="current">score<br/>{score}</p>
                <p className="best">best<br/>{bestScore}</p>
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
          background-image: url('https://pbs.twimg.com/media/EMgm8P5U8AAos-Q?format=jpg&name=medium');
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


