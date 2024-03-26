import TitlePage from "../components/TitlePage/TitlePage"
import WorkRow from "../components/WorkRow/WorkRow"

import { TfiFaceSad } from "react-icons/tfi";

import vid from '../assets/videos/ecommerce/ecommerce.mp4'
import {Element} from "react-scroll"

const datas = [
    {vid:vid , title:"Ecommerce", label:"Web Site"},
    {vid:vid , title:"Stock Gestion", label:"Web Site"},
]
const Works = () => {
    const handleWorks= false

    return (
        <Element name="Works" className="works">

            <div className="container">

                <TitlePage title="Works"/>

            </div>

            {
                handleWorks
                    ?
                    datas.map((e,index)=>{
                        return(
                            <WorkRow vid={e.vid} title={e.title} label={e.label} key={index}/>
                        )
                    })

                    :
                    <div className="closed-work">
                        There are no works yet <TfiFaceSad/>
                    </div>
            }

        </Element>
    )
}

export default Works
