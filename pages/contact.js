import Head from "next/head";
import { useState } from "react";
import arrowIconBlue from "../public/assest/images/arrow-icon-blue.svg"
import location from "../public/assest/images/location.png"
import mail from "../public/assest/images/mail.png"
import call from "../public/assest/images/call.png"
import circleTick from "../public/assest/images/circle-tick.png"
import Image from "next/image";
export default function Contact() {
  return (
    <>
      <Head>
      </Head>
      <main className="">
    <div className="faq-head">
        <div className="container">
        <h3 className="">Contact</h3>
        <p>Mijn Uittreksels is een intermediair voor het aanvragen van uittreksels en andere KVK producten maar is geen onderdeel van de KVK.</p>
        </div>
    </div>
        <div className="container">
            <div id="contact">
            <div className="contact-card-box">
            <div className="contact-card">
            <Image width={60} height={60} src={location}/>
            <p>Mijn UittrekselsFornheselaan 202074, 3734GE, Den Dolder</p>
            </div>
            <div className="contact-card">
            <Image width={60} height={60} src={call}/>
            <p className="mt-2">+31 85 060 48 60</p>
            </div>
            <div className="contact-card">
            <Image width={60} height={60} src={mail}/>
            <p className="mt-2">info@orrrrrrr.nl</p>
            </div>
            </div>
            <div className="contact-form">
                <p className="contact-form-head">Heeft u een vraag die bedoeld is voor de KVK, dan kunt u het beste contact met hen opnemen via www.kvk.nl/hulp-en-contact/</p>
                <form id="contact-form">
                    <div className="row">
                <div className="col-md-6">
                    <label className="d-block">Voornaam<span className="text-danger">*</span></label>
                    <input placeholder="Voornaam"/>
                </div>
                <div className="col-md-6">
                    <label className="d-block">Achternaam<span className="text-danger">*</span></label>
                    <input placeholder="Achternaam"/>
                </div>
                <div className="col-md-12">
                    <label className="d-block">E-mailadres<span className="text-danger">*</span></label>
                    <input placeholder="E-mailadres"/>
                </div>
                <div  className="col-md-12">
                    <label className="d-block">Telefoonnummer<span className="text-danger">*</span></label>
                    <input placeholder="Telefoonnummer"/>
                </div>
                <div  className="col-md-12">
                    <label className="d-block">Onderwerp<span className="text-danger">*</span></label>
                    <input placeholder="Maak een keuze"/>
                </div>
                <div className="col-md-12">
                    <button>Verstuur bericht <Image className="mx-2" src={circleTick}/></button>
                </div>
                </div>
            </form>
            </div>
            </div>
            {/* <p className="search-disclamer">Lorem ipsum dolor sit amet. Ex quam praesentium ut omnis molestias non quia necessitatibus ad nemo illum rem vero laudantium sit commodi earum. Ut temporibus accusamus non dignissimos explicabo vel magnam tempore.</p> */}
        </div>
      </main>
    </>
  );
}
