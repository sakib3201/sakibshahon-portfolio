import { React } from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="bg-slate-900 flex justify-between items-center w-full p-3">
      <div>

      </div>
      <div>
      <button className="mx-4">
        <Link href={"/"}>Home</Link>
      </button>
      <button className="mx-4">
        <Link href={"/portfolio"}>Portfolio</Link>
      </button>
      <button className="mx-4">
        <Link href={"/services"}>Services</Link>
      </button>
      <button className="mx-4">
        <Link href={"/blog"}>Blog</Link>
      </button>
      <button className="mx-4">
        <Link href={"/about"}>About me</Link>
      </button>
      <button className="mx-4">
        <Link href={"/contact"}>Contact me</Link>
      </button>
      </div>
    </nav>
  );
};
export default NavBar;
