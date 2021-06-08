import ImageProps from "./imageprops.jsx";
import Button from "./buttoncomponent.jsx";


const ImageComponent = (props) => {
    
    return (
        <div>
            <img src={props.source} alt="an-image" />
            
        </div>

    );

}

export default ImageComponent;