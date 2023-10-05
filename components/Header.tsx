import Image from "next/image";
import Search from "./Search";
import social_handles from '../utils/socila_handles.json'
import Link from "next/link";

export default function Header(){
    return (
        <>
            <div className="flex justify-center bg-gray-500 py-2">
                {social_handles.map(({icon, link})=> (
                    <div className="flex my-2">
                        <Link className="ml-2 text-white" href={link}><Image className="px-1" height={0} width={30} src={icon} /></Link>
                    </div>

                ))}
            </div>
            <div className="flex flex-row justify-center items-center">
                <Image height={100} width={100} src="/logo.jpg"  />
                <Search />
            </div>
        </>
    )
}
