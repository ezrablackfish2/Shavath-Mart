import Button from "./Button";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Search() {
    return (
        <div className={styles.Search}>
            <input className={styles.searchbar} type="text" placeholder="Search"/>
		<span className={styles.searchbuttonlink}>
            <Button className={styles.searchbutton} text="Search" image="/search.png" imageclass={styles.searchimage} width="" bgColor=""/>
		</span>
<Link className={styles.searchlink} href="/search">
            <Button className={styles.searchbutton} text="Search" image="/search.png" imageclass={styles.searchimage} width="" bgColor=""/>
		</Link>
        </div>
    )
}
