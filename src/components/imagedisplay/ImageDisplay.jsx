import "./ImageDisplay.css"
function ImageDisplay(props) {
    const showBag = (
        <div className  id="bag">
            <img src="./bag.png" alt="bag"/>
        </div>
    )
    const showDestroyed = (
        <div className  id="bag">
            <img src="./bag-burst.png" alt="destroyed bag" />
        </div>
    )
    const shown = (
        props.show ? showBag : showDestroyed
    )
    return(
        shown
    )

} 

export default ImageDisplay
