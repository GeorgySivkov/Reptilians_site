import React, { useEffect, useState } from "react";
import Contacts from "../Contacts/Contacts";
import GamesApps from "../GamesApps/GamesApps";
import Navigation from "../Navigation/Navigation";
import NftSection from "../NftSection/NftSection";
import WeAreSection from "../WeAreSection/WeAreSection";

export default function MainPage() {
  return (
    <>
      <Navigation />
      <WeAreSection />
      <NftSection />
      <GamesApps />
      <Contacts />
    </>
  );
}
