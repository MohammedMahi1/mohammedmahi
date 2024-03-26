import './style.scss'


import { Variants, motion } from 'framer-motion'

import { MediaPlayer, MediaProvider } from '@vidstack/react';

const VideoWork = ({ isOpened,vidSrc }: {vidSrc:string, isOpened: boolean }) => {

  const variants: Variants =  {

    whileOpened: {
      opacity: 1,
      y: 0,
    },

    whileClose: {
      y: -999,
      opacity: 0,
    }
    
  }


  return (
    <motion.div
      variants={variants}
      initial={{
        y: 900,
        opacity: 0,
      }}
      animate={
        isOpened ? "whileOpened" : "whileClose"
      }
      transition={{
        duration: .7,
        ease: "easeOut",
      }}
      className='video-container'
      >
      <MediaPlayer className='media-player' src={vidSrc} 
      autoPlay={true} 
      paused={!isOpened}
     controls={false} load='visible' loop muted preload='metadata' viewType='video'>
        <MediaProvider />
      </MediaPlayer>
    </motion.div>
  )
}

export default VideoWork
