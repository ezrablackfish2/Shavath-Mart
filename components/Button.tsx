export default function Button(props){
    return (
        <button className={props.className} style={{backgroundColor: props.bgColor, width: props.width}}>
	<img src={props.image} className={props.imageclass} />
        </button>
    )
}
