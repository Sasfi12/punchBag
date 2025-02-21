import "./Boutons.css"
function Boutons(props) {
    return (
        <div className={props.buttonDisplay}>
            <button onClick={props.punch}>Punch</button>
            <button onClick={props.reset}>{props.replayButton}</button>
        </div>
    )
}

export default Boutons  
