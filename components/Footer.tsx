import Image from "next/image";
import Link from "next/link";
import Text from "./Text";
import social_handles from '../utils/socila_handles.json'

export default function Footer() {
    return (
        <div className="bg-gray-700 flex justify-center py-12">
            <div className=" grid grid-cols-3 content-center w-[100%] gap-3">
                <div>
                    <Image height={200} width={10} src="/logo.jpg"/>
                    <Text className="text-white" text="Lorem ipsum dolor sitet Lorem dolor
                        sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" />
                </div>
                <div>
                    <Text className="font-bold text-white text-xl" text="Quick Links" />
                    <Text className="text-white" text="This is footer" />
                </div>
                <div>
                    <Text className="font-bold text-white text-xl" text="Contact Us" />
                    {social_handles.map(({name, icon, link})=> (
                        <div className="flex my-2">
                            <Image height={0} width={10} src={icon} />
                            <Link className="ml-2 text-white" href={link}>{name}</Link>
                        </div>
                    ))}
                    <Text className="text-white" text="This is footer" />
                </div>
            </div>
        </div>
    )
}
