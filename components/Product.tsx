import Image from "next/image";
import styles from "./Products.module.css";

export default function Product(props) {
    return (
        <div
            className={styles.products}>
            <img className={styles.productimage} src={props.product.image}/>
            <p className={styles.productname}>{props.product.name}</p>
            <p className={styles.productprice}>{props.product.price}</p>
            <p className={styles.productcolor}>{props.product.color}</p>
        </div>
    )
}
