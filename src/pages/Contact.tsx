
import { motion } from 'framer-motion'


import FormField from "../components/FormField/FormField"
import TitlePage from "../components/TitlePage/TitlePage"


import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <Element name='Contact' className="contact">
      <TitlePage title="Contact" />

      <div className="group-form">



        <div className="head-form">


          <FormField type="text" placeholder="Enter your name" />


          <FormField type="text" placeholder="Enter your E-mail" />


          <div className="btn hire-btn">
            Send it
          </div>


        </div>


        <FormField type="textarea" placeholder="Say somthing !!" />

      </div>


      <div className="body-contact">
        <p className="header-description">Other way to contact</p>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="group-icon">
          <motion.div
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
            }}
          >
            <a href="https://linkedin.com/in/mohammed-mahi-96954828b/" target='_blank'>
              <FaLinkedin />
            </a>
          </motion.div >


          <motion.div
            variants={{
              offscreen: {
                y: 300
              },
              onscreen: {
                y: 0,
                transition: {
                  ease: "easeOut",
                  duration: 0.4,
                  delay: .3
                }
              }
            }}
          >
            <a href="https://www.instagram.com/_mahi_mohamed/" target='_blank'>
              <AiFillInstagram />
            </a>
          </motion.div >


          <motion.div
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
            }}
          >
            <a href="https://wa.me/+212649869896" target='_blank'>
              <IoLogoWhatsapp />
            </a>
          </motion.div >


          <motion.div
            variants={{
              offscreen: {
                y: 300
              },
              onscreen: {
                y: 0,
                transition: {
                  ease: "easeOut",
                  duration: 0.4,
                  delay: .5
                }
              }
            }}
          >
            <a href="https://twitter.com/MohammedMahi012" target='_blank'>
              <FaXTwitter />
            </a>
          </motion.div >
        </motion.div>
      </div>

    </Element>
  )
}

export default Contact
