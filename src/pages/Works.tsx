import TitlePage from "../components/TitlePage/TitlePage"
import WorkRow from "../components/WorkRow/WorkRow"


import vid from '../assets/videos/ecommerce/ecommerce.mp4'
import { Element } from "react-scroll"




const Works = () => {
  return (
    <Element name="Works" className="works">
      
      <div  className="container">
      
      <TitlePage title="Works"/>
      
      </div>


      <WorkRow vid={vid} title="Ecommerce" label="Web Site"/>
      <WorkRow vid={vid} title="Stock Gestion" label="Web Site"/>
      <WorkRow vid={vid} title="Ecommerce" label="Web Site"/>
    
    
    </Element>
  )
}

export default Works
