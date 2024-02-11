import Head from "next/head";
import arrowIcon from "../public/assest/images/arrow-icon-bg.png"
import Image from "next/image";
import clickIcon from "../public/assest/images/check-icon.png"
import circleTick from "../public/assest/images/circle-tick.png"
export default function product() {
  return (
    <>
      <Head>
      </Head>
      <main className="mt-1">
                    <div className="product-name">
                    <h3>ARR Consultancy B.V.</h3><span className="search-tag">hoofdvestiging</span>
                    <p>000043714102 · 76887987 · <span className="text-dark">Utrecht</span></p>
                    </div>
        <div className="container product">
            <p className="text-blue">Selecteer een product</p>

            <div className="product-card-container">
                <div className="product-card">
                    <h3>Gewaarmerkt uittreksel</h3>
            <div className="product-check-box">
              <div>
              <Image src={clickIcon}/>
              <span>Basisgegevens</span>
              </div>
              <div>
              <Image src={clickIcon}/>
              <span>Rechtsvorm</span>
              </div>
             </div>
             <div className="product-amount"><span>€ 36,60</span>
             <div id="img-icon"><Image src={arrowIcon}/></div></div>
                </div>
                <div className="product-card">
                    <h3>Niet gewaarmerkt uittreksel</h3>
            <div className="product-check-box">
              
              <div>
              <Image src={clickIcon}/>
              <span>Nederlands</span>
              </div>
             </div>

             <div className="product-amount" style={{marginTop:"120px"}}><span>€ 28,80</span>
             <div id="img-icon"><Image src={arrowIcon}/></div></div>
                </div>
                <div></div>
            </div> 
            <div className="product-form">
            <h3>Bestelling afronden</h3>
            <p>U ontvangt binnen 1 minuut uw uittreksel per e-mail.</p>
            <form id="product-form">
                <div>
                    <label className="d-block">Taal van uittreksel</label>
                    <input placeholder="Nederlands"/>
                </div>
                <div>
                    <label className="d-block">E-mailadres</label>
                    <input placeholder="E-mailadres"/>
                </div>
                <div >
                    <label className="d-block">Bestellen & betalen</label>
                    <input placeholder="ING"/>
                </div>
                <div>
                    <button>Bestellen & betalen <Image className="mx-2" src={circleTick}/></button>
                </div>
            </form>
            </div>
            <p className="search-disclamer">Lorem ipsum dolor sit amet. Ex quam praesentium ut omnis molestias non quia necessitatibus ad nemo illum rem vero laudantium sit commodi earum. Ut temporibus accusamus non dignissimos explicabo vel magnam tempore.</p>
        </div>
      </main>
    </>
  );
}
