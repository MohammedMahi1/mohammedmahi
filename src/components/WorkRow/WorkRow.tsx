import { Squeeze as Hamburger } from 'hamburger-react'

import './style.scss'
import { useState } from 'react'
import VideoWork from '../VideoWork/VideoWork'






import { Variants, motion } from 'framer-motion'




// import { useEffect, useState } from "react";
const WorkRow = ({ title, label, vid }: {vid:string, title: string, label: string }) => {
  const [isOpen, setOpen] = useState(false)


  const variants: Variants = {
    whileOpened: {
      height: "fit-content"
    },
    whileClose: {
      height: 80
    },
    whileOpenedText: {
      y: 0
    },
    whileCloseText: {
      y: 90
    },
    whileOpenedItem: {
      opacity: 1
    },
    whileCloseItem: {
      opacity: 0
    },
    whileTitleOpen:{
      y:0
    },
    whileTitleClose:{
      y:95
    }
  }


  return (
    <motion.div
      variants={variants}
      animate={
        isOpen ? "whileOpened" : "whileClose"
      }
      initial={{
        height: 80
      }}
      transition={{
        ease:"linear"
      }}
      className="opened-work">



      <div className='group-row' >
        <div className='group-column'>
          <motion.div 
          
          variants={variants}
              animate={isOpen ? "whileTitleOpen" : "whileTitleClose"}
              initial={{y:95}}
              transition={{
                ease: "linear",
                duration: .3,
              }}
          className="title-work"
          onClick={()=>{setOpen(!isOpen)}}
          >
            <p>{title}</p>
          </motion.div>


          <div className="label-work">
            <motion.p
              variants={variants}
              animate={isOpen ? "whileOpenedText" : "whileCloseText"}
              initial={{
                y: 90
              }}
              transition={{
                ease: "easeOut",
                duration: .3,
              }}
            >{label}</motion.p>
          </div>

          <motion.div
            variants={variants}
            animate={isOpen ? "whileOpenedItem" : "whileCloseItem"}
            initial={{
              opacity: 0
            }}
            transition={{
              ease: "easeOut",
              duration: .3,
            }}
            className='btn touch-btn'>Get in touch</motion.div>
        </div>
        <VideoWork vidSrc={vid} isOpened={isOpen} />
      </div>


<div className="icon-work-row">

      <Hamburger color='#ffffff' toggled={isOpen} toggle={setOpen} />
</div>
    </motion.div>
  )
}

export default WorkRow
