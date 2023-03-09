import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export default function NftSection() {
  return (
    <>
      <section className="section section-nft" id="nft">
        <h2 className="title">
          NFT collection <br />
          for true reptilians
        </h2>
        <p className="text">
          We created 15.000 generated Reptilians.
          <br />
          We will also mint some for every new project.
          <br />
          All of these NFTs are unique and there is no repeat.
        </p>
        <Splide
          className="splide"
          aria-label="My Favorite Images"
          options={{
            type: "loop",
            gap: "2rem",
            drag: "free",
            arrows: false,
            pagination: false,
            perPage: 3,
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: true,
              speed: 1,
            },
          }}
          extensions={{ AutoScroll }}
        >
          <SplideSlide className="splide__slide">
            <img className="img" src="assets/NFT00001.png" alt="nft" />
          </SplideSlide>
          <SplideSlide className="splide__slide">
            <img className="img" src="assets/NFT00002.png" alt="nft" />
          </SplideSlide>
          <SplideSlide className="splide__slide">
            <img className="img" src="assets/NFT00003.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00004.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00005.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00006.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00007.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00008.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00009.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00010.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00011.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00012.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00014.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00015.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00016.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00017.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00018.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00019.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00020.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00021.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00022.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00023.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00024.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00025.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00026.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00027.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00028.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00029.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00030.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00031.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00032.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00033.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00034.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00035.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00036.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00037.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00038.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00039.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00040.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00041.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00042.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00043.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00044.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00045.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00046.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00047.png" alt="nft" />
          </SplideSlide>
          <SplideSlide>
            <img className="img" src="assets/NFT00048.png" alt="nft" />
          </SplideSlide>
        </Splide>
        <a
          className="link"
          href="https://discord.gg/CuPZU7KHQY"
          target="_blank"
        >
          Want some? Join Discord
        </a>
      </section>
    </>
  );
}
