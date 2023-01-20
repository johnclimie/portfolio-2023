import Image from "next/image";

export default function Skill({ imgSrc, skill }) {
    return (
        <>
            <Image 
            priority
            src={imgSrc}
            alt=""
            />
            <p>{skill}</p>
        </>
    )
}