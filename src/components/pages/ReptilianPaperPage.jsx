import React from "react";
import { Link } from "react-router-dom";

export default function ReptilianPaperPage() {
  const mobileMenuHandler = () => {
    const menuNODE = document.querySelectorAll(".mobile-menu")[0];
    if (menuNODE.classList.contains("visible")) {
      menuNODE.classList.remove("visible");
    } else {
      menuNODE.classList.add("visible");
    }
  };

  return (
    <div
      className="body privacy"
      style={{ whiteSpace: "pre-line" }}
      link="#FFFC00"
    >
      <Link className="back-button" to="/">
        Back
      </Link>
      <a href="/">
        {" "}
        <img src="assets/logoSmall.png" alt="logo" className="logo" />
      </a>
      <img
        src="assets/burger.svg"
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
        <div
          className="menu-links"
          onClick={mobileMenuHandler}
          id="mobile-menu"
        >
          <a
            className="menu-item"
            rel="noreferrer noopener"
            href="#Introduction"
          >
            Introduction
          </a>
          <a
            className="menu-item"
            rel="noreferrer noopener"
            href="#Purposeofthedocumentation"
          >
            Purpose of the documentation
          </a>
          <a className="menu-item" rel="noreferrer noopener" href="#Overview">
            Overview
          </a>
          <a className="menu-item" rel="noreferrer noopener" href="#Idea">
            Idea
          </a>
          <a className="menu-item" rel="noreferrer noopener" href="#Mission">
            Mission
          </a>
          <a className="menu-item" rel="noreferrer noopener" href="#Goals">
            Goals
          </a>
          <a
            className="menu-item"
            rel="noreferrer noopener"
            href="#ProductsofReptilians"
          >
            Products of Reptilians
          </a>
          <a
            className="menu-item"
            rel="noreferrer noopener"
            href="#Howit'sgonnaroll"
          >
            How it's gonna roll
          </a>
          <a
            className="menu-item"
            rel="noreferrer noopener"
            href="#Tokenomicsandbenefits"
          >
            Tokenomics and benefits{" "}
          </a>
          <a
            className="menu-item"
            rel="noreferrer noopener"
            href="#Financials(withoutpants)"
          >
            Financials (without pants)
          </a>
          <a className="menu-item" rel="noreferrer noopener" href="#Plans2023">
            Plans 2023
          </a>
          <a className="menu-item" rel="noreferrer noopener" href="#Team">
            Team
          </a>
          <a className="menu-item" rel="noreferrer noopener" href="#Stillhere?">
            Still here?
          </a>
        </div>
        <p className="paper">Reptilian Paper</p>
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
      <nav className="head-menu" id="head-menu">
        <a className="menu-item" rel="noreferrer noopener" href="#Introduction">
          Introduction
        </a>
        <a
          className="menu-item"
          rel="noreferrer noopener"
          href="#Purposeofthedocumentation"
        >
          Purpose of the documentation
        </a>
        <a className="menu-item" rel="noreferrer noopener" href="#Overview">
          Overview
        </a>
        <a className="menu-item" rel="noreferrer noopener" href="#Idea">
          Idea
        </a>
        <a className="menu-item" rel="noreferrer noopener" href="#Mission">
          Mission
        </a>
        <a className="menu-item" rel="noreferrer noopener" href="#Goals">
          Goals
        </a>
        <a
          className="menu-item"
          rel="noreferrer noopener"
          href="#ProductsofReptilians"
        >
          Products of Reptilians
        </a>
        <a
          className="menu-item"
          rel="noreferrer noopener"
          href="#Howit'sgonnaroll"
        >
          How it's gonna roll
        </a>
        <a
          className="menu-item"
          rel="noreferrer noopener"
          href="#Tokenomicsandbenefits"
        >
          Tokenomics and benefits{" "}
        </a>
        <a
          className="menu-item"
          rel="noreferrer noopener"
          href="#Financials(withoutpants)"
        >
          Financials (without pants)
        </a>
        <a className="menu-item" rel="noreferrer noopener" href="#Plans2023">
          Plans 2023
        </a>
        <a className="menu-item" rel="noreferrer noopener" href="#Team">
          Team
        </a>
        <a className="menu-item" rel="noreferrer noopener" href="#Stillhere?">
          Still here?
        </a>
      </nav>
      <div className="content">
        <h1 className="heading" id="123">
          Reptilian Paper
        </h1>
        <h2 className="title" id="Introduction">
          Introduction
        </h2>
        <p className="text">
          Hey, mate!{"\n"}
          This documentation is our first step in understanding the future of
          our company and our approach. Let's be real, we're not fortune tellers
          and we're not gonna pretend like we know exactly what the future
          holds. As we continue to grow and evolve, this documentation may
          change. We're in this together with our community, and we're looking
          forward to seeing how we can shape the future together.
          {"\n"}
          If you see some mistakes or have some suggestions to improve it -
          please welcome mate, text us at{" "}
          <a href="https://t.me/sivkovg" style={{ color: "#FDFF52" }}>
            @sivkovg
          </a>{" "}
          in Telegram or via{" "}
          <a
            href="mailto:hey@reptilians.band?subject=I have some text for you!"
            style={{ color: "#FDFF52" }}
          >
            hey @reptilians.band
          </a>
          !{"\n"}
          {"\n"}
          So let's strap in and get ready to make some noise, cause the future
          is looking bright and we're excited to be a part of it!{" "}
        </p>
        <h2 className="title" id="Purposeofthedocumentation">
          Purpose of the documentation
        </h2>
        <p className="text">
          The purpose of this documentation is to give you, our community, a
          clear understanding of who we are, what we stand for, and what we're
          all about. We're not an average company, and we want to make sure you
          know that from the get-go.{"\n"}
          {"\n"}
          We believe in transparency and open communication, and this
          documentation is a reflection of that. We want you to know everything
          there is to know about us so that you can make an informed decision
          about whether or not you want to be a part of our community.{"\n"}
          {"\n"}
          This documentation is for anyone who wants to understand our company
          and its operations, for people who want to know about our products and
          services, for people who want to know about our vision, mission,
          goals, and values, for people who want to understand our token
          economy, our team, and our structure.{"\n"}
          {"\n"}
          We hope that this documentation will serve as a guide, not just for
          you, but for anyone interested in what we're doing and who wants to
          join us on this journey.{"\n"}
          {"\n"}
          <strong>
            *We tried very hard to keep this documentation short,
            understandable, and not look like a scammer. So if you haven't read
            it, fuck off.
          </strong>
        </p>
        <h2 className="title" id="Overview">
          Overview
        </h2>
        <p className="text">
          In short, we are an B2C IT company specializing in creating unique
          products with a focus on choice, where the community members can have
          a direct influence on the development of our products through the use
          of Non-Fungible Tokens (NFTs). We are oriented on the whole world. And
          we are ready to change the world!
        </p>
        <details className="details">
          <summary>More in-depth</summary>
          <p className="text">
            We're Reptilians that are out to shake things up and break free from
            the constraints of the status quo. We're focused on creating mobile
            games and mobile applications that are both fun and innovative, but
            we're not afraid to branch out and explore new opportunities -
            whether it's web services or other gaming platforms.{"\n"}
            {"\n"}
            And we're about flipping the script and creating a new model for how
            companies and communities can work together. Through our
            decentralized approach and our focus on community engagement, we
            hope to create a new model for how companies and communities can
            work together and show the world that decentralization is possible
            and that people can unite and manage their environment.
          </p>
        </details>
        <h2 className="title" id="Idea">
          Idea
        </h2>
        <p className="text">
          The idea behind the Reptilians company is to disrupt the traditional
          way of user-company interaction and create a revolutionary
          decentralized approach where community members can have a direct
          influence on the development of our products through the use of
          Non-Fungible Tokens (NFTs).{"\n"}
          {"\n"}
          Reptilians are transparent as hell, with all data, backlogs, roadmaps
          and development made public while being created. We're not afraid to
          be open and honest with our community, and we want them to be a part
          of the process every step of the way.{"\n"}
          {"\n"}
          <strong>
            Decentralization for us isn't the product, it is the tool
          </strong>
          . Our community members will have the power to vote on changes or
          offer their ideas for our products through our voting service. Our
          community is like a middle finger to centralized authority, giving the
          people control over the direction of the company.{"\n"}
        </p>

        <details className="details">
          <summary>What do we believe?</summary>
          <p className="text">
            We believe in creating a comfortable and free community of
            like-minded people who share our values and are innovative and
            creative in our products. But most importantly, we're all about
            flipping the script and creating a new model for how companies and
            communities can work together. Through our approach and our focus on
            community engagement, we hope to create a new model for how
            companies and communities can interact and show the world that
            decentralization is possible and that people can unite and manage
            their environment.{"\n"}
            {"\n"}
            Reptilians is different from competitors because we're not just
            creating products and services, we're creating a new way for
            companies and communities to interact, we’re creating the community
            of Reptilians. All of these give our users a direct say in the
            development of our products and services. We believe that through
            our approach, we can create a new model for how companies and
            communities can work together.
            <strong>
              {" "}
              We're not content with just being another player in the industry,
              we want to be the ones leading the changes and paving the way for
              a new era of decentralized companies.
            </strong>
          </p>
        </details>
        <h2 className="title" id="Mission">
          Mission
        </h2>
        <p className="text">
          <strong>Let people feel the importance of the choice</strong>
        </p>
        <p className="text">
          Our mission is simple: to shake things up and turn the traditional
          user-company relationship upside down.
        </p>
        <details className="details">
          <summary>What do we want?</summary>
          <ul>
            <li>
              <p className="text">
                <strong>We want</strong> to give the power back to the people
                and let them have a direct say in the development of our
                products and services.
              </p>
            </li>
            <li>
              <p className="text">
                <strong>We want</strong> to create a new paradigm where the
                needs and wants of the community are truly taken into account.
              </p>
            </li>
            <li>
              <p className="text">
                <strong>We want</strong> to be a leader in the new era of
                decentralized companies, where transparency, community
                engagement, and innovation are at the core of our operations.
              </p>
            </li>
            <li>
              <p className="text">
                <strong>We want</strong> to create a space where people can come
                together, have fun, and make a positive impact on the world.
              </p>
            </li>
            <li>
              <p className="text">
                <strong>We want</strong> to be a company that people love
                working for, and we want to create products that people love
                using.
              </p>
            </li>
          </ul>
        </details>
        {"\n"}
        <details className="details">
          <summary>How will we achieve our mission?</summary>
          <ul>
            <li>
              <p className="text">
                <strong>
                  First, we are utilizing Non-Fungible Tokens (NFTs) as a tool
                  to give power back to the people and let them have a direct
                  say in the development of our products and services.
                </strong>{" "}
                This decentralized approach sets us apart from traditional
                companies and allows us to truly prioritize the needs and wants
                of our community.
              </p>
            </li>
            <li>
              <p className="text">
                <strong>
                  Second, we are creating a transparent, innovative, and
                  community-driven company that prioritizes the desires and
                  needs of our community above everything else.
                </strong>{" "}
                We want our community to be at the forefront of our
                decision-making process, and to have a direct influence on the
                direction of the company.
              </p>
            </li>
            <li>
              <p className="text">
                <strong>
                  Third, we want to be the ones that are not afraid to take
                  risks and push boundaries.
                </strong>{" "}
                We want to be a leader in the new era of decentralized
                companies, and to inspire other companies to follow our
                decentralized approach.
              </p>
            </li>
            <li>
              <p className="text">
                <strong>
                  Fourth, we plan to use our resources and expertise to make a
                  meaningful impact on society.
                </strong>{" "}
                We want to be a force for good in the world and to use our
                platform to bring about positive change.
              </p>
            </li>
          </ul>
        </details>
        <h2 className="title" id="Goals">
          Goals
        </h2>
        <ol className="list">
          <li>
            <p className="text">Empowering community influence</p>
          </li>
          <li>
            <p className="text">Community-driven innovation</p>
          </li>
          <li>
            <p className="text">Disrupting traditional models</p>
          </li>
          <li>
            <p className="text">Making a positive impact on the world</p>
          </li>
          <li>
            <p className="text">Building a united community</p>
          </li>
        </ol>
        <details className="details">
          <summary>With more kick</summary>
          <ol className="list">
            <li>
              <p className="text">
                Our goal is to empower individuals to actively participate in
                shaping the world around them through our decentralized
                platform, community engagement, and NFTs. Giving them the tools
                to influence the development of our products and services and
                create a new paradigm for how companies and communities
                interact.
              </p>
            </li>
            <li>
              <p className="text">
                We strive to create a transparent, innovative, and
                community-driven company that prioritizes the needs and wants of
                our community above all else. We want our community to be at the
                forefront of our decision-making process, and to have a direct
                influence on the direction of the company.
              </p>
            </li>
            <li>
              <p className="text">
                We aim to disrupt the traditional model of user-company
                interaction and pave the way for a new era of decentralized
                companies. Our goal is to be a leader in the industry, and to
                inspire other companies to follow our decentralized approach.
              </p>
            </li>
            <li>
              <p className="text">
                Reptilians is driven by a desire to make a positive impact on
                the world and we plan to use our resources and expertise to make
                a meaningful impact on society. We want to be a force for good
                in the world and to use our platform to bring about positive
                change.
              </p>
            </li>
            <li>
              <p className="text">
                We are building a community of like-minded individuals who are
                passionate about creating a better world and are excited to be a
                part of this revolutionary journey. We believe that by working
                together we can change the world, and we want to create a space
                for individuals to come together and make a difference.
              </p>
            </li>
          </ol>
        </details>
        <h2 className="title" id="ProductsofReptilians">
          Products of Reptilians
        </h2>
        <p className="text">
          In general, at Reptilians, we don't let boundaries hold us back, only
          our imagination. Currently, we're focused on creating mobile games and
          apps that are both fun and innovative, but that's just the beginning.
          We're not afraid to branch out and explore new opportunities in web
          apps and services - because in order to make our idea a reality, we
          need a whole ecosystem to support it.
        </p>
        <details className="details">
          <summary>More</summary>
          <ol className="list">
            <li>
              <p className="text">
                We've already made a solid start, with one mobile game currently
                available in app stores, another game in development, and a
                mobile app for mental health that is in the research phase. Not
                bad for a starting point, right?
              </p>
              {"\n"}
            </li>
            <li>
              <p className="text">
                In addition, we're also working on developing our own
                marketplace specifically for our NFTs. Of course, we'll also
                list them on public marketplaces, but we want to make it easy
                for our community by having a central place to collect all of
                our NFTs in one spot.
              </p>
              {"\n"}
            </li>
            <li>
              <p className="text">
                To ensure a fair and transparent process for voting on the
                future of our products and ideas, we're also in the process of
                developing a voting service based on smart contracts.{" "}
              </p>
            </li>
          </ol>
        </details>
        <p className="text">
          All of our plans can be found in{" "}
          <a
            href="https://miro.com/app/board/uXjVP08aLmI=/?share_link_id=779945468109"
            style={{ color: "#FDFF52" }}
          >
            our public roadmap
          </a>
          .
        </p>
        <h2 className="title" id="Howit'sgonnaroll">
          How it's gonna roll
        </h2>
        <h3>Overview</h3>
        <p className="text">
          Interaction based on NFTs is at the core of the Reptilians' mechanics.
          They are used as a way for community members to have a say in the
          development of the Reptilians' products and services. Community
          members can purchase or receive NFTs through marketing promotions or
          airdrops, and can also earn them by participating in certain
          activities. These NFTs serve as a passport for community members to
          influence all of the Reptilians' products (web-/mobile apps) and the
          very life of the company. Community members can vote on the
          Reptilians' plans and ideas, and propose their own ideas for voting by
          the community. The NFTs give community members a direct and tangible
          way to shape the direction of the Reptilians and its products.
        </p>
        <ol className="list">
          <li>
            <p className="text">We mint NFTs</p>
          </li>
          <li>
            <p className="text">We give NFTs to the community</p>
          </li>
          <li>
            <p className="text">
              The community decides the destiny of our products by the vote
              supported by NFTs
            </p>
          </li>
          <li>
            <p className="text">We implement these decisions to products </p>
          </li>
        </ol>
        <h3>How we mint NFTs</h3>
        <details className="details">
          <summary>More</summary>
          <ol className="list">
            <li>
              <p className="text">
                We plan to mint NFT collections for each new product of the
                Reptilians to make it more diverse. Each NFT collection is
                unique and connected to the product it represents. It's like a
                little piece of the product's universe in your pocket.
              </p>
            </li>
            <li>
              <p className="text">
                All NFTs in these collections will be generated by our scripts
                and presets to have uniqueness and connection with our products.
              </p>
            </li>
            <li>
              <p className="text">
                The count of NFTs in each collection is different, it is based
                on our mood, the mood of the community, or the place of stars in
                the sky. But we are sure that there will not be more NFTs than
                15k in each collection.
              </p>
            </li>
            <li>
              <p className="text">
                We won't use one blockchain and decided to use different
                blockchains for our collections to avoid the risks of web3. You
                know it is the wild west in web3 right now and sometimes
                blockchains are dying.{" "}
              </p>
            </li>
            <li>
              <p className="text">
                Also, we will mint rare collections in collaboration with our
                community through some activities, with digital and real-life
                artists, influencers, e.t.c.
              </p>
            </li>
          </ol>
        </details>
        <h3>How we distribute NFTs</h3>
        <details className="details">
          <summary>More</summary>
          <p className="text">You can take NFTs in a few ways:</p>
          <ol className="list">
            <li>
              <p className="text">
                Purchase NFTs directly on a marketplace or exchange.
              </p>
            </li>
            <li>
              <p className="text">
                Receive NFTs rewards or incentives through promotions or
                airdrops.
              </p>
            </li>
            <li>
              <p className="text">
                Earn them by getting involved in activities or helping build the
                community.
              </p>
            </li>
            <li>
              <p className="text">
                Obtained through a referral program or a bounty campaign.
              </p>
            </li>
            <li>
              <p className="text">
                Score them from the company itself as a reward for being an
                early adopter, special events, or loyalty program.
              </p>
            </li>
          </ol>
          <p className="text">
            No matter how you obtain the NFTs, once you have them, you have a
            voice in the direction of the Reptilians company and its products.
          </p>
        </details>
        <h3>How does voting work</h3>
        <p className="text">
          In the beginning, we will use a simple chat bot or will manage the
          process manually. But we have a plan to implement a blockchain voting
          service to automate it and make it more transparent.{"\n"}
          {"\n"}
          In general - it will be pretty simple, democratic, fair, and
          transparent.{" "}
        </p>
        <details className="details">
          <summary>Adios to traditional DAOs:</summary>
          <p className="text">
            We want to avoid classic DAOs where the community can vote based on
            the amount of tokens they're holding because we don't have the goal
            to use tokens as a product, we want to use them as a tool. Because
            of that, we decided to make the voting process operate by using the
            wallets that own NFTs from the collection that's connected to the
            product.{"\n"}
            {"\n"}
            For example: If you have an NFT from the Reptilian game collection -
            you can vote to make changes to this game. If you have several NFTs
            of several collections - you can vote for changes in products or
            services that are connected with these collections. And for those
            super special NFTs such as Philosoraptors on the Unique network and
            Pixeraptors on the Polygon network, you'll have the ability to vote
            on all aspects of the Reptilians.
          </p>
        </details>
        {"\n"}
        <details className="details">
          <summary>Get a sneak peek:</summary>
          <p className="text">
            We'll be giving the community a heads-up on all our plans and
            developments, from roadmaps to new ideas and more.
          </p>
        </details>
        {"\n"}
        <details className="details">
          <summary>Community First:</summary>
          <p className="text">
            We're all about putting the community first, that's why we won't
            make any big moves without getting input and approval from our
            community. And, also, we are lazy as all creative people are - we
            won't do anything without the community's decision due to that. We
            will continue to announce new ideas or possible changes to the
            products on our social networks and offer ways to vote for them, as
            well as what results we expect from each decision.
          </p>
        </details>
        {"\n"}
        <details className="details">
          <summary>Make your voice heard:</summary>
          <p className="text">
            For each of our products, we'll have a list of ideas and changes up
            for voting. As a holder of NFTs from that product's collection,
            you'll have the power to vote for each suggestion and help determine
            the direction of the product. NFT holders can vote for each
            suggestion in this list, and the order of the items will change
            depending on the votes of the users. The next voting always will be
            for the first item on the list.
          </p>
        </details>
        {"\n"}
        <details className="details">
          <summary>Got a great idea? Share it!</summary>
          <p className="text">
            All NFT holders will be able to offer their ideas to this list and
            these ideas are given equal weight in the voting process.
          </p>
        </details>
        <h3>Voting process</h3>
        <p className="text">
          It's super simple, really. Just imagine this scenario:
        </p>
        <ol className="list">
          <li>
            <p className="text">
              We've got a roadmap for a mobile app, let's call it Reptilian.
            </p>
          </li>
          <li>
            <p className="text">
              We're currently working on some updates for the game.
            </p>
          </li>
          <li>
            <p className="text">
              We're making a list of future changes for Reptilian.
            </p>
          </li>
          <li>
            <p className="text">We're sharing it with the community.</p>
          </li>
          <li>
            <p className="text">
              Some of our NFT holders may have ideas for changes that they don't
              see on the list - no problem! They can add their own ideas to the
              list.
            </p>
          </li>
          <li>
            <p className="text">
              We'll give everyone some time to think about the changes before
              voting - after all, we're still working on some changes at this
              point.
            </p>
          </li>
          <li>
            <p className="text">
              The Reptilians will announce the start date of the next voting.
            </p>
          </li>
          <li>
            <p className="text">
              NFT holders will vote on the items on the list.
            </p>
          </li>
          <li>
            <p className="text">
              On the voting start date, the first item on the list will be the
              next thing we work on.
            </p>
          </li>
          <li>
            <p className="text">
              NFT holders will vote on specific options within the item. For
              example, it could be "Remove all ads from the game" with options
              "Yes" or "No". Or "Add a campaign mode to the game" with specific
              details for the options.
            </p>
          </li>
          <li>
            <p className="text">
              NFTs lock in smart contracts till the end of voting.
            </p>
          </li>
          <li>
            <p className="text">
              Profit, YOU helped decide what we will be doing in the next couple
              of months!
            </p>
          </li>
        </ol>
        <h3>How do we protect ourselves from ourselves</h3>
        <p className="text">
          Yes, there is a lot of danger! We are trying to make a totally new
          approach to the world. But with that comes the risk of being attacked
          from all angles.{"\n"}
          {"\n"}
          Some examples of potential attacks include:
        </p>
        <ol className="list">
          <li>
            <p className="text">
              A 51% attack, where somebody is holding a large amount of NFTs
              that allows them to try and manipulate our voting system and
              disrupt our vision.
            </p>
          </li>
          <li>
            <p className="text">
              The community not being ready for the level of autonomy we're
              giving them and making poor decisions that could harm our company
              and ideas.
            </p>
          </li>
          <li>
            <p className="text">
              Social engineering tactics that attempt to manipulate individuals
              into harming the company and community.
            </p>
          </li>
          <li>
            <p className="text">And let's be real, the list goes on and on.</p>
          </li>
        </ol>
        <p className="text">
          We're all about creating a self-governing anarchy-style community that
          will create something good and change the world in a good way, showing
          that people can make choices and build the world by themselves.{"\n"}
          But, despite this, we need some rules which will bring freedom
          gradually. {"\n"}
          {"\n"}
          That's why we are creating several rules which will serve multiple
          purposes:
        </p>
        <ol className="list">
          <li>
            <p className="text">Take care of and protect our community</p>
          </li>
          <li>
            <p className="text">
              Take care of and protect all the employees of the Reptilians
            </p>
          </li>
          <li>
            <p className="text">Grow the company and our community</p>
          </li>
          <li>
            <p className="text">Give time for the products to launch</p>
          </li>
        </ol>
        <details className="details">
          <summary>Voting by wallets, not NFTs</summary>
          <p className="text">
            We're about keeping it fair and democratic, and that's why we're
            making sure that the voting power is based on the wallets that own
            our NFTs, not the number of NFTs held. We need to avoid situations
            where somebody acquires the majority of the NFTs and wants to cause
            damage to any of our products product or the Reptilians brand. Also,
            this makes voting unfair and not democratic - the voice of this
            person will be stronger than the voice of somebody with just 1 NFT.
            This is not right. We want to make sure that everyone's voice is
            heard and that's why we're sticking to this approach.{"\n"}
            {"\n"}
            That's why we decided to make voting influenced only by each wallet
            that owns the NFTs, and it doesn't matter how many NFTs this wallet
            owns - a million or one.{"\n"}
            {"\n"}
            Sure, there may be ways for bad actors to hack the system by using
            millions of wallets - but it will be a really difficult task for
            this bad guy. It won't be worth all the trouble for them.
          </p>
        </details>
        {"\n"}
        <details className="details">
          <summary>Veto of the founders</summary>
          <p className="text">
            We're all about community-driven decisions, but sometimes things can
            get pretty crazy. We understand that sometimes the community may
            make decisions that could harm the Reptilians' potential. That's
            why, during the early stages of a product's life, the founders (4
            indie developers who created the Reptilians) have the power to veto
            a decision made by the community. But don't worry, this veto power
            comes with responsibility. If the founders use it, they must provide
            a clear explanation for their decision. No shady business, just
            making sure we're not making any hasty decisions that could
            potentially harm the Reptilians vision or the products themselves.
            This way, the vetoed item goes back to the discussion table and the
            community (including the founders) can work together to find a
            suitable solution.{"\n"}
            {"\n"}
            We want to keep all the aspects of the Reptilians safe, and we
            understand that there could be a hypothetical situation where
            somebody pushed the community to close a potential idea before it
            brings results.{"\n"}
            {"\n"}
            But we remember our idea, mission, and goals. That's why we, the
            founders, limit ourselves. These rules will be working only on the
            first stages of each product's life and, after that, we will take
            away this right from ourselves. Because in the end, this is your
            company too!
          </p>
        </details>
        {"\n"}
        <details className="details">
          <summary>Stages for the products of the Reptilians</summary>
          <p className="text">
            And here are some details about the stages of a product's life.
            We're all about taking things step by step and that's why we've got
            stages for all our products. We wanna make sure the community is
            ready to take on more responsibility as the product grows. We're
            starting off small and gradually giving more power to the community
            as we go. The influence of the community will be growth from the 1st
            stage and decision making for new features and changes, to the 4th
            stage where the community can close the product and founders lose
            the right to veto this decision. Because the start of a product is
            the time when it can be buried really fast.{"\n"}
            {"\n"}
            <strong>
              Stage 1: NFT holders can vote for changes and propose new ideas
              for voting.
            </strong>
            {"\n"}
            <strong>
              Stage 2: NFT holders can do the same things as in stage 1 as well
              as move the product to a safe zone.
            </strong>
            {"\n"}
            <strong>
              Stage 3: NFT holders can do the same things as in stage 2, as well
              as close the product down if they want to.
            </strong>
            {"\n"}
            <strong>
              Stage 4: Founders can't use the right to veto anymore.
            </strong>
            {"\n"}
            {"\n"}
            We'll set a time frame for Stage 1 when we start working on a new
            product. It could be 6 months, 1 year, or more. We'll decide
            together with the community. As the product grows and develops,
            we'll move on to the next stages by voting.
          </p>
        </details>
        {"\n"}
        <details className="details">
          <summary>Safe zone for the part of products</summary>
          <p className="text">
            We're all about creating a happy and safe work environment for our
            team and wanna create a kickass workplace for everyone in the
            Reptilians. So, we've got a "vice versa ban-hammer" in place, and
            it's used in a fair and just way.{"\n"}
            {"\n"}
            We've got a "Safe Zone" for three of our most important products.
            This zone is like a fortress that protects these products with all
            main streams of revenue from any unforeseen events and unexpected
            drama. It will make life safer for all teammates. {"\n"}
            {"\n"}
            But here's the catch, only three products can be in this zone at a
            time. So if the community wants to move a new product in, they have
            to decide which one to kick out. And remember, the founders can use
            their veto power if needed.
          </p>
        </details>
        {"\n"}
        <details className="details">
          <summary>Locking NFTs and responsibility for decisions</summary>
          <p className="text">
            We believe in freedom, but we also believe in being responsible for
            our actions. So, if someone in our community makes a proposal or
            option inside a proposal that could harm our products or community,
            we want to make sure they share that responsibility.
            {"\n"}
            {"\n"}
            To make sure this happens, any community member can flag the option
            inside the proposal as potentially harmful, with a reason why. Our
            team will then review these flags and if they're found to be true,
            the proposal or vote will be marked as harmful.{"\n"}
            {"\n"}
            Even if these harmful options win a vote, the NFT holders who voted
            for them won't be left off the hook. Their tokens, which were locked
            in smart contracts, will be sent to the company and distributed
            according to our tokenomics rules.{"\n"}
            {"\n"}
            It's all about taking responsibility for our actions and making sure
            we're moving forward as a community in a safe and responsible way.
          </p>
        </details>
        <p className="text">
          These rules help us to keep the balance between the company and the
          community while sharing its freedom and responsibilities. And, most
          importantly, keep both the company and our community safe.{"\n"}
          {"\n"}
          Mate! If you have any idea how to hack us and our community or how to
          make it safer - please share it with us by{" "}
          <a href="https://t.me/sivkovg" style={{ color: "#FDFF52" }}>
            @sivkovg
          </a>
          in Telegram or via{" "}
          <a
            href="mailto:hey@reptilians.band?subject=I have some text for you!"
            style={{ color: "#FDFF52" }}
          >
            hey@reptilians.band
          </a>
          !{"\n"}
          It makes the community and ideas safer and you get a gift.
        </p>

        <h2 className="title" id="Tokenomicsandbenefits">
          Tokenomics and benefits{" "}
        </h2>

        <p className="text">
          Our NFTs are more than just digital assets, they're a symbol of
          community engagement and participation. {"\n"}
          {"\n"}
          But here are their perks, benefits and tokenomics ;)
        </p>
        <h3>Tokenomics</h3>
        <ol className="list">
          <li>
            <p className="text">
              20% of the tokens will be distributed to the community through a
              fair launch and incentivized activities.
            </p>
          </li>
          <li>
            <p className="text">
              40% of the tokens will be retained in the Reptilians treasury for
              future development and operations.
            </p>
          </li>
          <li>
            <p className="text">
              20% of the tokens will be allocated for partnerships and
              collaborations.
            </p>
          </li>
          <li>
            <p className="text">
              10% of the tokens will be reserved for the team and early
              supporters.
            </p>
          </li>
          <li>
            <p className="text">
              10% of the tokens will be reserved for potential investors.
            </p>
          </li>
        </ol>
        <h3>
          What kind of kickass possibilities do these NFTs bring to the table?
        </h3>
        <p className="text">
          NFTs provide a wide range of possibilities for community members to
          have a say in the development of the Reptilians' company and its
          products and some sweet benefits.
        </p>
        <p className="text">
          <strong>
            Directly influencing the direction of the Reptilians and our
            products
          </strong>
        </p>
        <ol className="list">
          <li>
            <p className="text">
              Voting on Reptilians plans and ideas for the products
            </p>
          </li>
          <li>
            <p className="text">
              Proposing your own ideas for voting by the community
            </p>
          </li>
          <li>
            <p className="text">
              Participating in the decision-making process of the Reptilians
            </p>
          </li>
          <li>
            <p className="text">
              Having a tangible way to shape the Reptilians and their products
              future
            </p>
          </li>
          <li>
            <p className="text">
              Having a voice in the development of new products and services
            </p>
          </li>
        </ol>
        <p className="text">
          <strong>Exclusive activities and events</strong>
        </p>
        <ol className="list">
          <li>
            <p className="text">Private chats for NFT holders</p>
          </li>
          <li>
            <p className="text">
              Exclusive beta testing of new products and services
            </p>
          </li>
          <li>
            <p className="text">Early access to new products and services</p>
          </li>
          <li>
            <p className="text">Special events and meetups for NFT holders</p>
          </li>
          <li>
            <p className="text">
              Exclusive NFTs holders contests, lotteries, actions, and games in
              real life
            </p>
          </li>
          <li>
            <p className="text">
              Private Q&A sessions with the Reptilians' founders
            </p>
          </li>
        </ol>
        <p className="text">
          <strong>Valuable benefits and perks</strong>
        </p>
        <ol className="list">
          <li>
            <p className="text">
              Unlocking special features or content in our products and services
            </p>
          </li>
          <li>
            <p className="text">
              Exclusive discounts and offers for NFT holders
            </p>
          </li>
          <li>
            <p className="text">
              Access to exclusive merchandise or collectibles in real life
            </p>
          </li>
          <li>
            <p className="text">
              The ability to trade or sell NFTs on our marketplace
            </p>
          </li>
          <li>
            <p className="text">
              The ability to use NFTs as a form of payment for our products and
              services
            </p>
          </li>
          <li>
            <p className="text">
              The ability to participate in a referral program and earn extra
              NFTs
            </p>
          </li>
        </ol>
        <h2 className="title" id="Financials(withoutpants)">
          Financials (without pants)
        </h2>
        <p className="text">
          We're currently running on pure passion and building a team of
          like-minded individuals. At this point, we don't have any funding or
          revenue from our flagship product, Reptilians.{"\n"}
          {"\n"}
          But, fear not! We've got big plans for our financial future:
        </p>
        <ol className="list">
          <li>
            <p className="text">
              First and foremost, we plan to raise funds through the
              distribution of NFTs. This will give us a boost, allow us to
              expand our team and finally, start paying ourselves a salary. But,
              let's not forget, NFTs are just a tool for us and will not be our
              main source of revenue.
            </p>
          </li>
          <li>
            <p className="text">
              Next up, we're working on implementing revenue streams for all our
              products that are comfortable for our users, and not just
              buzz-making. We want to create ways to grow and move forward
              faster without compromising on user experience. And, of course,
              all these potential revenue streams will be agreed upon with our
              community.
            </p>
          </li>
          <li>
            <p className="text">
              Lastly, we're open to investments, but with a catch. Not many
              investors are willing to invest in a company as free as ours and
              we intend to keep it that way. So, we'll have some boundaries in
              place for any potential investors, but we're always open to
              proposals.
            </p>
          </li>
        </ol>
        <h2 className="title" id="Plans2023">
          Plans 2023
        </h2>
        <p className="text">
          2023 is the year we make moves! Here's what we're gunning for in the
          first half of the year:
        </p>
        <details className="details">
          <summary>Q1 2023:</summary>
          <ol className="list">
            <li>
              <p className="text">
                Let the world know about Reptilians with our paper release
              </p>
            </li>
            <li>
              <p className="text">
                Building a strong community of 300 like-minded individuals
              </p>
            </li>
            <li>
              <p className="text">
                "Philosoraptors" NFT collection hits the marketplaces
              </p>
            </li>
            <li>
              <p className="text">
                Minting "Pixeraptors" collection on a new blockchain
              </p>
            </li>
            <li>
              <p className="text">
                Reaching out to potential collaborators for real-world and
                digital projects
              </p>
            </li>
            <li>
              <p className="text">
                Final Stages of Alpha testing for our "falling cats" game
              </p>
            </li>
            <li>
              <p className="text">
                Community voting on the future of the Reptilian game
              </p>
            </li>
            <li>
              <p className="text">Expanding the team with 2 new members</p>
            </li>
          </ol>
        </details>
        {"\n"}
        <details className="details">
          <summary>Q2 2023:</summary>
          <ol className="list">
            <li>
              <p className="text">
                Community continues to grow with 2000 members
              </p>
            </li>
            <li>
              <p className="text">
                Collaborations with at least one real-world and one digital
                project
              </p>
            </li>
            <li>
              <p className="text">
                The Reptilians multichain marketplace is unveiled
              </p>
            </li>
            <li>
              <p className="text">
                "Falling cats" game and mental health app hit the app stores
              </p>
            </li>
            <li>
              <p className="text">
                Team expansion with an additional 2 members
              </p>
            </li>
          </ol>
        </details>
        {"\n"}
        <details className="details">
          <summary>
            Q3 and Q4 plans are still being ironed out, but our overarching
            goals for 2023 are:
          </summary>
          <ol className="list">
            <li>
              <p className="text">A community of 15,000 across all networks</p>
            </li>
            <li>
              <p className="text">10 successful collaborations</p>
            </li>
            <li>
              <p className="text">1500 NFT holders</p>
            </li>
            <li>
              <p className="text">2 games and 1 app in stores</p>
            </li>
            <li>
              <p className="text">Expanding the team even more.</p>
            </li>
          </ol>
        </details>

        <h2 className="title" id="Team">
          Team
        </h2>
        <details className="details">
          <summary>Current team</summary>
          <p className="text">
            Right now we are a small team - only 7 teammates:
          </p>
          <strong>George.</strong> Experienced product and project manager with
          a technical background. Responsible for all questions, processes, and
          generation of ideas at the global level. He is in love with Chupa
          Chups, motorcycles, and Legos. {"\n"}
          <strong>Co-founder of Reptilians.</strong>{" "}
          <a href="https://t.me/sivkovg" style={{ color: "#FDFF52" }}>
            TG @sivkovg
          </a>
          {"\n"}
          {"\n"}
          <strong>Aleksei.</strong> The God of engineering, can change the stack
          in 2 nights and rewrite the whole game on it. Responsible for all
          technical parts of our products and engineering processes. He adores
          technologies and chilling.{"\n"}
          <strong>Co-founder of Reptilians.</strong>{" "}
          <a href="https://t.me/gokadi" style={{ color: "#FDFF52" }}>
            TG @gokadi
          </a>
          {"\n"}
          {"\n"}
          <strong>Eugene.</strong> The heart and cold mind of our team always
          keep us in flow and good mood. Excellent manager with a technical
          background and responsible for all WEB3 parts of the Reptilians. His
          passions are offroad cars, beer and of course cats.{"\n"}
          <strong>Co-founder of Reptilians. </strong>{" "}
          <a href="https://t.me/ferzin8" style={{ color: "#FDFF52" }}>
            TG @ferzin8
          </a>
          {"\n"}
          {"\n"}
          <strong>Stan.</strong> The sun of art and different visions, he can
          make a design for everything including music. The head of art in
          Reptilians and responsible for the design, visual vision, arts, and so
          on, and so on. Co-founder of Reptilians. He loves to smoke weed and
          travel. {"\n"}
          <strong>Co-founder of Reptilians. </strong>{" "}
          <a href="https://t.me/acidacid" style={{ color: "#FDFF52" }}>
            TG @acidacid
          </a>
          {"\n"}
          {"\n"}
          <strong>Anna.</strong> Our junior intern of art, but with a fiery
          heart and burning with the idea of Reptilians. She loves Dostoevsky
          and Giger and has a weakness for Jung's works.{"\n"}
          {"\n"}
          <strong>Ilya.</strong> Strong and structured vision and mind, totally
          deep dive into web3 and evangelist of it. The manager who rides the
          team in the game is "falling cats". Responsible for all aspects of
          this game. He is really into competitive shooters, tech and sleep.
          {"\n"}
        </details>
        {"\n"}
        <details className="details">
          <summary>Structure</summary>
          <p className="text">
            We're all about working together, sharing responsibilities, and
            making sure all aspects of our product are covered.
          </p>
          <p className="text">
            But as we grow and bring on more teammates, we plan to structure
            ourselves in a more traditional way.
          </p>
          <ol className="list">
            <li>
              <p className="text">
                We'll create product-specific teams that are responsible for all
                aspects of their product, like the Reptilian game team. They'll
                have a manager to handle communication with the community and
                oversee the product, and engineers to handle the technical side
                of things. Everyone has an equal say in these teams.
              </p>
            </li>

            <li>
              <p className="text">
                The company won't micromanage the teams, teams will have total
                freedom to do anything but each team will still have to follow
                the guidelines outlined in the Reptilians' paper.
              </p>
            </li>

            <li>
              <p className="text">
                We'll also have a Chief level position to coordinate all the
                teams and ensure the overall well-being of both the Reptilians
                community and the company.
              </p>
            </li>
          </ol>
          <p className="text">
            We're keeping it simple and hope it stays that way.
          </p>
        </details>
        {"\n"}
        <details className="details">
          <summary>Who we are looking for</summary>
          <p className="text">
            If you want to join us as a teammate, you always can check the open
            position in our RoadMap!{"\n"}
            {"\n"}
            But here is a short list of who we are looking for:
          </p>
          <ol className="list">
            <li>
              <p className="text">Solidity developers</p>
            </li>

            <li>
              <p className="text">Fullstack developers</p>
            </li>

            <li>
              <p className="text">Frontend developers</p>
            </li>

            <li>
              <p className="text">Backend developers</p>
            </li>

            <li>
              <p className="text">UI/UX designers</p>
            </li>

            <li>
              {" "}
              <p className="text">Artists</p>{" "}
            </li>

            <li>
              <p className="text">Content managers</p>
            </li>
          </ol>
          Welcome to contact us at{" "}
          <a href="https://t.me/sivkovg" style={{ color: "#FDFF52" }}>
            @sivkovg
          </a>
          in Telegram or via{" "}
          <a
            href="mailto:hey@reptilians.band?subject=I have some text for you!"
            style={{ color: "#FDFF52" }}
          >
            hey @reptilians.band
          </a>
          !
        </details>
        {"\n"}
      </div>
      <section className="section section-contacts" id="contacts">
        {"\n"}
        <h2 className="title" id="Stillhere?">
          Still here?
        </h2>
        <p className="description">
          Any questions or some suggestions are welcome.
          {"\n"}
          Feel free to contact us 24/7 and 365 days in the year
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
              src="./assets/heroAnton.png"
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
    </div>
  );
}
