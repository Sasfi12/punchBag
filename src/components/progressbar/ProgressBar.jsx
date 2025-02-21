import "./ProgressBar.css"
function ProgressBar(props) {
    return(
        <div className="progress-bar">
            <div className="health-bar green" style={{width : `${props.width}px`, display : `${props.width == 0 ? "none" : "flex"}`, backgroundColor : `${props.width <= 300 ? "red" : ""}` }  }> </div>
            <p style={{display : `${props.width == 0 ? "none" : "flex"}` }}>{props.health}</p>
        </div>
    )
    
}
export default ProgressBar