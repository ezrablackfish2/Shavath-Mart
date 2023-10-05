import Product from "./Product"

export default function Products(props) {
    return (
        <div className="grid grid-cols-4">
            {
                props.data.map((product) => (
                    <Product product={product}/>
                ))
            }
        </div>
    )
}
