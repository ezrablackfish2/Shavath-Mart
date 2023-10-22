import Product from "./Product"
import styles from "./Products.module.css";

interface Product {
	id: number;
	name: string;
	price: string;
	color: string;
	image: string;
}
type ProductsProp = {
	data : Product[];
}

export default function Products(props: ProductsProp) {
    return (
        <div className={styles.product}>
            {
                props.data.map((product) => (
                    <Product key={product.id} product={product}/>
                ))
            }
        </div>
    )
}
