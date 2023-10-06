import Image from "next/image";
import Search from "./Search";
import social_handles from '../utils/socila_handles.json'
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header(){
    return (
        <>
            <div className={styles.header}>
	<div className={styles.headerphone}>
	<Link href="">
	<img className={styles.headerphoneimage} src={"/phone.png"} />
	7944
	</Link>
	</div>
	<div className={styles.headergmail}>
	<Link href="">
	<img className={styles.headergmailimage} src={"/gmail.png"} />
	example@gmail.com
	</Link>
	</div>
                {social_handles.map(({icon, link})=> (
                    <div className={styles.headeritems}>
                        <Link className={styles.headerlink} href={link}><img className={styles.headerimages} src={icon} /></Link>
                    </div>

                ))}
            </div>
            <div className={styles.navigationbar}>
		<Link href="">
                <img className={styles.logo} src="/logo.jpg"  />
		</Link>
                <Search />
            </div>
        </>
    )
}
