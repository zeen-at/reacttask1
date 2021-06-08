const styleObject = {
    backgroundColor: "black",
    color: "lime",
    margin: "40px",
    padding: "15px 25px"

}




const Button = (props) => {
    return(
        <div>
            <button type="submit" style= {styleObject} onClick={props.clickHandler}>{props.children}</button>

        </div>
    );
}


export default Button;