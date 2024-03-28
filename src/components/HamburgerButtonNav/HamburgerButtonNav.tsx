import './style.scss'

import {Cross as Hamburger} from 'hamburger-react'

import {useState} from "react";

import {motion} from 'framer-motion'
import {Link} from "react-scroll";

const HamburgerButtonNav = ({links}:{links: Array<string>}) => {
    const [handlerNav, setHandlerNav] = useState(false)

    const variant = {
        isClose: {
            borderRadius: "50px",
            margin: "10px 20px",
            padding: 0,
            width:68,
            height:68,
        }
        , isOpen: {
            width: "60vw",
            height: "100vh",
            borderRadius: 0,
            margin: 0,
            padding: "10px 20px"
        }
    }

    return (

        <motion.div
            initial={{
                width:68,
                height:68,
                margin: "10px 20px",
                borderRadius: "50%",
            }}
            variants={variant}
            animate={
                handlerNav ? "isOpen" : "isClose"
            }
            transition={{
                ease: "linear",

            }}
            className="hamburger-nav-container"
        >
            <div className="hamburger-icon" onClick={() => {
                setHandlerNav(!handlerNav)
            }}>
                <Hamburger direction="right"/>
            </div>

            <div className="group-links-mob">
                {
                    links.map((e:string, index:number) => {
                        return (
                            <Link activeClass="active"
                                  spy={true}
                                  smooth={true}
                                  hashSpy={true}
                                  to={e} className="link-mob" key={index}>
                                {e}
                            </Link>
                        )
                    })
                }
                <Link activeClass="active"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      to="Contact" className="link-mob">
                    Contact
                </Link>
            </div>
        </motion.div>
    )
}
export default HamburgerButtonNav