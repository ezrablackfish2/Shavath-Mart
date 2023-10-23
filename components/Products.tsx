import Product from "./Product"
import styles from "./Products.module.css";

interface Product {
	_id: string;
	name: string;
	price: string;
	color: string;
	image: string;
}
type ProductsProp = {
	data : Product[];
	user: any; // Define the specific type for user
	token: any;
}

export default function Products(props: ProductsProp) {
    return (
        <div className={styles.product}>
            {
                props.data.map((product) => (
                    <Product key={product._id} product={product}/>
                ))
            }
        </div>
    )
}
