import { useEffect, useState } from "react";
import { Variants, motion } from 'framer-motion'
import './style.scss'
import { AiOutlinePlus } from "react-icons/ai";

const MouseOption = ({mouseExist}:{mouseExist:any}) => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants: Variants ={
        default: {
            height: 100,
            width: 100,
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
            backgroundColor: "white",
            mixBlendMode: "difference"
        }
    }

    return (
        <motion.div
            className='cursor'
            variants={variants}
            animate="default"
            transition={{
                ease:"backOut",
                duration:0.3,
            }}
            style={mouseExist ? {display:'none',visibility:"hidden"}:{display:"flex"}}
        >
                <AiOutlinePlus/>
        </motion.div>
    )
}

export default MouseOption
