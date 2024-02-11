import Head from "next/head";
import arrowIconBlue from "../public/assest/images/arrow-icon-blue.svg"
import Image from "next/image";
import  Link from 'next/link'
export default function Search() {
  return (
    <>
      <Head>
      </Head>
      <main className="">
        <div className="container">
            <div className="search-card bg-white">
            <h1 className="">Bestel uw <span className="text-info">KVK </span>uittreksel</h1>
            <p>Zoek op KVK-nummer of bedrijfsnaam en ontvang direct uw KVK uittreksel.</p>
            <div className=""><input className="py-3 w-75 px-2" placeholder="Zoek op naam of KVK-nummer"/><button className="card-btn">Zoeken</button></div>
            </div>
            <div id="search-results">
                {[1,2,3,4,5,6,7].map((data)=>{
                    return(
                <div key={data} className="search-result">
                    <div>
                    <h3>ARR Consultancy B.V.</h3><span className="search-tag">hoofdvestiging</span>
                    <p>000043714102 · 76887987 · <span className="text-dark">Utrecht</span></p>
                    </div>
                    <div><Link className="text-white text-decoration-none" href={"/product"}><Image width={35} height={30} src={arrowIconBlue}/></Link>
                        
                    </div>
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
