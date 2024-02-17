import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="transition items-center hidden md:flex">
      <Link className="hover:opacity-75" href={"/"}>
        <Image src={"/logo.png"} alt="Logo" height={0} width={150} />
      </Link>
    </div>
  );
};
