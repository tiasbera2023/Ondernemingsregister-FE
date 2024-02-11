import { Html, Head, Main, NextScript } from "next/document";
import logo from '../public/assest/images/Logo.png'
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <main id="header" className="bg-white  py-2">
       <div className="container">
        <div className="d-flex justify-content-between">
        <div className="d-flex gap-5"> 
       <Image width={54} height={54} src={logo}/>
       <div className="align-items-center d-flex gap-4">
       <span ><Link className="text-secondary text-decoration-none" href={"/"}>Home</Link></span>
       <span ><Link className="text-secondary text-decoration-none" href={"/faq"}>FAQ</Link></span>
       <span ><Link className="text-secondary text-decoration-none" href={"/contact"}>Contact</Link></span>
       </div>
       </div>
       <button className="header-btn">Direct bestellen</button>
       </div>
       </div>
    </main>
  );
}
