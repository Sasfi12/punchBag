import "./ImageDisplay.css"
function ImageDisplay(props) {
        
    return(
        <div className  id="bag">
            {props.show ? <img src="./bag.png" alt="bag"/> : <img src="./bag-burst.png" alt="destroyed bag" />}
        </div>
    )

} 

export default ImageDisplay
