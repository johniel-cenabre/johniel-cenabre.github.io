import React from "react";

import ImageLoader from "../../../../components/ImageLoader";
import TextReveal from "../../../../components/TextReveal";

import useProfile from "./hooks/useProfile";
import ProfileSt from "./Profile.style";

const Profile = () => {
  const { image, isError, isLoading, loadImage, isShownMyInfo } = useProfile();
  return (
    <ProfileSt id="profile">
      <div>
        <ImageLoader
          className="image"
          text="View Profile"
          image={image}
          isError={isError}
          isLoading={isLoading}
          loadImage={loadImage}
        />
        <TextReveal
          className="my-info"
          isShown={isShownMyInfo}
          blinker={<div className="blinker" />}
        >
          Johniel Judah Cenabre
        </TextReveal>
        <TextReveal
          className="my-info"
          showDelay={1500}
          isShown={isShownMyInfo}
          blinker={<div className="blinker" />}
        >
          Fullstack Developer
        </TextReveal>
        <TextReveal
          className="my-info"
          showDelay={3000}
          isShown={isShownMyInfo}
          blinker={<div className="blinker" />}
        >
          Cebu, Philippines
        </TextReveal>
        <TextReveal
          className="my-info"
          showDelay={4500}
          isShown={isShownMyInfo}
          blinker={<div className="blinker" />}
        >
          JS || CSS || PHP || SQL
        </TextReveal>
        <TextReveal
          className="my-info"
          showDelay={6000}
          isShown={isShownMyInfo}
          blinker={<div className="blinker" />}
        >
          React || Node || Laravel || AWS
        </TextReveal>
      </div>
    </ProfileSt>
  );
};

export default Profile;
