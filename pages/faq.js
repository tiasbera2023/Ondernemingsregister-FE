import Head from "next/head";
import { useState } from "react";
import arrowIconBlue from "../public/assest/images/arrow-icon-blue.svg"
import Image from "next/image";
export default function Faq() {
    const [count, setCount] = useState(null);
  const handlefaq=(index)=>{
    console.log(index,count)
    if(count === index){
        setCount(null)
    }else{
        setCount(index)
    }
  }
  return (
    <>
      <Head>
      </Head>
      <main className="">
    <div className="faq-head">
        <div className="container">
        <h3 className="">Veelgestelde vragen</h3>
        <p>Lorem ipsum dolor sit amet. Ex quam praesentium ut omnis molestias non quia necessitatibus ad nemo illum rem vero laudantium sit commodi earum.</p>
        </div>
    </div>
        <div className="container">
            <div id="faq">
                {["Ik heb geen e-mail van jullie ontvangen maar wel betaald?","Wie zijn jullie?","Ik ben mijn RSIN kwijt, staat deze in het uittreksel?","Kan ik mijn bestelling nog annuleren?","Ik ben mijn BTW-nummer kwijt, wat nu?","Er staan nog oude gegevens op mijn uittreksel"].map((data,index)=>{
                    return(
                <div key={data} className="faq-list" onClick={() => handlefaq(index)}>
                    <div className="faq-title">
                    <p className="text-dark m-0">{data}</p>
                        <Image className={count == index?`rotate-arrow-down`:"rotate-arrow-up"} width={17.5} height={15} src={arrowIconBlue}/>
                </div>
                    
                    <p className={`faq-list-text ${count == index?"d-block":"d-none"}`} >Het kan soms voorkomen dat het versturen van uw product enige vertraging oploopt maar dit duurt nooit langer dan 2 uur. Kijk alstublieft na deze tijd ook in uw spambox. Nog steeds niet gevonden? Neem dan contact met ons op via ons contactformulier. Vermeld dan in uw bericht het ordernummer en het e-mailadres dat u heeft ingevuld bij het bestellen. Wij sturen u dan alsnog handmatig uw product per e-mail.</p>
                    </div>
                    )
                })}
            </div>
            {/* <p className="search-disclamer">Lorem ipsum dolor sit amet. Ex quam praesentium ut omnis molestias non quia necessitatibus ad nemo illum rem vero laudantium sit commodi earum. Ut temporibus accusamus non dignissimos explicabo vel magnam tempore.</p> */}
        </div>
      </main>
    </>
  );
}
