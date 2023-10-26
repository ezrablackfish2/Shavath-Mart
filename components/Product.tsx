import Image from "next/image";
import styles from "./Products.module.css";
import Link from 'next/link'

type ProductProps = {
	product : {
	_id : string;
	name : string;
	price : string;
	color : string;
	img : any;
	};
};
export default function Product(props: ProductProps) {
	const imageData = props.product.img.data.data;
	const base64Image = Buffer.from(imageData).toString('base64');
	const imageURI = `data:image/png;base64,${base64Image}`;
    return (
        <div
            className={styles.products}>
	<Link href={`/${props.product._id}`}>
            <img className={styles.productimage} src={imageURI}/>
<p className={styles.productname}>
  {props.product.name.length > 17
    ? `${props.product.name.slice(0, 17)}...`
    : props.product.name}
</p>
	
            <p className={styles.productprice}>{props.product.price} ETB</p>
            <p className={styles.productcolor}>{props.product.color}</p>
	       { props.product.isAvailable ?
                <button className={styles.detailadd}>Available</button>
                :
                null
                }
	</Link>
        </div>
    )
}
