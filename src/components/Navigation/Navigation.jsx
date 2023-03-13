import React from "react";
import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy-highlight";

export default function Navigation() {
  const mobileMenuHandler = () => {
    const menuNODE = document.querySelectorAll(".mobile-menu")[0];
    if (menuNODE.classList.contains("visible")) {
      menuNODE.classList.remove("visible");
    } else {
      menuNODE.classList.add("visible");
    }
  };

  return (
    <>
      <nav>
        <Scrollspy
          className="menu"
          items={["weare", "nft", "gameapps", "contacts"]}
          currentClassName="active"
          style={{ paddingLeft: "0" }}
        >
          <a className="menu-item" href="#weare">
            We are
          </a>
          <a className="menu-item" href="#nft">
            The NFT
          </a>
          <a className="menu-item" href="#gameapps">
            Games & Apps
          </a>
          {/* <a className="menu-item" href="#roadmap">
            Road maps
          </a> */}
          <a className="menu-item" href="#contacts">
            Contacts
          </a>
        </Scrollspy>
      </nav>
      <img
        src="./assets/burger.svg"
        className="burger"
        alt="mobile-menu"
        onClick={mobileMenuHandler}
      />
      <div className="mobile-menu">
        <img
          src="assets/close.svg"
          className="close"
          alt="mobile-menu"
          onClick={mobileMenuHandler}
        />
        <div onClick={mobileMenuHandler}>
          <Scrollspy
            className="menu-links"
            items={["weare", "nft", "gameapps", "contacts"]}
            currentClassName="active"
          >
            <a className="menu-item active" href="#weare">
              We are
            </a>
            <a className="menu-item" href="#nft">
              The NFT
            </a>
            <a className="menu-item" href="#gameapps">
              Games & Apps
            </a>
            {/*  <a className="menu-item" href="#roadmap">
              Road maps
            </a> */}
            <a className="menu-item" href="#contacts">
              Contacts
            </a>
          </Scrollspy>
        </div>
        <Link
          className="paper"
          style={{ color: "black", textDecoration: "unset" }}
          to="/paper"
        >
          Reptilian Paper
        </Link>
        <div className="mobile-socials">
          <a href="#twitter" target="_blank">
            <img src="assets/twitter.png" alt="nft" />
          </a>
          <a href="#telegram" target="_blank">
            <img src="assets/telegram.svg" alt="nft" />
          </a>
          <a href="#discord" target="_blank">
            <img src="assets/discord.svg" alt="nft" />
          </a>
          <a href="#instagram" target="_blank">
            <img src="assets/instagram.svg" alt="nft" />
          </a>
        </div>
      </div>
      <Link className="main-badge" to="/paper">
        Reptilian Paper
      </Link>

      <div className="socials">
        <a href="https://twitter.com/BandReptilians" target="_blank">
          <img src="assets/twitter.png" alt="nft" />
        </a>
        <a href="https://t.me/reptiliansband" target="_blank">
          <img src="assets/telegram.svg" alt="nft" />
        </a>
        <a href="https://discord.gg/CuPZU7KHQY" target="_blank">
          <img src="assets/discord.svg" alt="nft" />
        </a>
        <a href="https://www.instagram.com/reptiliansband/" target="_blank">
          <img src="assets/instagram.svg" alt="nft" />
        </a>
      </div>
    </>
  );
}
