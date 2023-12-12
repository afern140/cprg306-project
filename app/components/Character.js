import Image from "next/image";
import Link from "next/link";

export default function Character({ character, name, image}) {
  return (
    <div className="relative text-white font-bold border-2 border-gray-700 m-5">
      <Image
        src={image}
        alt="Character Portrait"
        width={375}
        height={257}
      />
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center p-2 bg-red-950 bg-opacity-75">
        <Link href={`/${character.id}`} passHref className="text-3xl">{name}</Link>
      </div>
    </div>
  );
}