import Button from "./Button";
import styles from "./Header.module.css";

export default function SearchProduct() {
    return (
        <div className={styles.Search}>
            <input className={styles.searchbar} type="text" placeholder="Search Products"/>
	<a className={styles.searchbuttonlink}>
            <Button className={styles.searchbutton} text="Search" image="/search.png" imageclass={styles.searchimage} width="" bgColor=""/>
	</a>
        </div>
    )
}
