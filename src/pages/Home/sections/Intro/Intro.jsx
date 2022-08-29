import React from "react";

import useClient from "../../../../api/useClient";
import Loader from "../../../../components/Loader";
import TextReveal from "../../../../components/TextReveal";

import useIntro from "./hooks/useIntro";
import IntroSt, { ClientInfoSt, DownEmojiSt } from "./Intro.style";

const Intro = () => {
  const { isLoading } = useIntro({ loadDelay: 7000 });
  const { client = {} } = useClient();
  const { data: clientData = {}, ...clientResponse } = client;
  const { city, country_name, IPv4, state } = clientData;

  if (clientResponse.isValidating || isLoading)
    return (
      <IntroSt>
        <Loader text="Syncing..." />
      </IntroSt>
    );

  return (
    <IntroSt>
      <div id="intro-container">
        <TextReveal blinker={<div className="blinker" />}>
          Welcome IP <ClientInfoSt>{IPv4}</ClientInfoSt>
        </TextReveal>
        <TextReveal blinker={<div className="blinker" />} showDelay={1500}>
          How is the weather there in <ClientInfoSt>{city}</ClientInfoSt>?
        </TextReveal>
        <TextReveal blinker={<div className="blinker" />} showDelay={3000}>
          I love your <ClientInfoSt>{state}</ClientInfoSt>
        </TextReveal>
        <TextReveal blinker={<div className="blinker" />} showDelay={4500}>
          And your country <ClientInfoSt>{country_name}</ClientInfoSt>
        </TextReveal>
        <TextReveal blinker={<div className="blinker" />} showDelay={6000}>
          Allow me to introduce my self{" "}
          <DownEmojiSt smooth to="#profile">
            ⬇
          </DownEmojiSt>
        </TextReveal>
      </div>
    </IntroSt>
  );
};

export default Intro;
