import Image from "next/image";

export default function Hero() {
    return (
        <div>
            <Image
                width={0}
                height={100}
                sizes="10vw"
                style={{width: '100%'}} src="/hero.jpg"/>
        </div>
    )
}
