import Image from "next/image";
import "./Hero.css";

export default function Hero() {
    return (
	<div className="titlephoto">
        <div data-text="ShavathMart" className="herotitle">
	ShavathMart
            <img
		alt="this is the main photo"
		className="hero"	
		src="/hero.jpg"/>
        </div>
	</div>
    )
}
