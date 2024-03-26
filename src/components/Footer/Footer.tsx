import './style.scss'
import { motion } from 'framer-motion'


const currentYear: number = new Date().getFullYear()

const Footer = ({ developer, copyright }: { developer: string, copyright: number }) => {
    return (
        <div className="footer">
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                className='developer'>
                <motion.div
                    variants={{
                        offscreen: {
                            y: 100
                        },
                        onscreen: {
                            y: 0,
                            transition: {
                                ease: "easeOut",
                                duration: 0.8,
                                delay: .2
                            }
                        }
                    }}
                >
                    Developed and Designed By : {developer}
                </motion.div>
            </motion.div>



            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                className='copyright'>
                <motion.div
                    variants={{
                        offscreen: {
                            y: 100
                        },
                        onscreen: {
                            y: 0,
                            transition: {
                                ease: "easeOut",
                                duration: 0.8,
                                delay: .4
                            }
                        }
                    }}
                >
                    Copyright {copyright} - {currentYear}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Footer
