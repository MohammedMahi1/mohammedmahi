import { MdArrowOutward } from "react-icons/md";
import './style.scss'
const TitlePage = ({title}:{title:string}) => {
  return (
    <div className="title-page">
      <MdArrowOutward className="icon-title"/><p className="title">{title}</p>
    </div>
  )
}

export default TitlePage
