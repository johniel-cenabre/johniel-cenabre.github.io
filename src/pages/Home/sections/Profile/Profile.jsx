import React from "react";

import ImageLoader from "../../../../components/ImageLoader";
import TextReveal from "../../../../components/TextReveal";

import useProfile from "./hooks/useProfile";
import ProfileSt from "./Profile.style";

const Profile = () => {
  const { classes, image, isError, isLoading, loadImage, isShownMyInfo } =
    useProfile();
  return (
    <ProfileSt className={classes.join(" ")} id="profile">
      <div id="profile-container">
        <ImageLoader
          className="image"
          text="View Profile"
          image={image}
          isError={isError}
          isLoading={isLoading}
          loadImage={loadImage}
        />
        {isShownMyInfo && (
          <div id="my-info-container">
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
              BSIT, ACT, Cebu, Philippines
            </TextReveal>
            <TextReveal
              className="my-info skills"
              showDelay={4500}
              isShown={isShownMyInfo}
              blinker={<div className="blinker" />}
            >
              JS || CSS || PHP || SQL || GIT
            </TextReveal>
            <TextReveal
              className="my-info skills"
              showDelay={6000}
              isShown={isShownMyInfo}
              blinker={<div className="blinker" />}
            >
              React || Node || Laravel || AWS
            </TextReveal>
          </div>
        )}
      </div>
    </ProfileSt>
  );
};

export default Profile;
