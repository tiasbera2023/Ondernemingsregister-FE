import { Html, Head, Main, NextScript } from "next/document";
import logo from '../public/assest/images/Logo.png'
import Image from "next/image";
export default function Footer() {
  return (
    <main id="footer">
       <div className="container">
        <div className="p-5 d-flex flex-column justify-content-end"> 
        <div className="d-flex py-2 align-items-center gap-2">
       <Image width={54} height={54} src={logo}/>
       <span className="logo-text">Ondernemingsregister</span>
        </div>
        <div className="d-flex mt-5 gap-5">
            <span className="text-white">Algemene voorwaarden</span>
            <span className="text-white">Privacystatement</span>
            <span className="text-white">Disclaimer</span>
            <span className="text-white">Herroeping</span>
            <span className="text-white">FAQ</span>
            <span className="text-white">Contact</span>
        </div>
        <p className="text-secondary mt-5 mb-3">© 2024 MijnBTWnummer. Alle rechten voorbehouden.</p>
       </div>
       </div>
    </main>
  );
}
