import Product from "./Product"
import styles from "./Products.module.css";

interface Product {
	_id: string;
	name: string;
	price: string;
	color: string;
	img: string;
}
type ProductsProp = {
	data : Product[];
	search: any;
}

export default function Products(props: ProductsProp) {
    return (
        <div className={styles.product}>
            {
                props.data
			.filter((product) => {
			return props.search.toLowerCase() === ""
			? product
			: product.name.toLowerCase().includes(props.search);
		})
			.map((product) => (
                    <Product key={product._id} product={product}/>
                ))
            }
        </div>
    )
}
