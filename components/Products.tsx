import Product from "./Product"
import styles from "./Products.module.css";

export default function Products(props) {
    return (
        <div className={styles.product}>
            {
                props.data.map((product) => (
                    <Product product={product}/>
                ))
            }
        </div>
    )
}
