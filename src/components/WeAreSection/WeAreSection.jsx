import React from "react";
import { Link } from "react-router-dom";

export default function WeAreSection() {
  const contentHandler = () => {
    const infoNODE = document.querySelectorAll(".hidden-info")[0];
    const buttonShowMore = document.getElementById("showMore");
    const buttonShowLess = document.getElementById("showLess");
    if (infoNODE.classList.contains("visible")) {
      infoNODE.classList.remove("visible");
      buttonShowMore.style.display = "flex";
      buttonShowLess.style.display = "none";
      infoNODE.style.maxHeight = 0;
    } else {
      infoNODE.classList.add("visible");
      buttonShowMore.style.display = "none";
      buttonShowLess.style.display = "flex";
      infoNODE.style.maxHeight = infoNODE.scrollHeight + "px";
    }
  };

  return (
    <>
      <section className="section section-weare" id="weare">
        <h1 className="title">
          Hello, world!
          <br />
          We are
        </h1>
        <img src="./assets/logo.png" alt="logo" className="logo" />
        <p className="text">
          A small team of passionate people who do what they want to do <br />
          in a way they most liked. And we decided to make interesting games,
          create useful apps and build a community of involved people.
        </p>
        <div className="hidden-info" id="hidden-info">
          <h2 className="title">Here it is</h2>
          <div className="text-block">
            <p className="small-text">
              We believe that apps and games can exist not only for funds and
              profit, but can change the lives of people. And vice versa -
              people can change the games and apps.
            </p>
            <p className="small-text">
              Reptilians build apps, services and games, they have huge plans,
              but their main goal is to create a community of Reptilians which
              influences all the products of Reptilians.
            </p>
          </div>
          <h2 className="title">What does it mean?</h2>
          <div className="text-block">
            <p className="text-center normal-text">
              For all of our products, we create a collection of NFTs and all of
              NFT holders have the same influence on all of our products.
            </p>
          </div>
          <h2 className="title">All NFTs holders are Reptilians!</h2>
          <div className="text-block">
            <p className="text-center normal-text w50">
              Do we want to change the game or add something to the roadmap of
              the app?
            </p>
            <p className="text-center normal-text w50">
              Do Reptilians want to change the game or app?
            </p>
          </div>
          <img src="./assets/borders.svg" alt="borders" className="borders" />
          <h2 className="last-title">
            Let's make the poll <br />
            and Reptilians will choose! <br />
            Check{" "}
            <Link style={{ color: "#FDFF52" }} to="/paper">
              Reptilians Paper
            </Link>{" "}
            for more information.
          </h2>
        </div>
        <button id="showMore" className="button" onClick={contentHandler}>
          See full idea <span className="plus">+</span>
        </button>
        <button id="showLess" className="button" onClick={contentHandler}>
          Ok, let me unsee it <span className="minus">-</span>
        </button>
        <p className="description">so what do we do</p>
        <span className="arrow">↓</span>
      </section>
    </>
  );
}
