import "./ImageDisplay.css"
function ImageDisplay(props) {
    return(
        <div className={props.show} id="bag">
            <img src="./bag-burst.png" alt="destroyed bag" />
            <img src="./bag.png" alt="bag"/>
        </div>
    )

} 

export default ImageDisplay
