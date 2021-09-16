import './TheTitle';
import '../css/TheTitle.css';
function TheTitle(props) {
  return <h1 className="title">{props.label}</h1>

}

export default TheTitle;
