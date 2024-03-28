import { Link } from "react-scroll"

import "./style.scss"

import { motion } from 'framer-motion'
import HamburgerButtonNav from "../HamburgerButtonNav/HamburgerButtonNav.tsx";




const links = [
    "Home",
    "About",
    "Works",
]

const NavBar = () => {
    return (
        <div className="nav-container">

            <motion.div
                initial={{
                    y: -150
                }}
                animate={{
                    y: 0
                }}

                transition={{
                    ease: "easeOut",
                    duration: .4
                }}
                className="nav-bar">
                <div className="group-links">
                    {
                        links.map((e, index) => {
                            return (
                                <Link activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    to={e} className="link" key={index}>
                                    {e}
                                </Link>
                            )
                        })
                    }
                </div>
                <Link
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    to="Contact" className="btn hire-btn">
                    Hire me
                </Link>
            </motion.div>

            <HamburgerButtonNav links={links}/>

        </div>
    )
}

export default NavBar
