import { Player } from '@lottiefiles/react-lottie-player'
import mahi from '../assets/images/img-mahi.png'
import scrollDown from '../assets/json/dMRwEfp4Ke.json'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'

const MyName = "Mohammed Mahi"
const Home = () => {

  return (
    <Element  
    name='Home'
    className='home container'>
      <div className="typographie">

        <div className='child-box'>
          <motion.p
            initial={{
              opacity: 0,
              y: 220
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut"
            }} className="child-1">Hello !</motion.p>
        </div>

        <div className='child-box'>
          <motion.p
            initial={{
              opacity: 0,
              y: 220
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: "easeOut"
            }} className="child-2">I'm</motion.p>
        </div>

        <div className='child-box index-over'>
          <motion.p
            initial={{
              opacity: 0,
              y: 220
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.4,
              duration: 0.5,
              ease: "easeOut"
            }}
            className="child-3">{MyName.toUpperCase()}</motion.p>
        </div>
      </div>
      <div className='img-container'>

        <div className='img-box'>
          <motion.img
            initial={{
              y: 100,
              opacity: 0
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.5,
              ease: "easeOut"
            }}
            src={mahi} alt={MyName} className='img-mahi' />
        </div>
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1,
            ease: "easeOut",
            duration: 1
          }}
          className='icon-scolling-box'>
          <Player
            autoplay
            loop
            src={scrollDown}
            className='icon-scolling'
          />
        </motion.div>
      </div>
    </Element>
  )
}

export default Home
