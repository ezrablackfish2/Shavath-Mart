import Image from "next/image";

export default function Product(props) {
    return (
        <div
            className="w-[300px] cursor-pointer hover:scale-105 duration-200 hover:transform-2 hover:bg-gray-300 flex flex-col items-center my-6 p-2 rounded-md">
            <Image height={200} width={200} src={props.product.image}/>
            <p>{props.product.name}</p>
            <p>{props.product.price}</p>
            <p>{props.product.color}</p>
        </div>
    )
}
