import Button from "./Button";
import styles from "./Searcher.module.css";

export default function Search() {
    return (
        <div className={styles.Search}>
            <input className={styles.searchbar} type="text" placeholder="Search"/>
            <Button className={styles.searchbutton} text="Search" image="/search.png" imageclass={styles.searchimage}/>
        </div>
    )
}
