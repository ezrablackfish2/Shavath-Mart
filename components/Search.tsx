import Button from "./Button";
import styles from "./Header.module.css";
import Link from "next/link";

interface Props {
	search: string;
	setSearch: () => void;
}
export default function Search( {search, setSearch}: Props ) {
	function handleSearch(event) {
		setSearch(event.target.value);
	};
    return (
        <div className={styles.Search}>
            <input className={styles.searchbar} type="text" placeholder="Search" onChange={handleSearch}/>
	{console.log(search)}
		<span className={styles.searchbuttonlink}>
            <Button className={styles.searchbutton} text="Search" image="/search.png" imageclass={styles.searchimage} width="" bgColor=""/>
		</span>
<Link className={styles.searchlink} href="/search">
            <Button className={styles.searchbutton} text="Search" image="/search.png" imageclass={styles.searchimage} width="" bgColor=""/>
		</Link>
        </div>
    )
}
