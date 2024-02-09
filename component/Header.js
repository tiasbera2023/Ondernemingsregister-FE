import { Html, Head, Main, NextScript } from "next/document";
import logo from '../public/assest/images/Logo.png'
import Image from "next/image";
export default function Header() {
  return (
    <main className="bg-white py-2">
       <div className="container">
        <div className="d-flex justify-content-between">
        <div className="d-flex gap-5"> 
       <Image width={54} height={54} src={logo}/>
       <div className="align-items-center d-flex gap-4">
       <span>Home</span>
       <span>FAQ</span>
       <span>Contact</span>
       </div>
       </div>
       <button className="header-btn">Direct bestellen</button>
       </div>
       </div>
    </main>
  );
}
