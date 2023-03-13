import React from "react";
import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <section className="section section-contacts" id="contacts">
      <h2 className="title">Still here?</h2>
      <p className="description">
        Any questions or suggestions are welcome. <br></br> Feel free to contact
        us 24/7 and 365 days in the year
      </p>
      <div className="heroes">
        <div className="hero">
          <img className="image" src="assets/heroAlexey.png" alt="Alexey" />
          <p className="name">Aleksei</p>
        </div>
        <div className="hero">
          <img className="image" src="assets/heroGeorgy.png" alt="Georgy" />
          <p className="name">George</p>
        </div>
        <div className="hero">
          <img className="image" src="assets/heroEvgeny.png" alt="Evgeny" />
          <p className="name">Eugene</p>
        </div>
        <div className="hero">
          <img
            className="image"
            src="assets/heroStanislav.png"
            alt="Stanislav"
          />
          <p className="name">Stan</p>
        </div>
        <div className="hero">
          <img
            className="image"
            src="assets/heroAnton.png"
            alt="Anton"
            style={{
              paddingLeft: "10px",
              paddingBottom: "15px",
              paddingTop: "5px",
            }}
          />
          <p className="name">Anton</p>
        </div>
      </div>
      <a
        href="mailto:hey@reptilians.band?subject=I have some text for you!"
        className="email"
        style={{
          display: "block",
          marginBlockStart: "2.2rem",
          marginBlockEnd: "98px",
          textDecoration: "none",
        }}
      >
        hey@reptilians.band
      </a>
      <div className="links">
        <Link className="link" to="/service">
          Terms of Service
        </Link>
        <Link className="link" to="/privacy">
          Privacy Policy
        </Link>
      </div>
      <p className="rights">© 2023, all rights reserved</p>
    </section>
  );
}
