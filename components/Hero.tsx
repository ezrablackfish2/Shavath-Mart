import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <div>
            <img
		alt="this is the main photo"
		className={styles.hero}	
		src="/hero.jpg"/>
        </div>
    )
}
