import ImageComponent from "./imagecomponent.jsx";
import {useState} from "react";



    const ImageProps = () => {
    
            const [change, sizeChange] = useState(0);
        
            const increment = () => {
                sizeChange(change +20);
            }
            const decrement = () => {
                sizeChange(change -20);
            }
        
        
            return (
                <div>
                    <ImageComponent source = {"images/car.jpg"} width="50%" height="50%"/>

                    <p> {change} </p>
                    <Button clickHandler={increment}>Increment</Button>
                    <Button clickHandler={decrement}>Decrement</Button>
                </div>
            );
        
    }
    






export default ImageProps;