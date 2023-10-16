import Button from "./Button";
import styles from "./Header.module.css";

export default function Search() {
    return (
        <div className={styles.Search}>
            <input className={styles.searchbar} type="text" placeholder="Search"/>
		<a className={styles.searchbuttonlink}>
            <Button className={styles.searchbutton} text="Search" image="/search.png" imageclass={styles.searchimage} width="" bgColor=""/>
		</a>
<a className={styles.searchlink} href="/search">
            <Button className={styles.searchbutton} text="Search" image="/search.png" imageclass={styles.searchimage} width="" bgColor=""/>
		</a>
        </div>
    )
}
