import { Html, Head, Main, NextScript } from "next/document";
import logo from '../public/assest/images/Logo.png'
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <main id="header" className="bg-white  py-2">
      <nav class="navbar navbar-expand-lg bg-white ">
  <div class="container">
    <a class="navbar-brand" href="/"><Image width={54} height={54} src={logo}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <div className="container">
        <div className="d-flex justify-content-between">
        <div className="d-flex gap-5"> 
       <div className="align-items-center d-flex gap-4">
       <span ><Link className="text-secondary text-decoration-none" href={"/"}>Home</Link></span>
       <span ><Link className="text-secondary text-decoration-none" href={"/faq"}>FAQ</Link></span>
       <span ><Link className="text-secondary text-decoration-none" href={"/contact"}>Contact</Link></span>
       </div>
       </div>
       <button className="header-btn sm-hide">Direct bestellen</button>
       </div>
       </div>
    </div>
  </div>
</nav>
       {/* <div className="container">
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
       </div> */}
    </main>
  );
}
