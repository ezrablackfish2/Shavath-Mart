import Image from "next/image";
import Search from "./Search";

export default function Header(){
    return (
        <div className="flex flex-row">
            <Image height={100} width={100} src="/logo.jpg"  />
            <p className="text-red-800">Hi</p>
            <Search />
        </div>
    )
}
