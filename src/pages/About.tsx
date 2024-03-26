
import TitlePage from "../components/TitlePage/TitlePage"
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from 'framer-motion'
import myCV from '../assets/CV MohammedMahi.pdf'
import { Element } from "react-scroll";
const About = () => {

  return (
    <Element 
    
    name="About"

    style={{
      backgroundColor: "#fff",
    }}
      className="container about">


      <TitlePage title='About' />

      <div className="description" >


        <p className="header-description">A Full Stack Web Developer</p>


        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="paragraphe">

          <motion.li
            variants={{
              offscreen: {
                y: 300
              },
              onscreen: {
                y: 0,
                transition: {
                  ease: "easeOut",
                  duration: 0.4,
                  delay: .2
                }
              }
            }} >
            I specialize in web development using <u>HTML</u>, <u>CSS</u>, and <u>JavaScript</u> or use <u>React JS</u> for responsive front-end interfaces. On the backend I work on <u>PHP</u> for robust server-side applications or use <u>Laravel</u>.
          </motion.li>

        </motion.p>


        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="paragraphe">

          <motion.li
            variants={{
              offscreen: {
                y: 300
              },
              onscreen: {
                y: 0,
                transition: {
                  ease: "easeOut",
                  duration: 0.4,
                  delay: .4
                }
              }
            }}>
            I excel in collaborative teamwork within <u>agile</u> frameworks and have expertise in <u>DevOps</u> practices, including <u>GitLab</u> , for streamlined development workflows. Feel free to reach out for more details or potential collaborations.
          </motion.li>

        </motion.p>

      </div>

      <motion.a
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="btn get-btn"
        variants={{
          offscreen: {
            opacity: 0
          },
          onscreen: {
            opacity: 1,
            transition: {
              ease: "easeOut",
              duration: 0.8,
              delay: .8
            }
          }
        }}
        href={myCV} download
      >Download CV<MdOutlineFileDownload /></motion.a>

    </Element>

  )
}

export default About
