import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <header>
      <div className="home">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB28684220_/jpg"
          alt="img"
          className="home__image"
        />

        <div className="home__row">
          <Product
            id={12425466}
            title="Winston Echo Cushion - Sofa - Fog Frame - Beech Wood Armcaps - Sunbrella Cast Ash Fabric"
            price={2248.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71PzDeA6COL._AC_SL1500_.jpg"
          />

          <Product
            id={12425466}
            title="Microsoft - Xbox One S 1TB All-Digital Edition Console with Xbox One Wireless Controller"
            price={499.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71XHuIVqJbL._AC_SX466_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="129956789"
            title="JBL Charge 3 Waterproof Portable Bluetooth Speaker (Black), 1"
            price={109.95}
            rating={5}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/61TSAn9KKxL._AC_SX425_.jpg"
            }
          />

          <Product
            id={17527853}
            title="Toshiba TF-32A710U21 32-inch Smart HD TV - Fire TV Edition"
            price={139.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/614bao-CmtL._AC_SL1000_.jpg"
          />

          <Product
            id="123456999"
            title="Keurig K-Mini Coffee Maker, Single Serve K-Cup Pod Coffee Brewer, 6 to 12 oz. Brew Sizes, Black"
            price={77.68}
            rating={4}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71tybZyMkuL._AC_SX679_.jpg"
            }
          />
        </div>

        <div className="home__row">
          <Product
            id="123456989"
            title="Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)"
            price={275.51}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="10345678"
            title="Becoming: A Guided Journal for Discovering Your Voice"
            price={10.97}
            rating={5}
            image="https://m.media-amazon.com/images/I/51w4zG9Dn6L.jpg"
          />

          <Product
            id="12425496"
            title="Microsoft - Xbox One S 1TB All-Digital Edition Console with Xbox One Wireless Controller"
            price={499.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71XHuIVqJbL._AC_SX466_.jpg"
          />

          <Product
            id="12425466"
            title="HP Stream 14 inches HD(1366x768) Display, Intel Celeron N4000 Dual-Core Processor"
            price={949.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81RCOr3hJOL._AC_SL1500_.jpg"
          />

          <Product
            id="12525466"
            title="Fire TV Stick streaming media player"
            price={39.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51ZdmnHKukL._AC_UL480_SR480,480_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="123456799"
            title="Asus ROG Strix Hero II Gaming Laptop, 15.6” 144Hz IPS Type, NVIDIA GeForce GTX 1060 6GB GDDR5, Intel Core i7-8750H Processor, 16GB DDR4, 256GB Pcie SSD + 1TB Hdd, RGB, Windows 10 Home - GL504GM-DS74"
            price={1699.0}
            rating={5}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81TKu9gu%2BqL._AC_SX679_.jpg"
            }
          />
        </div>
      </div>
    </header>
  );
}

export default Home;
