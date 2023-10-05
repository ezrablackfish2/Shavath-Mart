export default function Button(props){
    return (
        <button className={props.className} style={{backgroundColor: props.bgColor, width: props.width}}>
            <p>{props.text}</p>
        </button>
    )
}
